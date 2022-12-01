// React
import React from 'react';
// Components
import { Button } from '../Button/Button';
// Styles
import styles from './HeroDog.module.scss';
// Images
import dogImg from '../../assets/images/hero-dog.webp';

export const HeroDog: React.FC = () => (
	<div className={styles.heroDog}>
		<img
			className={styles.dog}
			src={dogImg}
			width="496"
			height="701"
			alt="Dog"
		/>
		<ul className={styles.sliderControls}>
			<li className={styles.sliderControlItem}>
				<Button variant="fancy" content="arrow" />
			</li>
			<li className={styles.sliderControlItem}>
				<Button variant="dot" content="dot" />
			</li>
			<li className={styles.sliderControlItem}>
				<Button variant="dot" content="dot" />
			</li>
			<li className={styles.sliderControlItem}>
				<Button variant="dot" content="dot" />
			</li>
			<li className={styles.sliderControlItem}>
				<Button variant="dot" content="dot" />
			</li>
			<li className={styles.sliderControlItem}>
				<Button variant="dot" content="dot" />
			</li>
			<li className={styles.sliderControlItem}>
				<Button variant="fancy" content="arrow" />
			</li>
		</ul>
	</div>
);
