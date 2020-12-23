import { parseISO } from 'date-fns'
import { PaginatedResponse } from './../types/api'
import { Property } from '@/types/property'
import { useQuery } from 'react-query'
import { client } from './client'
import { getPaginatedData } from './pagination'

export interface PropertyQuery {
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
	const results = await getPaginatedData<Property>(() =>
		client.get('/properties', { params: { query } })
	)

	return results
}

export function useProperties(query: PropertyQuery = {}) {
	return useQuery<PaginatedResponse<Property>>(
		['properties', query],
		getProperties
	)
}
