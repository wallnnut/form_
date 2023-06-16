import React, { FC } from "react";
import { RadioField } from "shared/ui";
import classes from "./RadioGroup.module.scss";
import { Options } from "../AdditionalInfo";

export interface RadioGroupProps {
	options: Options[];
	handleRadioChange: (data: { name: string; value: string }) => void;
	value: string;
}

const RadioGroup: FC<RadioGroupProps> = ({
	options,
	handleRadioChange,
	value,
}) => {
	const handleChange = (data: { name: string; value: string }) => {
		handleRadioChange(data);
	};
	return (
		<div className={classes.radioGroup}>
			<RadioField
				name="radioValue"
				radioLabel="Radio group"
				options={options}
				handleChange={handleChange}
				value={value}
			/>
		</div>
	);
};

export default RadioGroup;
