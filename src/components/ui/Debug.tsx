type Props = {
	value: any
}

function Debug({ value }: Props) {
	return <pre>{JSON.stringify(value, null, 2)}</pre>
}

export default Debug
