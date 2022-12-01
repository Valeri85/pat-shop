// React
import React from 'react';
// Types
import { ListItemProps } from './NavItem.types';
// Styles
import styles from './NavItem.module.scss';

export const NavItem: React.FC<ListItemProps> = props => (
	<li className={styles.navItem}>
		<a className={styles.navLink} href="#">
			{props.item}
		</a>
	</li>
);
