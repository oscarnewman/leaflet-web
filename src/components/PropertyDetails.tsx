import { APIError } from '@/api/errors'
import { getProperty } from '@/api/properties'
import { UUID } from '@/types/api'
import { Property } from '@/types/property'
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
			<div className="container mx-auto">
				{status === 'loading' && <Spinner />}
				{status === 'error' && <p className="text-red-600">{error.message}</p>}
				{status === 'success' && <pre>{JSON.stringify(property, null, 2)}</pre>}
			</div>
		</div>
	)
}

export default PropertyDetails
