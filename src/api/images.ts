import { Image } from './../types/property'
import { client } from './client'

/**
 * Stories a file and returns an object with its ID
 * @param file The file to upload
 * @param onProgress A progress handler
 */
export async function storeImage(
	file: File,
	onProgress: (progress: ProgressEvent) => void
): Promise<Image> {
	const formData = new FormData()
	formData.append('image', file)
	const result = await client.post('/images', formData, {
		onUploadProgress: onProgress,
	})

	return result.data
}
