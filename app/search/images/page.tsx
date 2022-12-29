import ImageCard from 'components/ImageCard';
import MasonryContainer from 'components/Masonry';
import './styles.scss';
const searchItems = async (query: string) => {
	const res = await fetch(
		`${process.env.GOOGLE_SEARCH_API}` +
			new URLSearchParams({
				key: process.env.GOOGLE_SEARCH_ENGINE_SECRET as string,
				cx: process.env.GOOGLE_SEARCH_ENGINE_ID as string,
				q: query,
				searchType: 'image',
			}),
		{
			cache: 'force-cache',
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
	return (
		<div className="image_search">
			<MasonryContainer>
				{data?.map((item: any) => (
					<ImageCard
						key={item.link}
						item={item}
					/>
				))}
			</MasonryContainer>
		</div>
	);
}
