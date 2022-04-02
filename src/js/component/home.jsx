import React, { useState, useEffect } from "react";
import SecondsCounter from "../component/SecondsCounter.jsx";

//create your first component
const Home = () => {
	let clock = <i className="fas fa-clock"></i>;
	const [number, setNumber] = useState(0);
	const [number2, setNumber2] = useState(0);
	const [number3, setNumber3] = useState(0);
	const [number4, setNumber4] = useState(0);
	const [number5, setNumber5] = useState(0);
	const [number6, setNumber6] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setNumber(number + 1);

			if (number == 9) {
				setNumber(0);
				setNumber2(number2 + 1);
			}
			if (number2 == 9) {
				setNumber2(0);
				setNumber3(number3 + 1);
			}
			if (number3 == 9) {
				setNumber3(0);
				setNumber4(number4 + 1);
			}
			if (number4 == 9) {
				setNumber4(0);
				setNumber5(number5 + 1);
			}
			if (number5 == 9) {
				setNumber5(0);
				setNumber6(number6 + 1);
			}
			if (number6 == 9) {
				setNumber6(0);
				setNumber(0);
			}
		}, 1000);
		return () => clearInterval(interval);
	});

	return (
		<div className="container mt-2">
			<div className="row justify-content-center">
				<SecondsCounter icono={clock} />
				<SecondsCounter numero={number6} />
				<SecondsCounter numero={number5} />
				<SecondsCounter numero={number4} />
				<SecondsCounter numero={number3} />
				<SecondsCounter numero={number2} />
				<SecondsCounter numero={number} />
			</div>
		</div>
	);
};

export default Home;
