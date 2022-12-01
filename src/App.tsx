// React
import React from 'react';
// Components
import { Header } from './components/Header/Header';
import { Pets } from './components/Pets/Pets';
import { Service } from './components/Service/Service';
import { Everyone } from './components/Everyone/Everyone';
import { Reviews } from './components/Reviews/Reviews';
import { Dog } from './components/Dog/Dog';
import { Footer } from './components/Footer/Footer';

export const App: React.FC = () => (
	<>
		<Header />
		<main>
			<Pets />
			<Service />
			<Everyone />
			<Reviews />
			<Dog />
			<Footer />
		</main>
	</>
);
