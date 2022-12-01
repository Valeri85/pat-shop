// react
import React from 'react';
// Components
import { HeroContent } from '../HeroContent/HeroContent';
import { HeroDog } from '../HeroDog/HeroDog';
// Styles
import styles from './Hero.module.scss';

export const Hero: React.FC = () => (
	<section className={styles.hero}>
		<HeroContent />
		<HeroDog />
	</section>
);
