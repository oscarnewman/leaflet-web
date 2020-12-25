import camelcaseKeys from 'camelcase-keys'
import Axios, { AxiosError } from 'axios'
import { APIError, ClientError, ServerError } from './errors'

/**
 * The default API client
 */
export const client = Axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
	withCredentials: true,
})
client.get('/sanctum/csrf-cookie')

client.interceptors.response.use(
	response => {
		response.data = camelcaseKeys(response.data, { deep: true })
		return response
	},
	(error: AxiosError) => {
		const statusCode = error?.response?.status
		if (!statusCode) throw new APIError(500, error.message)

		if (statusCode >= 400 && statusCode < 500)
			throw new ClientError(statusCode, error.message)

		if (statusCode >= 500 && statusCode < 600)
			throw new ServerError(statusCode, error.message)
	}
)
