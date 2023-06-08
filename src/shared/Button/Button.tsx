import React, { FC } from "react";
import classes from "./Button.module.scss";

export interface IButton {
	text: string;
	type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

const Button: FC<IButton> = ({ type, text }) => {
	return (
		<button type={type} className={classes.button}>
			{text}
		</button>
	);
};

export default Button;
