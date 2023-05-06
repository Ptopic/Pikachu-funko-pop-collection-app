import React, { useState, useEffect } from 'react';
import FiguresList from './components/FiguresList';
import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';
function App() {
	return (
		<div>
			{/* Header */}
			<Header />

			{/* Figures carousel - image slider
			<Slider /> */}

			{/* Figures list */}
			<FiguresList />

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default App;
