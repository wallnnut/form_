import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "shared/Button/Button";
import classes from "./PrevNextSteps.module.scss";

const PrevNextSteps = () => {
	const navigate = useNavigate();
	return (
		<div className={classes.buttonGroup}>
			<Button handleClick={() => navigate(-1)} text="Назад" />
			<Button type="submit" text="Далее" />
		</div>
	);
};

export default PrevNextSteps;
