import React, { FC } from "react";
import classes from "./ProgressBar.module.scss";
import { ProgressBar, Step } from "react-step-progress-bar";
import { ReactComponent as Dot } from "shared/assets/icons/Dot.svg";
import { ReactComponent as DotGray } from "shared/assets/icons/Dotgray.svg";
import { ReactComponent as DotChecked } from "shared/assets/icons/DotChecked.svg";
import "react-step-progress-bar/styles.css";

interface IStepProgress {
	persent: number;
}

const StepProgressBar: FC<IStepProgress> = ({ persent }) => {
	return (
		<div className={classes.wrapper}>
			<ProgressBar percent={persent} filledBackground="#5558FA">
				<Step transition="scale">
					{({ accomplished }) =>
						persent < 0 ? (
							<Dot />
						) : accomplished ? (
							<DotChecked />
						) : (
							<Dot />
						)
					}
				</Step>
				<Step transition="scale">
					{({ accomplished }) =>
						persent === 49.9 ? (
							<Dot />
						) : accomplished ? (
							<DotChecked />
						) : (
							<DotGray />
						)
					}
				</Step>
				<Step transition="scale">
					{({ accomplished }) =>
						persent === 99.9 ? (
							<Dot />
						) : accomplished ? (
							<DotChecked />
						) : (
							<DotGray />
						)
					}
				</Step>
			</ProgressBar>
		</div>
	);
};
export default StepProgressBar;

