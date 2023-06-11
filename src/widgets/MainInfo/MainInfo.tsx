import React, { useState } from "react";
import classes from "./MainInfo.module.scss";
import Input from "shared/Input/Input";
import SelectField from "shared/SelectField/SelectField";
import { useNavigate } from "react-router-dom";
import Button from "shared/Button/Button";
import PrevNextSteps from "features/PrevNextSteps/PrevNextSteps";

export enum Sex {
	MAN = "man",
	WOMAN = "woman",
	DEFAULT = "Выбирите пол",
}

interface IMainInfo {
	nickName: string;
	name: string;
	surname: string;
	sex: Sex;
}

const MainInfo = () => {
	const [mainInfo, setMainInfo] = useState<IMainInfo>({
		nickName: "",
		name: "",
		surname: "",
		sex: Sex.DEFAULT,
	});

	const navigate = useNavigate();

	const options: { value: Sex; label: string; disabled?: boolean }[] = [
		{
			value: Sex.DEFAULT,
			label: "Выбирите пол",
			disabled: true,
		},
		{
			value: Sex.MAN,
			label: "Man",
		},
		{
			value: Sex.WOMAN,
			label: "Woman",
		},
	];

	const handleChange = (data: { name: string; value: string }) => {
		setMainInfo((prevState) => ({
			...prevState,
			[data.name]: data.value,
		}));
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate("step/2");
	};
	return (
		<form action="" onSubmit={handleSubmit}>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "24px",
				}}
			>
				<Input
					inputLabel="Nickname"
					placeHolder="Введите никнэйм"
					type="text"
					name="nickName"
					value={mainInfo.nickName}
					handleChange={handleChange}
				/>
				<Input
					inputLabel="Name"
					placeHolder="Введите имя"
					type="text"
					name="name"
					value={mainInfo.name}
					handleChange={handleChange}
				/>
				<Input
					inputLabel="Surname"
					placeHolder="Введите фамилию"
					type="text"
					name="surname"
					value={mainInfo.surname}
					handleChange={handleChange}
				/>
				<SelectField
					handleChange={handleChange}
					name="sex"
					selectLabel="Sex"
					options={options}
				/>
			</div>

			<PrevNextSteps />
		</form>
	);
};

export default MainInfo;
