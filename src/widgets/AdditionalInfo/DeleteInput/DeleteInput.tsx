import React from "react";
import Button from "shared/Button/Button";
import { ReactComponent as DeleteIcon } from "shared/assets/icons/deleteIcon.svg";

const DeleteInput = () => {
	return <Button>{<DeleteIcon />}</Button>;
};

export default DeleteInput;
