// React
import React from 'react';
import ReactDOM from 'react-dom/client';
// Components
import { App } from './App';
// Styles
import './assets/styles/global.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
