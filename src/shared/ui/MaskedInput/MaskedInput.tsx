import React, { FC } from "react";
import classes from "./MaskedInput.module.scss";
import ErrorField from "../ErrorField/ErrorField";
import { IInput } from "../Input/Input";
import MaskedInput from "react-text-mask";

const MaskedTextInput: FC<IInput> = ({
	handleChange,
	value,
	name,
	type,
	placeHolder,
	inputLabel,
	errorMessage,
}) => {
	const upadteInputField = (e: React.ChangeEvent<HTMLInputElement>): void => {
		handleChange({ name: e.target.name, value: e.target.value });
	};
	return (
		<div>
			{inputLabel ? (
				<label className={classes.inputLabel}>{inputLabel}</label>
			) : null}

			<MaskedInput
				className={classes.input}
				placeholder={placeHolder}
				value={value}
				onChange={upadteInputField}
				name={name}
				type={type}
				mask={[
					"+",
					"7",
					" ",
					"(",
					/[1-9]/,
					/\d/,
					/\d/,
					")",
					" ",
					/\d/,
					/\d/,
					/\d/,
					"-",
					/\d/,
					/\d/,
					"-",
					/\d/,
					/\d/,
				]}
			/>
			<ErrorField message={errorMessage} />
		</div>
	);
};

export default MaskedTextInput;
