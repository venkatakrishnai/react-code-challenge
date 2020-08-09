import React, { useEffect, useState } from "react";
import InfoBtn from "../components/Button/Index";

function Footer({ clearFileds }) {
	useEffect(() => {}, []);

	return (
		<div className="col-12">
			<div className="text-center">
				<p className="text-info" style={{ fontSize: "small" }}>
					Assumptions
				</p>
				<div className="px-md-5 mx-md-5">
					A serious illness with recovery lasting{" "}
					<span className="text-info">12 months</span> could put your finances
					down by <span className="text-info">$359,000</span> today and by{" "}
					<span className="text-info">$467,000</span> in 10 years.
				</div>
				<div className="pt-5">
					<InfoBtn
						label="START COMPARING QUOTES"
						onClick={() => clearFileds()}
					/>
				</div>
			</div>
		</div>
	);
}

export default Footer;
