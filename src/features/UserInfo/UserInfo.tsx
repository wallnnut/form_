import React from "react";
import AvatarField from "shared/ui/AvatarField/AvatarField";
import classes from "./UserInfo.module.scss";
import { ReactComponent as FolderIcon } from "shared/assets/icons/Vector.svg";
import { AppLink } from "shared/ui";

export type Links = {
	linkName: string;
	link: string;
};

const UserInfo = () => {
	const name = "Марат Абдурахманов";
	const nameArr = name.split(" ");
	const firstLetterName = nameArr[0][0];
	const firstLetterSurname = nameArr[1][0];

	const links: Links[] = [
		{
			linkName: "Telegram",
			link: "https://t.me/rettletrap",
		},
		{
			linkName: "GitHub",
			link: "https://github.com/wallnnut",
		},
		{
			linkName: "Resume",
			link: "https://disk.yandex.ru/i/GVEWo0AQNDgv6A",
		},
	];

	return (
		<div className={classes.wrapper}>
			<AvatarField name={firstLetterName + firstLetterSurname} />
			<div className={classes._wrapper}>
				<div className={classes.name}>{name}</div>
				<div className={classes.links}>
					{links.map((link) => (
						<AppLink
							key={link.link}
							children={link.linkName}
							to={link.link}
							image={<FolderIcon />}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default UserInfo;
