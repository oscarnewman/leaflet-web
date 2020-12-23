import { getProperties, useProperties } from '@/api/properties'
import Nav from '@/components/Nav'
import PropertyCard from '@/components/properties/PropertyCard'
import { QueryCache } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import Spinner from '@/components/ui/Spinner'

function Home() {
	const { data: paginatedProperties, status } = useProperties()
	return (
		<div>
			<Nav />

			<main className="container mx-auto">
				<div className="prose mx-auto">
					<h1>Find or Lease your Place</h1>
					<p className="lead">
						Need a place for the summer for yourself? For your friends? Search
						and browse the list below to find available sublets near campus.
					</p>
				</div>
				{status === 'loading' && <Spinner />}
				{status === 'success' && (
					<div className="grid grid-cols-5 gap-4">
						{paginatedProperties.data.map(property => (
							<PropertyCard key={property.id} property={property} />
						))}
					</div>
				)}
			</main>
		</div>
	)
}

export async function getStaticProps() {
	const queryClient = new QueryCache()
	await queryClient.prefetchQuery(['properties', {}], getProperties)

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
		revalidate: 60,
	}
}

export default Home
