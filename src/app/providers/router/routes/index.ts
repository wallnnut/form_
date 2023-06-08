import MainPage from "pages/MainPage";
import CreatePage from "pages/CreatePage";
import Step2 from "pages/Step2";
import Step3 from "pages/Step3";

export const routes = [
	{
		path: "/",
		Component: MainPage,
	},
	{
		path: "/create",
		Component: CreatePage,
		children: [
			{
				path: "step/:id",
				Component: Step2,
				children: [
					{
						path: "step/:id",
						Component: Step3,
					},
				],
			},
		],
	},
];
