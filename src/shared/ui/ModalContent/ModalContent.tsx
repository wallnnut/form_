import React, { FC } from "react";
import classes from "./ModalContent.module.scss";
import { ReactComponent as SuccesIcon } from "shared/assets/icons/IconSuccess.svg";
import { ReactComponent as FailedIcon } from "shared/assets/icons/IconFailed.svg";
import Button from "../Button/Button";

export interface IModalContent {
	result: boolean;
	text?: string;
	handleClick: () => void;
}

const ModalContent: FC<IModalContent> = ({ result, text, handleClick }) => {
	return (
		<div className={classes.wrapper}>
			<h2 className={classes.title}>
				{result ? "Форма успешно отправлена" : "Ошибка"}
			</h2>
			{text && <div>{text}</div>}

			{result ? <SuccesIcon /> : <FailedIcon />}
			<Button
				type="button"
				handleClick={handleClick}
				text={result ? "На главную" : "Закрыть"}
			/>
		</div>
	);
};

export default ModalContent;
