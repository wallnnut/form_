import React, { FC } from "react";
import classes from "./Input.module.scss";

interface IInput {
	type: string;
	placeHolder: string;
	inputName: string;
	name: string;
	value: string;
	handleChange: (data: { [x: string]: string }) => void;
}

const Input: FC<IInput> = ({
	handleChange,
	value,
	name,
	type,
	placeHolder,
	inputName,
}) => {
	const upadteInputField = (e: React.ChangeEvent<HTMLInputElement>): void => {
		handleChange({ [e.target.name]: e.target.value });
	};
	return (
		<div className={classes.inputGroup}>
			<p className={classes.inputName}>{inputName}</p>
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
