import Nav from '@/components/Nav'
import Stack from '@/components/ui/Stack'

function Home() {
	return (
		<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			<Stack space={12} className="pb-16">
				<Nav />
				<div className="prose lg:prose-xl">
					<h1>FInd your perfect place.</h1>
					<p className="lead">
						Browse sublets on Brown&apos;s campus or list yours to get it sublet
						ASAP!
					</p>
				</div>
				<iframe
					className="airtable-embed w-full"
					src="https://airtable.com/embed/shrZZSjbfaSOa7Tby?backgroundColor=red&viewControls=on"
					frameBorder={0}
					width="100%"
					height={1024}
					style={{ background: 'transparent', border: '1px solid #ccc' }}
				/>
			</Stack>
		</div>
	)
}

export default Home
