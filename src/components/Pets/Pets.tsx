// React
import React from 'react';
// Components
import { PetsList } from '../PetsList/PetsList';
// Styles
import styles from './Pets.module.scss';
// Images
import badge from '../../assets/images/badge.png';

export const Pets: React.FC = () => (
	<section className={styles.petsSection}>
		<div
			className="container"
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			<img
				className={styles.badge}
				src={badge}
				alt="45 different categories"
			/>
			<PetsList />
		</div>
	</section>
);
