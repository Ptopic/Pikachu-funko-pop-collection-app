import React from 'react';

function Card({ id, name, image, price, buyLink, isCollected, onClick }) {
	const code = name.split(' ')[0];
	const newName = name.replace(/[0-9]/g, '');

	return (
		<div className={isCollected ? 'card collected' : 'card'} onClick={onClick}>
			<img src={image} alt="" className={isCollected ? 'collected' : ''} />

			<h1>{code}</h1>
			<h2>{newName}</h2>

			<div className="card-info">
				<a href={buyLink} className={isCollected ? 'collected' : ''}>
					Buy
				</a>
				<p className={isCollected ? 'collected' : ''}>{price + '€'}</p>
			</div>
		</div>
	);
}

export default Card;
