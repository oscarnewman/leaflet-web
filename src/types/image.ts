import { UUID } from '@/types/api'

export interface Image {
	id: UUID
	url: string
	width: number
	height: number
}
