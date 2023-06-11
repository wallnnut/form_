import React, { FC } from "react";
import classes from "./Input.module.scss";

interface IInput {
	type: string;
	placeHolder: string;
	inputLabel?: string;
	name: string;
	value: string;
	handleChange: (data: { name: string; value: string }) => void;
}

const Input: FC<IInput> = ({
	handleChange,
	value,
	name,
	type,
	placeHolder,
	inputLabel,
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
				onChange={upadteInputField}
				value={value}
				name={name}
				className={classes.input}
				type={type}
				placeholder={placeHolder}
			/>
		</div>
	);
};

export default Input;
