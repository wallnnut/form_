import MainPage from "pages/MainPage";
import CreatePage from "pages/CreatePage";
import AdditionalInfo from "widgets/AdditionalInfo/AdditionalInfo";
import AboutInfo from "widgets/AboutInfo/AboutInfo";

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
				Element: AdditionalInfo,
			},
			{
				path: "step/:id",
				Element: AboutInfo,
			},
		],
	},
];
