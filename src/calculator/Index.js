import React, { useEffect, useState } from "react";
import * as calculator from "../redux/insuranceCalculator";
import { connect } from "react-redux";
import Input from "../components/Input/Index";
import Header from "./Header";
import Form from "./Form";
import RecoveryPeriod from "./RecoveryPeriod";
import Graph from "./Graph";
import Footer from "./Footer";

function Index({ setFileds, clearFileds }) {
	useEffect(() => {}, []);
	return (
		<div className="container pt-5">
			<Header />
			<div className="pt-5 d-md-flex d-sm-inline-flex">
				<div className="col-md-4 col-sm-12">
					<Form setFileds={setFileds} />
				</div>

				<div className="col-md-8 col-sm-12">
					<RecoveryPeriod setFileds={setFileds} />
					<div className="pt-5">
						<Graph />
					</div>
					<div className="pt-md-3 pt-sm-4">
						<Footer clearFileds={clearFileds} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default connect(null, calculator.actions)(Index);
