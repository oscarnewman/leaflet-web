import { ReactNode } from 'react'
import Nav from '../Nav'

type Props = {
	children: ReactNode
}

function BaseLayout({ children }: Props) {
	return (
		<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			<Nav />
			{children}
		</div>
	)
}

export default BaseLayout
