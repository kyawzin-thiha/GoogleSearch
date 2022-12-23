'use client';

import Image from 'next/image';
import { useSearchParams, usePathname } from 'next/navigation';
import LogoIcon from 'assets/logo.svg';
import SearchBar from 'components/SearchBar';
import NavBar from 'components/NavBar';
import SearchIcon from 'assets/search-1.svg';
import ImageIcon from 'assets/images.svg';
import NewsIcon from 'assets/news.svg';

import './styles.scss';
import { textSpanIntersectsWith } from 'typescript';
export default function SearchLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const searchParams = useSearchParams();
	const pathname = usePathname() as string;

	const searchTerm = searchParams.get('term') as string;
	return (
		<section className="search_layout">
			<div className="search_layout__logo">
				<div className="search_layout__logo logo_container">
					<Image
						src={LogoIcon}
						alt="logo"
						fill
						priority
					/>
				</div>
			</div>
			<div className="search_layout__content">
				<div className="search_layout__content search_bar_container">
					<SearchBar term={searchTerm} />
				</div>
				<div className="search_layout_content nav_bar_container">
					<NavBar
						items={[
							{
								label: 'All',
								to: '/',
								term: searchTerm,
								icon: SearchIcon,
								currentPath: pathname,
							},
							{
								label: 'Images',
								to: '/search',
								term: searchTerm,
								icon: ImageIcon,
								currentPath: pathname,
							},
						]}
					/>
				</div>
				<div className="search_layout__content data_container">{children}</div>
			</div>
		</section>
	);
}
