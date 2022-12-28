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
export default function SearchLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const searchParams = useSearchParams();
	const pathname = usePathname() as string;

	const searchTerm = searchParams.get('q') as string;
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
								to: '/search',
								query: searchTerm,
								icon: SearchIcon,
								currentPath: pathname,
							},
							{
								label: 'Images',
								to: '/search/images',
								query: searchTerm,
								icon: ImageIcon,
								currentPath: pathname,
							},
							{
								label: 'News',
								to: '/search/news',
								query: searchTerm,
								icon: NewsIcon,
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
