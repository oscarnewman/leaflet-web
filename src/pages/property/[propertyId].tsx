import { APIError } from '@/api/errors'
import { getProperty } from '@/api/properties'
import Nav from '@/components/Nav'
import PropertyDetails from '@/components/PropertyDetails'
import Spinner from '@/components/ui/Spinner'
import { Property } from '@/types/property'
import { GetStaticPropsContext } from 'next'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'

function PropertyDetailPage({ exists }) {
	const router = useRouter()
	const propertyId = router.query.propertyId as string

	if (router.isFallback || !propertyId) {
		return (
			<div>
				<Nav />
				<div className="container mx-auto flex items-center justify-center">
					<Spinner size={40} />
				</div>
			</div>
		)
	}

	if (!propertyId || !exists) {
		return <ErrorPage statusCode={404} />
	}

	return <PropertyDetails propertyId={propertyId} />
}

export async function getStaticProps(context: GetStaticPropsContext) {
	const propertyId = context.params.propertyId as string

	try {
		const queryClient = new QueryClient()
		await queryClient.fetchQuery<Property, APIError>(
			['property', propertyId],
			() => getProperty(propertyId)
		)

		return {
			props: {
				dehydratedState: dehydrate(queryClient),
				exists: true,
			},
			revalidate: 60,
		}
	} catch {
		return {
			props: {
				dehydratedState: null,
				exists: false,
			},
			revalidate: 60,
		}
	}
}

export function getStaticPaths() {
	return {
		paths: [],
		fallback: true,
	}
}

export default PropertyDetailPage
