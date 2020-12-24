import { Property } from '@/types/property'
import { useQuery } from 'react-query'
import { PaginatedResponse } from './../types/api'
import { client } from './client'
import { getPaginatedData } from './pagination'

export interface PropertyQuery {
	page?: number
	bedrooms?: number
	startDate?: Date
	endDate?: Date
	costMin?: number
	costMax?: number
}

/**
 * Queries all properties
 */
export async function getProperties(query: PropertyQuery = {}) {
	const results = await client.get<PaginatedResponse<Property>>('/properties', {
		params: { ...query },
	})
	return results.data
}

export async function getProperty(id: string) {
	return (await client.get(`/properties/${id}`)).data
}
