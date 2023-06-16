import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./PrevNextSteps.module.scss";
import { Button } from "shared/ui";

export interface IPrevNextSteps {
	text1?: string;
	text2?: string;
	disabled?: boolean;
}
const PrevNextSteps: FC<IPrevNextSteps> = ({ text1, text2, disabled }) => {
	const navigate = useNavigate();

	return (
		<div className={classes.buttonGroup}>
			<Button
				type="button"
				extraClasses={["outlined"]}
				handleClick={() => navigate(-1)}
				text={text1 || "button1"}
			/>
			<Button
				disabled={disabled}
				type="submit"
				text={text2 || "button2"}
			/>
		</div>
	);
};

export default PrevNextSteps;
