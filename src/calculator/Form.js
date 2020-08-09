import React, { useEffect, useState } from "react";
import Input from "../components/Input/Index";
import { shallowEqual, useSelector } from "react-redux";

function Form({ setFileds }) {
	useEffect(() => {}, []);
	const { fileds } = useSelector(
		({ insuranceCalculator }) => ({
			fileds: insuranceCalculator.fileds
		}),
		shallowEqual
	);

	const [replacementAmount, setReplacementAmount] = useState();
	const [healthcareExpenses, setHealthcareExpenses] = useState();
	const [modificationExpenses, setModificationExpenses] = useState();
	const [homecareExpenses, setHomecareExpenses] = useState();
	const [otherExpenses, setOtherExpenses] = useState();

	const loadDataFromRedux = () => {
		if (fileds) {
			if (fileds.replacement_amount) {
				setReplacementAmount(fileds.replacement_amount);
			} else {
				setReplacementAmount();
			}
			if (fileds.healthcare_expenses) {
				setHealthcareExpenses(fileds.healthcare_expenses);
			} else {
				setHealthcareExpenses();
			}
			if (fileds.modification_expenses) {
				setModificationExpenses(fileds.modification_expenses);
			} else {
				setModificationExpenses();
			}
			if (fileds.homecare_expenses) {
				setHomecareExpenses(fileds.homecare_expenses);
			} else {
				setHomecareExpenses();
			}
			if (fileds.other_expenses) {
				setOtherExpenses(fileds.other_expenses);
			} else {
				setOtherExpenses();
			}
		} else {
			setReplacementAmount();
			setHealthcareExpenses();
			setModificationExpenses();
			setHomecareExpenses();
			setOtherExpenses();
		}
	};

	useEffect(() => {
		loadDataFromRedux();
	}, [fileds]);

	return (
		<div className="col-md-10 col-sm-12">
			<div className="pb-3">
				<Input
					id="replacement_income"
					type="number"
					labelText="Desired replacement income (after-tax)"
					placeholder=""
					onChange={val => {
						let replacement_amount = +val;
						setFileds({ ...fileds, replacement_amount });
					}}
					value={replacementAmount}
					postfix="/month"
				/>
			</div>

			<div className="pb-3">
				<Input
					id="healthcare_expenses"
					type="number"
					labelText="Out-of-pocket healthcare expenses"
					placeholder=""
					onChange={val => {
						let healthcare_expenses = +val;
						setFileds({ ...fileds, healthcare_expenses });
					}}
					value={healthcareExpenses}
				/>
			</div>

			<div className="pb-3">
				<Input
					id="modification_expenses"
					type="number"
					labelText="Home modification expenses"
					placeholder=""
					onChange={val => {
						let modification_expenses = +val;
						setFileds({ ...fileds, modification_expenses });
					}}
					value={modificationExpenses}
				/>
			</div>

			<div className="pb-3">
				<Input
					id="homecare_expenses"
					type="number"
					labelText="Medical homecare expenses"
					placeholder=""
					onChange={val => {
						let homecare_expenses = +val;
						setFileds({ ...fileds, homecare_expenses });
					}}
					value={homecareExpenses}
					postfix="/month"
				/>
			</div>

			<div className="pb-3">
				<Input
					id="other_expenses"
					type="number"
					labelText="Other expenses(transport,childcare,etc)"
					placeholder=""
					onChange={val => {
						let other_expenses = +val;
						setFileds({ ...fileds, other_expenses });
					}}
					value={otherExpenses}
					postfix="/month"
				/>
			</div>
		</div>
	);
}

export default Form;
