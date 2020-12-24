import { removeEmpty } from './../utilities/objects'
import { Property } from '@/types/property'
import { useQuery } from 'react-query'
import { PaginatedResponse } from './../types/api'
import { client } from './client'
import { getPaginatedData } from './pagination'
import { formatISO } from 'date-fns'

export interface PropertyQuery {
	page?: number
	bedrooms?: number
	startDate?: Date
	endDate?: Date
	costMin?: number
	costMax?: number
}

function cleanQuery(query: PropertyQuery) {
	const cleaned: any = { ...query }

	if (query.startDate) cleaned.startDate = formatISO(query.startDate)
	if (query.endDate) cleaned.endDate = formatISO(query.endDate)

	return removeEmpty(cleaned)
}

/**
 * Queries all properties
 */
export async function getProperties(query: PropertyQuery = {}) {
	const results = await client.get<PaginatedResponse<Property>>('/properties', {
		params: { ...cleanQuery(query) },
	})
	return results.data
}

export async function getProperty(id: string) {
	return (await client.get(`/properties/${id}`)).data
}
