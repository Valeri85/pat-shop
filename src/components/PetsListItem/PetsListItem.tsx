// React
import React from 'react';
// Types
import { PetsListItemProps } from './PetsListItem.types';
// Styles
import styles from './PetsListItem.module.scss';

export const PetsListItem: React.FC<PetsListItemProps> = ({ src, index }) => {
	let petName: string[] = [];
	if (typeof src == 'object') petName = src.text.split(' ');

	return (
		<li className={`${styles[`pet${index + 1}`]}`}>
			{typeof src == 'object' && (
				<p className={styles.petName}>
					<span className={styles.category}>{petName[0]}</span>
					<span className={styles.name}>{petName[1]}</span>
				</p>
			)}
			<img className={`${typeof src == 'object' && styles.outline}`} src={typeof src == 'object' ? src.img : src} alt="Pet" />
		</li>
	);
};
