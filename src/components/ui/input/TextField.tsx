import InputContainer, { AffixSlotProps } from './InputContainer'
import InputGroup from './InputGroup'

type Props = AffixSlotProps & {
	title?: string
	type?: string
	name: string
	onChange?: (value: string) => void
	value?: any
	placeholder?: string
	error?: string
}

function TextField({
	title,
	type = 'text',
	value,
	placeholder,
	name,
	error,
	onChange,
	...affixSlotProps
}: Props) {
	return (
		<InputGroup title={title}>
			<InputContainer {...affixSlotProps}>
				<input
					className="w-full border-none bg-transparent focus:ring-transparent p-0"
					onChange={e => onChange && onChange(e.target.value)}
					type={type}
					value={value}
					name={name}
					placeholder={placeholder}
				/>
			</InputContainer>
			{error && <p className="text-red-600 text-sm mt-1">{error}</p>}
		</InputGroup>
	)
}

export default TextField
