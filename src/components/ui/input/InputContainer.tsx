import { cx } from '@/utilities/classes'
import { StyleProps } from '@/utilities/styleProps'
import { ReactNode } from 'react'

export type AffixSlotProps = {
	leadingSlot?: ReactNode
	trailingSlot?: ReactNode
	onClickLeading?: () => void
	onClickTrailing?: () => void
}

type Props = StyleProps &
	AffixSlotProps & {
		children: ReactNode
		cursor?: 'pointer' | 'default' | 'text'
	}
function InputContainer({
	children,
	leadingSlot,
	trailingSlot,
	onClickLeading,
	onClickTrailing,
	cursor = 'text',
	className,
	...props
}: Props) {
	return (
		<div className="relative">
			<div
				className={cx(
					'flex justify-between border',
					'shadow-md ring-1 ring-transparent focus-within:ring-indigo-500 focus-within:border-indigo-500 block w-full sm:text-sm',
					'border-gray-300 rounded-md text-black',
					'dark:bg-black dark:border-gray-700 dark:text-white',
					'py-2 px-3',
					{
						'cursor-pointer': cursor === 'pointer',
						'cursor-text': cursor === 'text',
						'cursor-default': cursor === 'default',
					},

					className
				)}
				{...props}
			>
				{leadingSlot && (
					<button
						onClick={onClickLeading}
						disabled={!onClickLeading}
						className={cx('flex flex-shrink-0 flex-grow-0 items-center', {
							'pointer-events-none cursor-auto': !onClickLeading,
						})}
					>
						{leadingSlot}
					</button>
				)}
				{children}
				{trailingSlot && (
					<button
						onClick={onClickTrailing}
						disabled={!onClickTrailing}
						className={cx('flex flex-shrink-0 flex-grow-0 items-center', {
							'pointer-events-none cursor-auto': !onClickTrailing,
						})}
					>
						{trailingSlot}
					</button>
				)}
			</div>
		</div>
	)
}

export default InputContainer
