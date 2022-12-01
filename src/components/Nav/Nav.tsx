// React
import React from 'react';
// Components
import { NavList } from '../NavList/NavList';
import { Button } from '../Button/Button';
// Styles
import styles from './Nav.module.scss';

export const Nav: React.FC = () => (
	<nav className={styles.nav}>
		<a className={styles.logo} href="#">
			Pet-First
		</a>
		<NavList />
		<Button variant="primary-transparent" content="Sign up" />
	</nav>
);
