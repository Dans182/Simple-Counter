import React, { useState, useEffect } from "react";
import SecondsCounter from "../component/SecondsCounter.jsx";

//create your first component
const Home = () => {
	let clock = <i class="fas fa-clock"></i>;

	const [number, setNumber] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setNumber(number + 1);
		}, 1000);
		return () => clearInterval(interval);
	});

	const [number2, setNumber2] = useState(number);

	useEffect(() => {
		const interval = setInterval(() => {
			setNumber2(number2 + 1);
		}, 10000);
		return () => clearInterval(interval);
	}, [number2]);

	return (
		<div className="container mt-2">
			<div className="row justify-content-center">
				<SecondsCounter icono={clock} />
				<SecondsCounter numero2={number2} />
				<SecondsCounter numero={number} />
				{/* <SecondsCounter numero={number} />
				<SecondsCounter numero={number} />
				<SecondsCounter numero={number} />
				<SecondsCounter numero={number} /> */}
			</div>
		</div>
	);
};

export default Home;
