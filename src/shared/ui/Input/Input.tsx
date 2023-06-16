import React, { FC } from "react";
import classes from "./Input.module.scss";
import ErrorField from "../ErrorField/ErrorField";

export interface IInput {
	type: string;
	placeHolder: string;
	inputLabel?: string;
	name: string;
	value: string;
	errorMessage?: string;
	handleChange: (data: { name: string; value: string }) => void;
	tabIndex?: number;
}

const Input: FC<IInput> = ({
	handleChange,
	value,
	name,
	type,
	placeHolder,
	inputLabel,
	errorMessage,
	tabIndex,
}) => {
	const upadteInputField = (e: React.ChangeEvent<HTMLInputElement>): void => {
		handleChange({ name: e.target.name, value: e.target.value });
	};

	return (
		<div className={classes.inputGroup}>
			{inputLabel ? (
				<label className={classes.inputLabel}>{inputLabel}</label>
			) : null}

			<input
				tabIndex={tabIndex}
				onChange={upadteInputField}
				value={value}
				name={name}
				className={classes.input}
				type={type}
				placeholder={placeHolder}
			/>
			<ErrorField message={errorMessage} />
		</div>
	);
};

export default Input;
