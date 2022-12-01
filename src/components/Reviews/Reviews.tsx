// React
import React from 'react';
// Componenets
import { Button } from '../Button/Button';
// Styles
import styles from './Reviews.module.scss';
// Images
import boy from '../../assets/images/boy.png';
import boyControls from '../../assets/images/svg/boy-nav.svg';

export const Reviews: React.FC = () => (
	<section className="section">
		<div className="container">
			<div className={styles.flexContainer}>
				<figure>
					<img src={boy} alt="Boy" />
					<img className={styles.controls} src={boyControls} alt="" />
				</figure>
				<div className={styles.boySectionContent}>
					<h2 className="sectionTitle">Customer Reviews</h2>
					<p className={styles.sectionText}>
						As we continue to push for better regulation in the
						Australian pet food industry it can be hard to trust
						many pet food brands. Our 2021 Best Cat Food in
						Australia list will offer you a great starting point in
						deciding what to feed your cat.
					</p>
					<div className={styles.sliderControls}>
						<Button variant="fancy" content="arrow" />
						<Button variant="fancy" content="arrow" />
					</div>
				</div>
			</div>
		</div>
	</section>
);
