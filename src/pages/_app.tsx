import { useRouteProgressBar } from '@/hooks/useRouteProgressBar'
import '@/styles/nprogress.css'
import '@/styles/tailwind.css'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { ReactQueryDevtools } from 'react-query-devtools'

const queryCache = new QueryCache()

function MyApp({ Component, pageProps }) {
	useRouteProgressBar()

	return (
		<ReactQueryCacheProvider queryCache={queryCache}>
			<Hydrate state={pageProps.dehydratedState}>
				<Component {...pageProps} />
			</Hydrate>
			<ReactQueryDevtools initialIsOpen />
		</ReactQueryCacheProvider>
	)
}

export default MyApp
