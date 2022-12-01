// React
import React from 'react';
// Components
import { Button } from '../Button/Button';
// Styles
import styles from './HeroContent.module.scss';

export const HeroContent: React.FC = () => (
	<div className={styles.heroContent}>
		<h2 className={styles.subtitle}>Available in select states</h2>
		<h1 className={styles.mainTitle}>
			A pet-first <span>approach to</span> wellness
		</h1>
		<Button variant="primary" content="Learn More" />
	</div>
);
