// React
import React from 'react';
import { Button } from '../Button/Button';
// Components
import { Slide } from '../Slide/Slide';
// Styles
import styles from './Slider.module.scss';

export const Slider: React.FC = () => (
	<div className={styles.slider}>
		<Slide
			iconName="stethoscope"
			active
			title="Pharmacy"
			text="Apoquel is an oral tablet that works differently than other allergy medications. It goes straight to the source to help relieve itch and inflammation at its core—addressing the underlying cause of irritation"
		/>
		<Slide
			iconName="scissors"
			title="Breed-specific Haircuts"
			text="Regular grooming is essential to your pet's health as it helps prevent skin issues such as matting."
		/>
		<Slide
			iconName="shirt"
			title="Cloths"
			text="Is your dog at the top of his/her fashion game? Don't forget a dog bikini or swim trunks for your pet's next vacation! Whether poolside, at the beach, or on the yacht, your pooch will look summer-ready"
		/>
		<div className={styles.sliderControls}>
			<Button variant="fancy" content="arrow" />
			<Button variant="fancy" content="arrow" />
		</div>
	</div>
);
