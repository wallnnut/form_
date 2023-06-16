import React, { FC } from "react";
import classes from "./Modal.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export interface IModal {
	className: string;
	children?: React.ReactNode;
	isOpen: boolean;
	onClose?: () => void;
}

const Modal: FC<IModal> = ({ className, children, isOpen, onClose }) => {
	const mods: Record<string, boolean> = {
		[classes.opened]: isOpen,
	};

	const onContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
	};

	const closeHandler = () => {
		if (onClose) {
			onClose();
		}
	};
	return (
		<div className={classNames(classes.modal, mods, [className])}>
			<div onClick={closeHandler} className={classes.overlay}>
				<div onClick={onContentClick} className={classes.content}>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Modal;
