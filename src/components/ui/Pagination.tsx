import { PaginatedResponse } from '@/types/api'
import Spinner from './Spinner'

type Props = {
	data: PaginatedResponse<any>
	onChangePage: (page: number) => void
	loading?: boolean
}

function Pagination({ data, onChangePage, loading = false }: Props) {
	return (
		<div className="py-3 flex items-center justify-between border-t border-gray-200 dark:border-gray-800">
			<div className="flex-1 flex justify-between sm:hidden">
				<button
					onClick={() => onChangePage(data.currentPage - 1)}
					disabled={data.currentPage <= 1}
					className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
				>
					Previous
				</button>
				<button
					onClick={() => onChangePage(data.currentPage + 1)}
					disabled={data.currentPage >= data.lastPage}
					className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
				>
					Next
				</button>
			</div>
			<div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
				<div>
					<p className="text-sm text-gray-700 dark:text-gray-300">
						Showing{' '}
						{data.total !== 0 && (
							<>
								<span className="font-medium">{data.from}</span> to{' '}
								<span className="font-medium">{data.to}</span> of{' '}
							</>
						)}
						<span className="font-medium">{data.total}</span> results
					</p>
				</div>
				<div className="flex items-center">
					<div className="mr-4">{loading && <Spinner />}</div>
					<nav
						className="relative z-0 inline-flex shadow-sm -space-x-px"
						aria-label="Pagination"
					>
						<button
							onClick={() => onChangePage(data.currentPage - 1)}
							disabled={data.currentPage <= 1}
							className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
						>
							<span className="sr-only">Previous</span>
							{/* Heroicon name: chevron-left */}
							<svg
								className="h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
						<button
							onClick={() => onChangePage(data.currentPage + 1)}
							disabled={data.currentPage >= data.lastPage}
							className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
						>
							<span className="sr-only">Next</span>
							{/* Heroicon name: chevron-right */}
							<svg
								className="h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default Pagination
