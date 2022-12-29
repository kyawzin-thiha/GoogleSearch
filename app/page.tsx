'use client';
import Lottie from 'lottie-react';

import GoogleAnimation from 'assets/googleAnimation.json';
import SearchBar from 'components/SearchBar';

export default function Page() {
	return (
		<div className="landing_page">
			<div className="landing_page__logo">
				<Lottie
					animationData={GoogleAnimation}
					loop={true}
				/>
			</div>
			<div className="landing_page__search">
				<SearchBar />
			</div>
		</div>
	);
}
