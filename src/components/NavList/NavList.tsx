// React
import React from 'react';
// Components
import { NavItem } from '../NavItem/NavItem';
// Styles
import styles from './NavList.module.scss';

export const NavList: React.FC = () => (
	<ul className={styles.navList}>
		{['About', 'Service', 'Madi-Care', 'Blog'].map((navListItem, index) => (
			<NavItem item={navListItem} key={index} />
		))}
	</ul>
);
