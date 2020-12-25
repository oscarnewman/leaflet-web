import { storeImage } from '@/api/images'
import { cx } from '@/utilities/classes'
import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Box from '../ui/Box'
import Grid from '../ui/Grid'
import Spinner from '../ui/Spinner'

type Props = {}

function ImageDropzone(props: Props) {
	const [files, setFiles] = useState([])

	const [uploads, setUploads] = useState({})

	const [ids, setIds] = useState([])

	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			// console.log(acceptedFiles)
			// acceptedFiles.forEach(async file => {
			// 	const image = await storeImage(file, progress => {})
			// 	setIds([...ids, image.id])
			// })
			// Do something with the files
			setFiles(
				files.concat(
					acceptedFiles.map((file: File) =>
						Object.assign(file, {
							preview: URL.createObjectURL(file),
						})
					)
				)
			)
		},
		[files]
	)

	const store = useCallback(
		file => {
			if (uploads[file.name]) return
			storeImage(file, () => ({})).then(image => {
				setIds(prev => [...prev, image.id])
				setUploads(prev => ({ ...prev, [file.name]: true }))
			})
		},
		[uploads]
	)

	useEffect(() => {
		for (const file of files) {
			store(file)
		}
	}, [files, store])

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: 'image/*',
		maxFiles: 10,
		onDrop,
	})

	useEffect(
		() => () => {
			// Make sure to revoke the data uris to avoid memory leaks
			files.forEach(file => URL.revokeObjectURL(file.preview))
		},
		[files]
	)

	const isDone = fileName => !!uploads[fileName]

	return (
		<Box
			{...getRootProps()}
			className={cx(
				'border-gray-300 border-2 border-dashed rounded cursor-pointer',
				'hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-900',
				'transition focus:outline-none focus:border-gray-500 bg-gray-50 p-6 text-gray-600'
			)}
			align="middle"
			justify="center"
		>
			<input {...getInputProps()} />
			{isDragActive ? (
				<p>Drop the files here ...</p>
			) : (
				<p>Drag and drop some photos here, or click to select photos</p>
			)}
			<Grid className="grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 pt-6">
				{files.map(file => (
					<div
						key={file.name}
						className={cx(
							'object-cover rounded border-4 border-white shadow overflow-hidden',
							{ 'opacity-50': !isDone(file.name) }
						)}
					>
						{!isDone(file.name) && <Spinner className="absolute top-0" />}
						<img src={file.preview} className="w-full h-full" />
					</div>
				))}
			</Grid>
		</Box>
	)
}

export default ImageDropzone
