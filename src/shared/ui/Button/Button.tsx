import React, { FC } from "react";
import classes from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export interface IButton {
	text?: string;
	children?: React.ReactNode | React.ReactElement;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
	handleClick?: (e: React.SyntheticEvent) => void;
	extraClasses?: string[];
	disabled?: boolean;
}

const Button: FC<IButton> = ({
	type,
	text,
	handleClick,
	children,
	extraClasses,
	disabled,
}) => {
	const mods: Record<string, boolean> = disabled
		? {
				[classes.disabled]: disabled,
		  }
		: {};
	const excls = extraClasses?.map((cls) => classes[cls]);
	const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (handleClick) {
			handleClick(e);
		}
	};
	return (
		<button
			disabled={disabled}
			onClick={handleClickButton}
			type={type}
			className={classNames(classes.button, mods, excls)}
		>
			{children ? children : text}
		</button>
	);
};

export default Button;
