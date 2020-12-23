import { UUID } from './api'

export interface Property {
	id: UUID
	image: string
	bedrooms: number
	rent: number
	area: string
	startDate: string
	endDate: string
}
