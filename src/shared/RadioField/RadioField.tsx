import React, { FC } from "react";
import { Options } from "widgets/AdditionalInfo/AdditionalInfo";
import classes from "./RadioField.module.scss";

export interface IRadioField {
	radioLabel: string;
	options: Options[];
	name: string;
	handleChange: (data: { name: string; value: string }) => void;
	value: string;
}

const RadioField: FC<IRadioField> = ({
	radioLabel,
	options,
	name,
	handleChange,
	value,
}) => {
	const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleChange({ name: e.target.name, value: e.target.value });
	};
	return (
		<div>
			<label className={classes.radioLabel}>{radioLabel}</label>
			<div>
				{options.map((option) => (
					<div key={option.name + "_" + option.value}>
						<input
							className={classes.radioInput}
							type="radio"
							name={name}
							id={option.name + "_" + option.value}
							checked={option.value === value}
							value={option.value}
							onChange={handleRadioChange}
						/>
						<label htmlFor={option.name + "_" + option.value}>
							{option.name}
						</label>
					</div>
				))}
			</div>
		</div>
	);
};

export default RadioField;
