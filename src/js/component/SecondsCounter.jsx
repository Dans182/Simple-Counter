import React from "react";
import propTypes from "prop-types";

const SecondsCounter = (props) => {
	return (
		<div
			className="card text-white bg-dark m-1"
			style={{ maxWidth: "10rem" }}>
			<div className="card-body d-flex justify-content-center text-center">
				<h1 className="card-title">
					{props.reloj}
					{props.numero}
				</h1>
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	reloj: propTypes.string,
	numero: propTypes.string,
};

export default SecondsCounter;
