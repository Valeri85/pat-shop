import { ReactNode } from 'react';

export interface ButtonProps {
	variant:
		| 'primary'
		| 'primary-transparent'
		| 'secondary'
		| 'secondary-inverse'
		| 'fancy'
		| 'dot';
	content: string;
}
