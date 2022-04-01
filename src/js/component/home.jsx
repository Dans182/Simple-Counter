import React, { useState, useEffect } from "react";
import SecondsCounter from "../component/SecondsCounter.jsx";

//create your first component
const Home = () => {
	let clock = <i className="fas fa-clock"></i>;

	const [number, setNumber] = useState(0);
	useEffect(() => {
		let prueba = number;
		const interval = setInterval(() => {
			setNumber(number + 1);
			if (number == 9) {
				setNumber((prueba = 0));
			}
		}, 1000);
		return () => clearInterval(interval);
	});

	const [number2, setNumber2] = useState(0);
	useEffect(() => {
		let prueba2 = number2;
		const interval2 = setInterval(() => {
			setNumber2(number2 + 1);
			if (number2 == 9) {
				setNumber((prueba2 = 0));
			}
		}, 1000);
		return () => clearInterval(interval2);
	});

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
