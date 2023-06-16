import React, { FC } from "react";
import { CheckBoxField } from "shared/ui";
import classes from "./CheckBoxGroup.module.scss";
import { CheckboxGroup } from "entities/User/model/types/userSchema";

export interface IChecBoxGroup {
	options: CheckboxGroup[];
	handPutCheck: (data: { name: string; value: boolean }) => void;
}

const CheckBoxGroup: FC<IChecBoxGroup> = ({ options, handPutCheck }) => {
	const handleChange = (data: { name: string; value: boolean }) => {
		handPutCheck(data);
	};
	return (
		<div className={classes.checkBoxGroup}>
			<label htmlFor="checkbox">Checkbox group</label>
			{options.map((option, id) => (
				<CheckBoxField
					key={option.name}
					value={option.value}
					checkBoxLabel={String(id + 1)}
					name={option.name}
					handleChange={handleChange}
				/>
			))}
		</div>
	);
};

export default CheckBoxGroup;
