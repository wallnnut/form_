import { Sex } from "widgets/MainInfo/MainInfo";
import React, { FC } from "react";
import classes from "./SelectField.module.scss";
import ErrorField from "../ErrorField/ErrorField";

interface ISelectField {
	options: { value: Sex; label: string; disabled?: boolean }[];
	selectLabel: string;
	name: string;
	handleChange: (data: { name: string; value: string }) => void;
	errorMessage: string;
}

const SelectField: FC<ISelectField> = ({
	selectLabel,
	options,
	name,
	handleChange,
	errorMessage,
}) => {
	const handleChangeOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
		handleChange({ name: e.target.name, value: e.target.value });
	};
	return (
		<div className={classes.selectGroup}>
			<label className={classes.selectLabel} htmlFor="select">
				{selectLabel}
			</label>
			<select
				onChange={handleChangeOption}
				className={classes.select}
				name={name}
				id=""
			>
				{options.map((option) =>
					option.disabled ? (
						<option
							selected
							key={option.value}
							defaultValue={option.value}
							disabled
						>
							{option.label}
						</option>
					) : (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					)
				)}
			</select>
			<ErrorField message={errorMessage} />
		</div>
	);
};

export default SelectField;
