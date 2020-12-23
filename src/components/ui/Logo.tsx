import { StyleProps } from '@/utilities/styleProps'
import Link from 'next/link'

export function Logo(props: StyleProps) {
	return (
		<Link href="/">
			<a className="flex items-center">
				<svg
					viewBox="0 0 152 110"
					xmlns="http://www.w3.org/2000/svg"
					{...props}
				>
					<defs>
						<linearGradient x1="4.652%" y1="0%" x2="97.83%" y2="98.678%" id="a">
							<stop stopColor="#D2F9E2" offset="0%" />
							<stop stopColor="#ADECF6" offset="100%" />
						</linearGradient>
						<linearGradient x1="4.868%" y1="0%" x2="98.844%" y2="100%" id="b">
							<stop stopColor="#6EFBA8" offset="0%" />
							<stop stopColor="#7DE1F0" offset="100%" />
						</linearGradient>
					</defs>
					<g transform="translate(.172 .172)" fill="none" fillRule="evenodd">
						<ellipse fill="url(#a)" cx="97.328" cy="54.828" rx="53.5" ry="54" />
						<ellipse fill="url(#b)" cx="43.328" cy="58.828" rx="42.5" ry="43" />
					</g>
				</svg>
				<p className="font-bold ml-2 text-xl text-gray-800">Leaflet</p>
			</a>
		</Link>
	)
}
