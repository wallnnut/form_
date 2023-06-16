import React, { FC } from "react";
import classes from "./ErrorField.module.scss";

export interface IErrorField {
	message?: string;
}

const ErrorField: FC<IErrorField> = ({ message }) => {
	return <div className={classes.error}>{message}</div>;
};

export default ErrorField;
