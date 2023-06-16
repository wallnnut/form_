import React from "react";
import classes from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
	className?: string;
	image?: React.ReactNode;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
	const { to, children, image, ...otherProps } = props;

	return (
		<div className={classes.linkGroup}>
			{image}
			<Link
				className={classes.link}
				to={to}
				target="_blank"
				{...otherProps}
			>
				{children}
			</Link>
		</div>
	);
};
