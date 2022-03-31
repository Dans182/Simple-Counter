import React from "react";
import SecondsCounter from "../component/SecondsCounter.jsx";

//create your first component
const Home = () => {
	let number = 0;
	let clock = <i class="fas fa-clock"></i>;
	return (
		<div className="container mt-2">
			<div className="row justify-content-center">
				<SecondsCounter reloj={clock} />
				<SecondsCounter numero={number} />
				<SecondsCounter numero={number} />
				<SecondsCounter numero={number} />
				<SecondsCounter numero={number} />
				<SecondsCounter numero={number} />
				<SecondsCounter numero={number} />
			</div>
		</div>
	);
};

export default Home;
