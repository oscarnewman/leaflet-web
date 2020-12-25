import InputContainer, { AffixSlotProps } from './InputContainer'
import InputGroup from './InputGroup'

type Props = AffixSlotProps & {
	title?: string
	type?: string
	name: string
	onChange?: (value: string) => void
	value?: any
	placeholder?: string
}

function TextField({
	title,
	type = 'text',
	value,
	placeholder,
	name,
	onChange,
	...affixSlotProps
}: Props) {
	return (
		<InputGroup title={title}>
			<InputContainer {...affixSlotProps}>
				<input
					className="w-full border-none focus:ring-transparent p-0"
					onChange={e => onChange && onChange(e.target.value)}
					type={type}
					value={value}
					name={name}
					placeholder={placeholder}
				/>
			</InputContainer>
		</InputGroup>
	)
}

export default TextField
