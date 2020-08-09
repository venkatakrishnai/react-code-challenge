import React from "react";

function Header(props) {
	return (
		<>
			<div className="d-flex justify-content-center pb-sm-2 pb-md-3 text-center">
				<h1 className="d-none d-md-block">
					Critical Illness Insurance Calculator
				</h1>
				<h4 className="d-block d-md-none">
					Critical Illness Insurance Calculator
				</h4>
			</div>
			<div className="d-flex justify-content-center text-center">
				<p> Adjust the siders to estimate the coverage amount you may need.</p>
			</div>
		</>
	);
}

export default Header;
