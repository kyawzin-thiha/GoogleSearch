'use client';

import Masonry from 'react-masonry-css';
import "./styles.scss";

export default function MasonryContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	const breakpointColumnsObj = {
		default: 4,
        1100: 3,
        700: 4,
        500: 2,
	};

	return (
		<Masonry
			breakpointCols={breakpointColumnsObj}
			className="my-masonry-grid"
			columnClassName="my-masonry-grid_column"
		>
			{children}
		</Masonry>
	);
}
