import React, { FC } from "react";
import classes from "./Container.module.scss";

export interface IContainer {
	children: React.ReactNode;
}

const Container: FC<IContainer> = ({ children }) => {
	return <div className={classes.container}>{children}</div>;
};

export default Container;
