// React
import React from 'react';
// Componenets
import { Button } from '../Button/Button';
// Styles
import styles from './Everyone.module.scss';
// Images
import girlWithDog from '../../assets/images/girl.png';

export const Everyone: React.FC = () => (
	<section className={`section ${styles.sectionEveryone}`}>
		<div className="container">
			<div className={styles.flexContainer}>
				<figure>
					<img src={girlWithDog} alt="Girl with dog" />
				</figure>
				<div className={styles.everyoneSectionContent}>
					<h2 className="sectionTitle">
						Making pet parenting easy for everyone
					</h2>
					<p>
						Could this be the dog with the longest tail? The Rampur
						Greyhound - shy, sensitive, alert, and faithful. This is
						a breed that has climbed its way to being top dog
						because of its intelligence
					</p>
					<ul>
						<li>Adoption</li>
						<li>Frozen Raw</li>
						<li>Next Day Delivery</li>
					</ul>
					<Button variant="secondary" content="Explore" />
				</div>
			</div>
		</div>
	</section>
);
