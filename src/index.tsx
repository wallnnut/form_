import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "app";
import { StoreProvider } from "app/providers/storeProvider";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<StoreProvider initialState={{ a: 1 }}>
			<App />
		</StoreProvider>
	</React.StrictMode>
);

