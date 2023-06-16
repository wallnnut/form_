import React from "react";
import { useParams } from "react-router-dom";
import classes from "./CreatePage.module.scss";
import { AboutInfo, AdditionalInfo, MainInfo } from "widgets";
import { Container, StepProgressBar } from "shared/ui";

const CreatePage = () => {
	const params = useParams();
	const whichStep = (id: string | undefined): number => {
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
				<StepProgressBar persent={whichStep(params.id)} />
				{!params.id && <MainInfo />}
				{params.id === "2" && <AdditionalInfo />}
				{params.id === "3" && <AboutInfo />}
			</div>
		</Container>
	);
};



export default CreatePage;
