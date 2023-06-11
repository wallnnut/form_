import React, { FC } from "react";
import Button from "shared/Button/Button";

export interface IAddInput {
	arr: number[];
}

const AddInput: FC<IAddInput> = ({ arr }) => {
	const handleClick = () => {
		const lastElement = arr[-1];
	};

	return <Button handleClick={handleClick} text="+"></Button>;
};

export default AddInput;
