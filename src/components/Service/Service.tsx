// React
import React from 'react';
// Components
import { Slider } from '../Slider/Slider';
// Styles
import styles from './Service.module.scss';

export const Service: React.FC = () => (
	<section className={`section ${styles.serviceSection}`}>
		<div className="container">
			<h2 className="sectionTitle">Our Service</h2>
			<Slider />
		</div>
	</section>
);
