import { cx } from '@/utilities/classes'
import { forwardRef, ReactNode, RefObject } from 'react'

type Props = {
	[key: string]: any

	className?: string
	children?: ReactNode
	flex?: 'row' | 'col'
	align?: 'baseline' | 'top' | 'middle' | 'bottom'
	justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
}

function Box(
	{
		children,
		className,
		flex = 'col',
		align = 'top',
		justify = 'start',
		...rest
	}: Props,
	ref: RefObject<any>
) {
	return (
		<div
			ref={ref}
			className={cx(
				[`flex flex-${flex}`, `align-${align}`, `justify-${justify}`],
				className
			)}
			{...rest}
		>
			{children}
		</div>
	)
}

export default forwardRef(Box)
