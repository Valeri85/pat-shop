// React
import React from 'react';

export const Navigation: React.FC = () => {
	return (
		<nav className="header__nav">
			<a className="header__logo" href="#">
				Pet-First
			</a>
			<ul className="nav__list">
				<li className="nav__item">
					<a className="nav__link" href="#">
						About
					</a>
				</li>
				<li className="nav__item">
					<a className="nav__link" href="#">
						Service
					</a>
				</li>
				<li className="nav__item">
					<a className="nav__link" href="#">
						Madi-Care
					</a>
				</li>
				<li className="nav__item">
					<a className="nav__link" href="#">
						Blog
					</a>
				</li>
				<li className="nav__item">
					<a className="nav__link" href="#">
						Sign up
					</a>
				</li>
			</ul>
		</nav>
	);
};
