import React from "react";
import propTypes from "prop-types";

const SecondsCounter = (props) => {
	return (
		<div
			className="card text-white bg-dark m-1"
			style={{ maxWidth: "10rem" }}>
			<div className="card-body d-flex justify-content-center text-center">
				<h1 className="card-title">
					{props.icono}
					{props.numero}
					{props.numero2}
				</h1>
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	icono: propTypes.string,
	numero: propTypes.string,
	numero2: propTypes.string,
};

export default SecondsCounter;
