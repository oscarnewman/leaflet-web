import { client } from '@/api/client'
import { ClientError } from '@/api/errors'
import { useRouteProgressBar } from '@/hooks/useRouteProgressBar'
import '@/styles/nprogress.css'
import '@/styles/tailwind.css'
import { useEffect } from 'react'
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Hydrate } from 'react-query/hydration'

const queryCache = new QueryCache()

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: (failureCount, error: any) => {
				if (error instanceof ClientError) return false
				else if (failureCount < 3) return true
			},
		},
	},
	queryCache,
})

function MyApp({ Component, pageProps }) {
	useRouteProgressBar()

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<Component {...pageProps} />
			</Hydrate>
			<ReactQueryDevtools initialIsOpen />
		</QueryClientProvider>
	)
}

export default MyApp
