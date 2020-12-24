import { cx } from '@/utilities/classes'
import { ReactNode } from 'react'
import InputGroup from './InputGroup'

type Props = {
	title?: string
	type?: string
	leadingSlot?: ReactNode
	trailingSlot?: ReactNode
	name: string
	onChange?: (value: string) => void
	value?: any
	placeholder?: string
}

function TextField({
	title,
	leadingSlot,
	trailingSlot,
	type = 'text',
	value,
	placeholder,
	name,

	onChange,
}: Props) {
	return (
		<InputGroup title={title}>
			<div className="relative">
				{leadingSlot && (
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						{leadingSlot}
					</div>
				)}
				<input
					onChange={e => onChange && onChange(e.target.value)}
					type={type}
					value={value}
					name={name}
					placeholder={placeholder}
					className={cx('form-input', {
						'pl-7': Boolean(leadingSlot),
						'pr-7': Boolean(trailingSlot),
					})}
				/>
				{trailingSlot && (
					<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
						{trailingSlot}
					</div>
				)}
			</div>
		</InputGroup>
	)
}

export default TextField
