import MainPage from "pages/MainPage";
import CreatePage from "pages/CreatePage";
import AdditionalInfo from "widgets/AdditionalInfo/AdditionalInfo";
import AboutInfo from "widgets/AboutInfo/AboutInfo";
import MainInfo from "widgets/MainInfo/MainInfo";

export const routes = [
	{
		path: "/",
		element: <MainPage />,
	},
	{
		path: "/create",
		element: <CreatePage />,
		children: [
			{
				path: "step/",
				element: <MainInfo />,
			},
			{
				path: "step/:id",
				element: <AdditionalInfo />,
			},
			{
				path: "step/:id",
				element: <AboutInfo />,
			},
		],
	},
];
