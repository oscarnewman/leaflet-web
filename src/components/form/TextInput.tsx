import { cx } from '@/utilities/classes'
import { ReactNode } from 'react'
import { useField } from 'formik'

type Props = JSX.IntrinsicElements['input'] & {
	title: string
	leadingSlot?: ReactNode
	trailingSlot?: ReactNode
	name: string
}

function TextInput({
	title,
	leadingSlot,
	trailingSlot,
	type = 'text',
	onChange = _ => ({}),
	onBlur = _ => ({}),
	...props
}: Props) {
	const [field, meta] = useField(props)
	return (
		<div>
			<label
				htmlFor={props.id || props.name}
				className="block text-sm font-medium text-gray-700"
			>
				{title}
			</label>
			<div className="mt-1 relative rounded-md shadow-sm">
				{leadingSlot && (
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						{leadingSlot}
					</div>
				)}
				<input
					onChange={onChange}
					type={type}
					{...field}
					{...props}
					className={cx(
						'focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md',
						{ 'pl-7': Boolean(leadingSlot), 'pr-7': Boolean(trailingSlot) }
					)}
				/>
				{trailingSlot && (
					<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
						{trailingSlot}
					</div>
				)}
			</div>
			{meta.touched && meta.error && (
				<p className="text-red-500 capitalize">{meta.error}</p>
			)}
		</div>
	)
}

export default TextInput
