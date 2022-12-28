/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import './styles.scss';

type NewCardProps = {
	title: string;
	link: string;
	source: string;
	sourceIcon: string;
	image: string;
};

export default function NewCard({ item }: { item: NewCardProps }) {
	return (
		<Link
			href={item.link}
			target="_blank"
		>
			<div className="new_card">
				<div className="new_card__content">
					<div className="new_card__content source">
						<div className="new_card__content source__favicon">
							<img
								src={item.sourceIcon}
								alt=""
							/>
						</div>
						<div className="new_card__content source__url">{item.source}</div>
					</div>
					<div className="new_card__content title">
						<h3>{item.title}</h3>
					</div>
				</div>
				<div className="new_card__image">
					<img
						src={item.image}
						alt=""
					/>
				</div>
			</div>
		</Link>
	);
}
