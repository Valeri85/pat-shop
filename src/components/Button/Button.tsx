// React
import React from 'react';
// Types
import { ButtonProps } from './Button.types';
// Styles
import styles from './Button.module.scss';

export const Button: React.FC<ButtonProps> = ({ variant, content }) => (
	<a
		className={`${
			variant === 'primary'
				? styles.primary
				: variant === 'primary-transparent'
				? styles.primaryTransparent
				: variant === 'secondary'
				? styles.secondary
				: variant === 'secondary-inverse'
				? styles.secondaryInverse
				: variant === 'fancy'
				? styles.fancy
				: ''
		}`}
	>
		{content}
	</a>
);
