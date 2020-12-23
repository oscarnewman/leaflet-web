import { APIError } from '@/api/errors'
import { getProperty } from '@/api/properties'
import { UUID } from '@/types/api'
import { Property } from '@/types/property'
import Image from 'next/image'
import { useQuery } from 'react-query'
import Nav from './Nav'
import Spinner from './ui/Spinner'

type Props = {
	propertyId: UUID
}

function PropertyDetails({ propertyId }: Props) {
	const { data: property, status, error } = useQuery<Property, APIError>(
		['property', propertyId],
		() => getProperty(propertyId)
	)

	return (
		<div>
			<Nav />
			<div className="max-w-4xl mx-auto">
				{status === 'loading' && <Spinner />}
				{status === 'error' && <p className="text-red-600">{error.message}</p>}
				{status === 'success' && (
					<div>
						<div className="w-full pb-1/2 rounded shadow-xl overflow-hidden relative">
							<Image
								src={property.image}
								layout="fill"
								className="object-cover"
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default PropertyDetails
