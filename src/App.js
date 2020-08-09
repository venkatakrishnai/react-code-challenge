import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Calculator from "./calculator/Index";

function App() {
	return (
		<div className="App">
			<Calculator />
		</div>
	);
}

export default App;
