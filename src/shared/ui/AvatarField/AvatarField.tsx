import React, { FC } from "react";
import classes from "./AvatarField.module.scss";

export interface IAvatarField {
	name: string;
}

const AvatarField: FC<IAvatarField> = ({ name }) => {
	return (
		<div className={classes.field}>
			<div>{name}</div>
		</div>
	);
};

export default AvatarField;
