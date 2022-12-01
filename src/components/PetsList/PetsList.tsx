// React
import React from 'react';
// Components
import { PetsListItem } from '../PetsListItem/PetsListItem';
// Styles
import styles from './PetsList.module.scss';
// Images
import pet1 from '../../assets/images/pets/pet-1.png';
import pet2 from '../../assets/images/pets/pet-2.png';
import pet3 from '../../assets/images/pets/pet-3.png';
import pet4 from '../../assets/images/pets/pet-4.png';
import pet5 from '../../assets/images/pets/pet-5.png';
import pet6 from '../../assets/images/pets/pet-6.png';
import pet7 from '../../assets/images/pets/pet-7.png';
import pet8 from '../../assets/images/pets/pet-8.png';
import pet9 from '../../assets/images/pets/pet-9.png';
import pet10 from '../../assets/images/pets/pet-10.png';
import pet11 from '../../assets/images/pets/pet-11.png';
import pet12 from '../../assets/images/pets/pet-12.png';
import pet13 from '../../assets/images/pets/pet-13.png';

export const PetsList: React.FC = () => {
	const pets = [
		pet1,
		pet2,
		{ img: pet3, text: 'dog (jasper)' },
		pet4,
		pet5,
		pet6,
		pet7,
		pet8,
		pet9,
		pet10,
		pet11,
		pet12,
		pet13,
	];

	return (
		<ul className={styles.petsList}>
			{pets.map((pet, index) => (
				<PetsListItem src={pet} index={index} key={index} />
			))}
		</ul>
	);
};
