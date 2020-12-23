import { PaginatedResponse } from '@/types/api'
import { AxiosResponse } from 'axios'
import camelcaseKeys from 'camelcase-keys'

/**
 * Loads a paginated query and transforms it into a nice format
 * @param fetcher The function to load the data
 */
export async function getPaginatedData<T>(
	fetcher: () => Promise<AxiosResponse<any>>
): Promise<PaginatedResponse<T>> {
	const results = await fetcher()
	return results.data
}
