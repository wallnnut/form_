import React, { FC } from "react";
import { ReactComponent as DeleteIcon } from "shared/assets/icons/deleteIcon.svg";
import { Button } from "shared/ui";

export interface IDeleteInput {
	onDelete: () => void;
}

const DeleteInput: FC<IDeleteInput> = ({ onDelete }) => {
	const handleDelete = () => {
		onDelete();
	};
	return (
		<Button
			handleClick={handleDelete}
			extraClasses={["delete"]}
			type="button"
		>
			<DeleteIcon />
		</Button>
	);
};

export default DeleteInput;
