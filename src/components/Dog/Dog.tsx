// React
import React from 'react';
// Styles
import styles from './Dog.module.scss';
// Images
import dog from '../../assets/images/dog.png';

export const Dog: React.FC = () => (
	<section>
		<div className={styles.flexContainer}>
			<div className={styles.dogHalf}>
				<img src={dog} alt="" />
			</div>
			<div className={styles.subscribeHalf}>
				<h2 className="sectionTitle">Subscribe & Get Pet Updatenews</h2>
				<form>
					<label htmlFor="mail">Mail</label>
					<input id="mail" type="text" />
				</form>
			</div>
		</div>
	</section>
);
