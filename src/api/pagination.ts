import { PaginatedResponse } from '@/types/api'
import { keysToCamel } from '@/utilities/capitalization'
import { AxiosResponse } from 'axios'

/**
 * Loads a paginated query and transforms it into a nice format
 * @param fetcher The function to load the data
 */
export async function getPaginatedData<T>(
	fetcher: () => Promise<AxiosResponse<any>>
): Promise<PaginatedResponse<T>> {
	const results = await fetcher()
	const transformed = keysToCamel(results.data)
	return <PaginatedResponse<T>>transformed
}
