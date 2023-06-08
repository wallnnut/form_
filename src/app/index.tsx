import React from "react";
import "./styles/index.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router";

function App() {
	return (
		<div className="app">
			<RouterProvider router={router} />;
		</div>
	);
}

export default App;
