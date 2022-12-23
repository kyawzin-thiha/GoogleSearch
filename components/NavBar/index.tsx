import Link from 'next/link';
import './styles.scss';
import Image from 'next/image';
type NavBarProps = {
	label: string;
	term: string;
	to: string;
	currentPath: string;
	icon: string;
};

export default function NavBar({ items }: { items: NavBarProps[] }) {
	return (
		<div className="nav_bar">
			{items.map((item, index) => (
				<div
					className="nav_bar__item"
					key={item.to}
				>
					<div className="nav_bar__item link">
						<div className="nav_bar__item link__icon">
							<Image
								src={item.icon}
								alt={item.label}
								fill
								priority
							/>
						</div>
						<div className="nav_bar__item link__label">
							<Link
								href={{
									pathname: item.to,
									query: { term: 'hello' },
								}}
							>
								{item.label}
							</Link>
						</div>
					</div>
					<div className="nav_bar__item--open">
						{item.to === item.currentPath && <hr />}
					</div>
				</div>
			))}
		</div>
	);
}
