import Button, { ButtonProps } from '@/components/ui/Button'
import { cx } from '@/utilities/classes'

type Props = ButtonProps

/**
 * A primary butting (using the theme's secondary color) for CTAs
 */
function PrimaryButton({ children, className, ...rest }: Props) {
	return (
		<Button
			className={cx(
				'rounded bg-purple-500 text-white focus:outline-none',
				'ring-2 ring-offset-2 ring-offset-transparent focus:ring-offset-white ring-transparent focus:ring-purple-400',
				'hover:bg-purple-600 active:bg-purple-700 transition-all',
				className
			)}
			spinnerClass="text-gray-200"
			{...rest}
		>
			{children}
		</Button>
	)
}

export default PrimaryButton
