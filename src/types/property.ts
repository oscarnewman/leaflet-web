import { UUID } from './api'

export interface Image {
	id: UUID
	url: string
	width: number
	height: number
}
export interface Property {
	id: UUID
	images: Image[]
	bedrooms: number
	rent: number
	area: string
	startDate: string
	endDate: string
}
