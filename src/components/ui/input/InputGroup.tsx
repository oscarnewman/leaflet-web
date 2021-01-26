import { cx } from '@/utilities/classes'
import { StyleProps } from '@/utilities/styleProps'
import { ReactNode } from 'react'
import Stack from '../Stack'

type Props = StyleProps & {
	/** The label for the input group */
	title: string

	/** An error string */
	error?: string

	/** The form input itself */
	children: ReactNode
}

/**
 * A simple wrapper to add a label to a form input
 */
function InputGroup({ title, className, style, error, children }: Props) {
	return (
		<label style={style} className={className}>
			{title && (
				<p
					className={cx('block text-sm font-medium mb-1', {
						'text-gray-700': !error,
						'text-red-700': error,
					})}
				>
					{title}
				</p>
			)}
			{children}
			{error && <p className="text-red-700">{error}</p>}
		</label>
	)
}

export default InputGroup
