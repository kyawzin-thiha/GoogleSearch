import NewCard from 'components/NewCard';
import './styles.scss';

const searchNews = async (q: string) => {
	const res = await fetch(
		`${process.env.NEWS_SEARCH_API}` +
			new URLSearchParams({
				query: q,
			}),

		{
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': process.env.RAPID_API_SECRET as string,
				'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com',
			},
			cache: 'no-store',
		},
	);
	const { data } = await res.json();

	return data;
};

export default async function Page({
	searchParams,
}: {
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	const data = await searchNews(searchParams?.q as string);

	return (
		<div className="news_search">
			{data?.map((item: any) => (
				<NewCard
					item={{
						title: item.title,
						link: item.link,
						source: item.source_url,
						sourceIcon: item.source_favicon_url,
						image: item.photo_url,
					}}
					key={item.link}
				/>
			))}
		</div>
	);
}
