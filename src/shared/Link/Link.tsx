import React from "react";
import classes from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
	const { to, children, ...otherProps } = props;

	return (
		<Link to={to} target="_blank" {...otherProps}>
			{children}
		</Link>
	);
};
