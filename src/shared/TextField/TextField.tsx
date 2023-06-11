import React, { FC } from "react";
import classes from "./TextField.module.scss";

interface ITextField {
	rows: number;
	handleChange: (data: { name: string; value: string }) => void;
	name: string;
	label: string;
}

const TextField: FC<ITextField> = ({ rows, handleChange, name, label }) => {
	const handleAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		handleChange({ name: e.target.name, value: e.target.value });
	};
	return (
		<div>
			<label className={classes.textLabel} htmlFor={name}>
				{label}
			</label>
			<textarea
				name={name}
				onChange={handleAreaChange}
				rows={rows}
				className={classes.textField}
			></textarea>
		</div>
	);
};

export default TextField;
