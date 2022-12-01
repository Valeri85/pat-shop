// React
import React from 'react';
// Styles
import styles from './Footer.module.scss';

export const Footer: React.FC = () => (
	<footer>
		<div className={`container ${styles.flex}`}>
			<a className={styles.logo}>Pet-First</a>
			<nav className={styles.footerNav}>
				<ul>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Project</a>
					</li>
					<li>
						<a href="#">Service</a>
					</li>
					<li>
						<a href="#">Client</a>
					</li>
					<li>
						<a href="#">Team</a>
					</li>
					<li>
						<a href="#">Blog</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
				<ul>
					<li>
						<a href="#">Flow</a>
					</li>
					<li>
						<a href="#">F</a>
					</li>
					<li>
						<a href="#">I</a>
					</li>
					<li>
						<a href="#">T</a>
					</li>
				</ul>
			</nav>
		</div>
	</footer>
);
