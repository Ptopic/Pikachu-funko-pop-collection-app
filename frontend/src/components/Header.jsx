import React from 'react';
import pokeball from '../assets/images/pokeball1.png';
import pikachu from '../assets/images/pikachu.png';

function Header() {
	return (
		<div className="header">
			<div className="header-top">
				<img src={pokeball} alt="" />
				<p>Pokemon</p>
			</div>

			<div className="header-main">
				<h1 className="header-title">Pikac</h1>
				<img src={pikachu} alt="" />
				<h1 className="header-title-top">hu</h1>
			</div>
		</div>
	);
}

export default Header;
