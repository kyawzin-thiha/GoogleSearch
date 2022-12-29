import Link from 'next/link';
import './styles.scss';

type LinkCardProps = {
	title: string;
	desc: string;
	source: string;
	url: string;
};

export default function LinkCard({
	item,
}: {
	item: LinkCardProps;
}) {
	
	return (
		<>
			<Link href={item.url}>
				<div className="link_card">
					<div className="link_card__title">
						<b>{item.title}</b>
					</div>
					<div className="link_card__desc">{item.desc}</div>
					<div className="link_card__source">
						<span>{item.source}</span>
					</div>
				</div>
			</Link>
		</>
	);
}
