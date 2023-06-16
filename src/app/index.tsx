import React from "react";
import "./styles/index.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router";
import { StoreProvider } from "./providers/storeProvider";

function App() {
	return (
		<div className="app">
			<StoreProvider initialState={{}}>
				<RouterProvider router={router} />
			</StoreProvider>
		</div>
	);
}

export default App;
