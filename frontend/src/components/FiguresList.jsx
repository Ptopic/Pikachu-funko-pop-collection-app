import React, { useState, useEffect } from 'react';
import { getFigures, updateFigure } from '../utils/figures';

// Components
import Card from './Card';

function FiguresList() {
	const [data, setData] = useState([]);
	useEffect(() => {
		const getData = async () => {
			const res = await getFigures();
			const data = res.data;
			setData(data);
			console.log(data);
		};
		getData();
	}, []);
	return (
		<div className="figures-list-container">
			<div className="figures-list">
				<h1>Collection:</h1>
				<div className="collected-list">
					{data.map((figure, index) => {
						const press = async () => {
							const curIndex = (index += 1);
							// Update state isCollected

							const newData = data.map((item) => {
								if (item.id == curIndex) {
									return { ...item, isCollected: !item.isCollected };
								} else {
									return item;
								}
							});

							setData(newData);

							// Update item in db

							const res = await updateFigure(curIndex);
							console.log(res);
						};

						if (figure.isCollected == 1) {
							return (
								<Card
									key={index}
									onClick={press}
									name={figure.name}
									image={figure.image}
									price={figure.price}
									buyLink={figure.ebayLink}
									isCollected={figure.isCollected}
								/>
							);
						}
					})}
				</div>

				<h1>To collect:</h1>

				<div className="to-collect-list">
					{data.map((figure, index) => {
						const press = async () => {
							const curIndex = (index += 1);
							// Update state isCollected

							const newData = data.map((item) => {
								if (item.id == curIndex) {
									return { ...item, isCollected: !item.isCollected };
								} else {
									return item;
								}
							});

							setData(newData);

							// Update item in db

							const res = await updateFigure(curIndex);
							console.log(res);
						};

						if (figure.isCollected == 0) {
							return (
								<Card
									key={index}
									onClick={press}
									name={figure.name}
									image={figure.image}
									price={figure.price}
									buyLink={figure.ebayLink}
									isCollected={figure.isCollected}
								/>
							);
						}
					})}
				</div>
			</div>
		</div>
	);
}

export default FiguresList;
