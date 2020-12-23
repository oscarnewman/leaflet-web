export class APIError extends Error {
	statusCode: number

	constructor(statusCode: number, message?: string) {
		super(message)
		this.name = `HTTP ${statusCode} exception`
		this.statusCode = statusCode
	}
}

export class ServerError extends APIError {
	constructor(statusCode: number = 500, message: string = '') {
		super(statusCode, message)
	}
}

export class ClientError extends APIError {
	constructor(statusCode: number = 400, message: string = '') {
		super(statusCode, message)
	}
}
