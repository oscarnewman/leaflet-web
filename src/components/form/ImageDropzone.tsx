import { cx } from '@/utilities/classes'
import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Box from '../ui/Box'
import Grid from '../ui/Grid'
import Stack from '../ui/Stack'

type Props = {}

function ImageDropzone(props: Props) {
	const [files, setFiles] = useState([])

	const onDrop = useCallback(acceptedFiles => {
		// Do something with the files
		setFiles(
			acceptedFiles.map(file =>
				Object.assign(file, {
					preview: URL.createObjectURL(file),
				})
			)
		)
	}, [])

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

	return (
		<Box
			{...getRootProps()}
			className={cx(
				'border-gray-300 border-2 border-dashed rounded cursor-pointer hover:bg-gray-100',
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
						className="object-cover rounded border-4 border-white shadow overflow-hidden"
					>
						<img src={file.preview} className="w-full h-full" />
					</div>
				))}
			</Grid>
		</Box>
	)
}

export default ImageDropzone
