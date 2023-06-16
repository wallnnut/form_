import React, { FC } from "react";
import { Button } from "shared/ui";

export interface IAddInput {
	handleAdd: () => void;
}

const AddInput: FC<IAddInput> = ({ handleAdd }) => {
	const handleClick = () => {
		handleAdd();
	};
	return (
		<Button
			handleClick={handleClick}
			extraClasses={["outlined", "add"]}
			text="+"
			type="button"
		></Button>
	);
};

export default AddInput;
