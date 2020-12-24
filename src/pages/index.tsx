import { APIError } from '@/api/errors'
import { getProperties } from '@/api/properties'
import TextInput from '@/components/form/TextInput'
import Nav from '@/components/Nav'
import PropertyCard from '@/components/properties/PropertyCard'
import Pagination from '@/components/ui/Pagination'
import Spinner from '@/components/ui/Spinner'
import Stack from '@/components/ui/Stack'
import { PaginatedResponse } from '@/types/api'
import { Property } from '@/types/property'
import { cx } from '@/utilities/classes'
import { useState } from 'react'
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'

function Home() {
	const [query, setQuery] = useState({
		page: 1,
		bedrooms: null,
		rentMin: null,
		rentMax: null,
		startDate: null,
		endDate: null,
	})

	const { data: paginatedProperties, status } = useQuery<
		PaginatedResponse<Property>,
		APIError
	>(['properties', query], () => getProperties(query), {
		keepPreviousData: true,
	})

	return (
		<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			<Stack space={12} className="pb-16">
				<Nav />
				<Stack space={24}>
					<div className="relative group">
						<div className="bg-white dark:bg-gray-800 shadow-xl p-8 rounded-lg w-full relative z-30">
							<div className="prose dark:prose-dark">
								<h1>Find Your Perfect Place</h1>
								<p className="lead">
									Forget scrolling through Facebook groups. Filter for your
									needs and price range and see everything at once.
								</p>
							</div>
						</div>
						<div
							className={cx(
								'absolute w-full h-full scale-105 top-0 left-0',
								'bg-gradient-to-br from-orange-500 to-red-500',
								'transform rotate-1 rounded-2xl shdaow-xl z-20',
								' group-hover:scale-105 transition-transform pointer-events-none'
							)}
						/>
						<div
							className={cx(
								'absolute w-full h-full scale-110 top-0 left-0',
								'bg-gradient-to-br from-orange-200 to-red-200',
								'dark:from-orange-700 dark:to-red-700',
								'transform -rotate-1 rounded-2xl shdaow-xl z-10',
								'group-hover:rotate-1 group-hover:scale-105 transition-transform pointer-events-none'
							)}
						/>
						<div
							className={cx(
								'absolute w-full h-full scale-125 top-0 left-0',
								'bg-gradient-to-br from-orange-100 to-red-100',
								'dark:from-orange-900 dark:to-red-900',
								'transform rotate-3 rounded-2xl shdaow-xl z-0',
								'group-hover:rotate-1 group-hover:scale-105 transition-transform pointer-events-none'
							)}
						/>
					</div>
					{status === 'loading' && <Spinner />}

					<Stack>
						<div>
							<div className="grid grid-cols-4 gap-8 pb-4">
								<div>
									<label
										htmlFor="bedrooms"
										className="block text-xs uppercase tracking-wide text-gray-700 font-medium mb-1"
									>
										Rooms
									</label>
									<input
										type="number"
										max="10"
										className="form-input"
										value={query.bedrooms}
										onChange={e =>
											setQuery({ ...query, bedrooms: e.target.value || null })
										}
										placeholder="Any"
									/>
								</div>
								<div>
									<label
										htmlFor="dates"
										className="block text-xs uppercase tracking-wide text-gray-700 font-medium mb-1"
									>
										Available
									</label>
									<select name="" id="dates" className="form-input">
										<option value="1">Whenever</option>
										<option value="1">1</option>
									</select>
								</div>
								<div>
									<label
										htmlFor="people"
										className="block text-xs uppercase tracking-wide text-gray-700 font-medium mb-1"
									>
										From
									</label>
									<input
										type="number"
										value={query.rentMin}
										onChange={e =>
											setQuery({ ...query, rentMin: e.target.value || null })
										}
										className="form-input"
										placeholder="$0 /month"
									/>
								</div>
								<div>
									<label
										htmlFor="people"
										className="block text-xs uppercase tracking-wide text-gray-700 font-medium mb-1"
									>
										To
									</label>
									<input
										type="number"
										value={query.rentMax}
										onChange={e =>
											setQuery({ ...query, rentMax: e.target.value || null })
										}
										className="form-input"
										placeholder="$0 /month"
									/>
								</div>
							</div>
							{paginatedProperties && (
								<Pagination
									data={paginatedProperties}
									onChangePage={page => setQuery({ ...query, page })}
								/>
							)}
						</div>
						<div className="grid">
							{status === 'success' && (
								<div className="grid grid-cols-3 gap-8">
									{paginatedProperties.data.map(property => (
										<PropertyCard key={property.id} property={property} />
									))}
								</div>
							)}
						</div>
					</Stack>
				</Stack>
			</Stack>
		</div>
	)
}

export async function getStaticProps() {
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery(['properties', {}], () => getProperties())

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
		revalidate: 60,
	}
}

export default Home
