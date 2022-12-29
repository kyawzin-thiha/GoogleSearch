import LinkCard from 'components/LinkCard';

const searchItems = async (query: string) => {
	console.log(process.env.GOOGLE_SEARCH_ENGINE_SECRET, query)
	const res = await fetch(
		`${process.env.GOOGLE_SEARCH_API}` +
			new URLSearchParams({
				key: process.env.GOOGLE_SEARCH_ENGINE_SECRET as string,
				cx: process.env.GOOGLE_SEARCH_ENGINE_ID as string,
				q: query,
			}),
		{
			cache: "no-store"
		},
	);
	const { items } = await res.json();
	return items;
};

export default async function Page({
	searchParams,
}: {
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	const data = await searchItems(searchParams?.q as string);
	console.log("hello")
	return (
		<div className="search_page">
			{data?.map((item: any) => (
				<LinkCard
					item={{
						title: item.title,
						desc: item.snippet,
						source: item.displayLink,
						url: item.link,
					}}
					key={item.link}
				/>
			))}
		</div>
	);
}
