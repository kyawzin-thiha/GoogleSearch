import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SearchIcon from 'assets/search.svg';
import DeleteIcon from 'assets/delete.svg';
import './styles.scss';



export default function SearchBar({term} : {term?: string}) {
    const router = useRouter();
	const [search, setSearch] = useState<string>(term || '');

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

    const deleteSearch = () => {
        setSearch('');
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLImageElement>) => {
        e.preventDefault();
        console.log(search);
        router.replace(`/search?term=${search}`);
    }

	return (
        <div className="search_bar">
            <form onSubmit={handleSubmit} id="search_form"></form>
			<div className="search_bar__icon">
				<Image
					src={SearchIcon}
					alt="search_icon"
					fill
                    priority
                    onClick={handleSubmit}
				/>
			</div>
			<div className="search_bar__input">
				<input
					type="text"
                    name="search"
                    value={search}
					onChange={handleSearch}
                    form="search_form"
				/>
			</div>
			<div className="search_bar__icon">
				{search && (
					<Image
						src={DeleteIcon}
						alt="delete_image"
						fill
                        priority
                        onClick={deleteSearch}
					/>
				)}
			</div>
		</div>
	);
}
