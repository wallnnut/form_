import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Container from "shared/Container/Container";
import ProgressBar from "shared/ProgressBar/ProgressBar";
import classes from "./CreatePage.module.scss";
import MainInfo from "widgets/MainInfo/MainInfo";
import AdditionalInfo from "widgets/AdditionalInfo/AdditionalInfo";
import AboutInfo from "widgets/AboutInfo/AboutInfo";

const CreatePage = () => {
	const params = useParams();
	const whichStep = (id: string | undefined): number => {
		console.log(id);
		if (!id) {
			return -1;
		} else if (id === "2") {
			return 49.9;
		} else if (id === "3") {
			return 99.9;
		} else return 0;
	};
	return (
		<Container>
			<div className={classes.container}>
				<ProgressBar persent={whichStep(params.id)} />
				<Outlet />
				{!params.id && <MainInfo />}
				{params.id === "2" && <AdditionalInfo />}
				{params.id === "3" && <AboutInfo />}
			</div>
		</Container>
	);
};

export default CreatePage;
