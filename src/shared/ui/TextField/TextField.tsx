import React, { FC } from "react";
import classes from "./TextField.module.scss";
import ErrorField from "../ErrorField/ErrorField";

interface ITextField {
	rows: number;
	handleChange: (data: { name: string; value: string }) => void;
	name: string;
	label: string;
	value: string;
	errorMessage: string;
}

const TextField: FC<ITextField> = ({
	rows,
	handleChange,
	name,
	label,
	value,
	errorMessage,
}) => {
	const handleAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		handleChange({ name: e.target.name, value: e.target.value });
	};
	return (
		<div>
			<label className={classes.textLabel} htmlFor={name}>
				{label}
			</label>
			<textarea
				maxLength={201}
				value={value}
				name={name}
				onChange={handleAreaChange}
				rows={rows}
				className={classes.textField}
			></textarea>
			<ErrorField message={errorMessage} />
		</div>
	);
};

export default TextField;
