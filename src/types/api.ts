export type UUID = string

export interface PaginatedResponse<T> {
	currentPage: number
	data: T[]
	from: number
	to: number
	lastPage: number
	perPage: number
	total: number
}
