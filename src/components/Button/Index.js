import React, { forwardRef } from "react";

const InfoBtn = forwardRef(({ label, id, onClick, ...other }, ref) => {
	return (
		<div className="form-group">
			<button
				className="btn btn-info"
				id={id}
				onClick={onClick}
				style={{ fontSize: ".8rem" }}
			>
				{label}
			</button>
		</div>
	);
});

InfoBtn.defaultProps = {
	onClick: () => {},
	id: "",
	label: "InfoBtn"
};

export default InfoBtn;
