import Button, { ButtonProps } from '@/components/ui/Button'
import { cx } from '@/utilities/classes'

type Props = ButtonProps

/**
 * A primary butting (using the theme's secondary color) for CTAs
 */
function PrimaryButton({ children, className, ...rest }: Props) {
	return (
		<Button
			href="/new"
			className={cx(
				'rounded bg-red-50 text-red-800 focus:outline-none transition-shadow duration-75',
				'ring-2 ring-offset-2 ring-offset-transparent focus:ring-offset-white ring-transparent focus:ring-red-100',
				'dark:bg-red-900 dark:text-red-50',
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
