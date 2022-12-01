// React
import React from 'react';
// Componenets
import { Button } from '../Button/Button';
// Types
import { SlideProps } from './Slide.types';
// Styles
import styles from './Slide.module.scss';
// Images
import stethoscopeIcon from '../../assets/images/icons/svg/stethoscope.svg';
import scissorsIcon from '../../assets/images/icons/svg/scissors.svg';
import shirtIcon from '../../assets/images/icons/svg/shirt.svg';
import stethoscopeYellowCircle from '../../assets/images/svg/stethoscope-yellow-circle.svg';

export const Slide: React.FC<SlideProps> = props => (
	<article
		className={`${styles.slide} ${props.active ? styles.slideActive : ''}`}
	>
		<figure
			className={`${styles.iconContainer} ${
				!props.active && styles.iconContainerInverse
			}`}
		>
			<img
				src={
					props.iconName === 'stethoscope'
						? stethoscopeIcon
						: props.iconName === 'scissors'
						? scissorsIcon
						: props.iconName === 'shirt'
						? shirtIcon
						: ''
				}
				alt={props.iconName}
			/>
			{props.iconName === 'stethoscope' && (
				<img
					className={styles.yellowCircle}
					src={stethoscopeYellowCircle}
					alt=""
				/>
			)}
		</figure>
		<h3 className={styles.stideTitle}>{props.title}</h3>
		<p className={styles.slideText}>{props.text}</p>
		<Button
			variant={props.active ? 'secondary' : 'secondary-inverse'}
			content="Explore"
		/>
	</article>
);
