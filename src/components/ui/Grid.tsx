import { ClassValue, cx } from '@/utilities/classes'
import { ReactNode } from 'react'

type Props = {
	className?: ClassValue
	children?: ReactNode
}

function Grid({ className, children, ...rest }: Props) {
	return (
		<div className={cx('grid', className)} {...rest}>
			{children}
		</div>
	)
}

export default Grid
