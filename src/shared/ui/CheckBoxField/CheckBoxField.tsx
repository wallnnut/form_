import React, { FC } from "react";
import classes from "./CheckBox.module.scss";

export interface ICheckBoxField {
	checkBoxLabel: string;
	name: string;
	value: boolean;
	handleChange: ({ name, value }: { name: string; value: boolean }) => void;
}

const CheckBoxField: FC<ICheckBoxField> = ({
	value,
	handleChange,
	checkBoxLabel,
	name,
}) => {
	const handleCheckBoxChange = () => {
		handleChange({ name: name, value: !value });
	};
	return (
		<div>
			<input
				className={classes.checkBox}
				value=""
				id={name}
				onChange={handleCheckBoxChange}
				checked={value}
				type="checkbox"
			/>
			<label htmlFor={checkBoxLabel}>{checkBoxLabel}</label>
		</div>
	);
};

export default CheckBoxField;
