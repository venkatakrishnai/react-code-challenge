import React, { useEffect, useState } from "react";
import Input from "../components/Input/Index";
import { shallowEqual, useSelector } from "react-redux";

function RecoveryPeriod({ setFileds }) {
	const { fileds } = useSelector(
		({ insuranceCalculator }) => ({
			fileds: insuranceCalculator.fileds
		}),
		shallowEqual
	);

	const [recoveryPeriod, setRecoveryPeriod] = useState();

	const loadDataFromRedux = () => {
		if (fileds) {
			if (fileds.recovery_period) {
				setRecoveryPeriod(fileds.recovery_period);
			} else {
				setRecoveryPeriod();
			}
		} else {
			setRecoveryPeriod();
		}
	};

	useEffect(() => {
		loadDataFromRedux();
	}, [fileds]);

	useEffect(() => {
		let recovery_period = 12;
		setFileds({ ...fileds, recovery_period });
	}, []);

	return (
		<div className="col-12">
			<div className="card shadow border-none" style={{ border: "none" }}>
				<div
					className="d-md-flex d-sm-block card-body"
					style={{ justifyContent: "space-evenly" }}
				>
					<div className="d-flex align-self-center">
						<label
							htmlFor="recovery_period"
							className="text-sm font-weight-bold m-0"
							style={{
								fontSize: "0.7rem",
								display: "contents",
								alignItems: "center"
							}}
						>
							Recovery period
						</label>
						<span
							className="pl-2"
							data-toggle="tooltip"
							data-placement="top"
							title="Recovery period"
							data-original-title="Recovery period"
						>
							<svg
								width="12"
								height="12"
								viewBox="0 0 16 16"
								className="bi bi-info-circle"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
								></path>
								<path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"></path>
								<circle cx="8" cy="4.5" r="1"></circle>
							</svg>
						</span>
					</div>

					<div className="d-flex align-self-center">
						<Input
							id="recovery_period"
							type="number"
							placeholder=""
							onChange={val => {
								let recovery_period = +val;
								setFileds({ ...fileds, recovery_period });
							}}
							value={recoveryPeriod}
							data-inputmask="'alias': 'numeric', 'groupSeparator': ',', 'autoGroup': true, 'digits': 2, 'digitsOptional': false, 'prefix': '€ ', 'placeholder': '0'"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RecoveryPeriod;
