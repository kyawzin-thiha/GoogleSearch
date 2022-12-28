/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import './styles.scss';
type ImageCardProps = {
    link: string;
    title: string;
	displayLink: string;
    image: {
        contextLink: string;
    }
};

export default function ImageCard({ item }: { item: ImageCardProps }) {
	return (
		<Link
			href={item.image.contextLink}
			target="_blank"
		>
			<div className="image_card">
                <div className="image_card__image">
                    				<img
					src={item.link}
					alt=""
				/>
            </div>
                <div className="image_card__source">
                    {
                        item.displayLink
                    }
            </div>
                <div className="image_card__title">
                    {
                        item.title
                    }
            </div>
			</div>
		</Link>
	);
}
