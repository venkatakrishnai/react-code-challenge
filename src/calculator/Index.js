import React, { useEffect } from "react";
import * as calculator from "../redux/insuranceCalculator";
import { connect } from "react-redux";
import Input from "../components/Input/Index";

function Index(props) {
	useEffect(() => {
		props.setFileds({ aaa: "qqq" });
	}, []);
	return (
		<div>
			<Input />
		</div>
	);
}

export default connect(null, calculator.actions)(Index);
