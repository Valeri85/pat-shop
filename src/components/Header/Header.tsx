// React
import React from 'react';
// Components
import { Nav } from '../Nav/Nav';
import { Hero } from '../Hero/Hero';
// Styles
import styles from './Header.module.scss';

export const Header: React.FC = () => (
	<header className={styles.header}>
		<div className="container">
			<Nav />
			<Hero />
		</div>
	</header>
);
