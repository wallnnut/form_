import React, { FC } from "react";
import classes from "./Button.module.scss";

export interface IButton {
	text?: string;
	children?: React.ReactNode | React.ReactElement;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
	handleClick?: (e: React.SyntheticEvent) => void;
}

const Button: FC<IButton> = ({ type, text, handleClick, children }) => {
	const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (handleClick) {
			handleClick(e);
		}
	};
	return (
		<button
			onClick={handleClickButton}
			type={type}
			className={classes.button}
		>
			{children ? children : text}
		</button>
	);
};

export default Button;
