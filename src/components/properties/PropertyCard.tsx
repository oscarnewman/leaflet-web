import { Property } from '@/types/property'
import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import Icon from '../ui/icons/Icon'

type Props = {
	/** The property to display */
	property: Property
}

/**
 * A card to show a preivew of a property
 */
function PropertyCard({ property }: Props) {
	return (
		<Link href={`/property/${property.id}`}>
			<a className="rounded-lg overflow-hidden border-black border-2 h-full flex flex-col justify-between">
				<div>
					<div className="w-full h-48 relative">
						<Image
							src={property.image}
							layout="fill"
							className="object-cover"
							priority
							sizes="(max-width: 3000px) 250px"
						/>
					</div>
					<div className="p-4">
						<div className="flex text-gray-600 text-sm mb-2 space-x-4">
							<p className="flex items-center space-x-2">
								<Icon icon="calendar" className="w-4" />
								<span>
									{format(parseISO(property.startDate), 'MMMM')} through{' '}
									{format(parseISO(property.endDate), 'MMMM')}
								</span>
							</p>
						</div>
						<p className="font-bold text-lg leading-tight mb-2">
							{property.bedrooms}{' '}
							{property.bedrooms === 1 ? 'bedroom' : 'bedrooms'} near{' '}
							{property.area}
						</p>
					</div>
				</div>
				<p className="px-4 py-2 antialiased bg-black text-white font-bold flex justify-between items-center">
					<span>
						${property.rent} <span className="text-gray-500">/month</span>
					</span>
					<Icon icon="arrow-right" className="w-4" />
				</p>
			</a>
		</Link>
	)
}

export default PropertyCard
