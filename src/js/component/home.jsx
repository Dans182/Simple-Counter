import React from "react";
import SecondsCounter from "../component/SecondsCounter.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container mt-2">
			<div className="row justify-content-center">
				<SecondsCounter />
				<SecondsCounter />
				<SecondsCounter />
				<SecondsCounter />
				<SecondsCounter />
				<SecondsCounter />
				<SecondsCounter />
			</div>
		</div>
	);
};

export default Home;
