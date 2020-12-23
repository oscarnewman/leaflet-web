import Axios from 'axios'

/**
 * The default API client
 */
export const client = Axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
})
