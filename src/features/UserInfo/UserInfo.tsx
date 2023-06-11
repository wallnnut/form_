import React from "react";
import AvatarField from "shared/AvatarField/AvatarField";
import classes from "./UserInfo.module.scss";
import { ReactComponent as FolderIcon } from "shared/assets/icons/Vector.svg";
import { AppLink } from "shared/Link/Link";

const UserInfo = () => {
	const name = "Марат Абдурахманов";
	const nameArr = name.split(" ");
	const firstLetterName = nameArr[0][0];
	const firstLetterSurname = nameArr[1][0];

	return (
		<div className={classes.wrapper}>
			<AvatarField name={firstLetterName + firstLetterSurname} />
			<div className={classes._wrapper}>
				<div className={classes.name}>{name}</div>
				<div className={classes.links}>
					<div className={classes.link}>
						<FolderIcon />
						<AppLink to="https://t.me/rettletrap">Telegram</AppLink>
					</div>
					<div className={classes.link}>
						<FolderIcon />
						<AppLink to="https://github.com/wallnnut">
							GitHub
						</AppLink>
					</div>
					<div className={classes.link}>
						<FolderIcon />
						<AppLink to="https://disk.yandex.ru/i/GVEWo0AQNDgv6A">
							Resume
						</AppLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserInfo;
