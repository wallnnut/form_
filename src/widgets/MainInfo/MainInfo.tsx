import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "entities/User/model/slice/userSlice";
import {
	getName,
	getNickName,
	getSurname,
	getSex,
} from "entities/User/model/selectors";
import { MainInfoValidator } from "./model/validators/MainInfoValidator";
import { Input, SelectField } from "shared/ui";
import { PrevNextSteps } from "features";
import { ErrorState } from "widgets/types";
import { validate } from "shared/lib";
import { trimFunction } from "shared/lib/trimFunction/trimFunction";

export enum Sex {
	MAN = "man",
	WOMAN = "woman",
	DEFAULT = "",
}

export interface MainInfoState {
	nickName: string;
	name: string;
	surname: string;
	sex: Sex;
}

const MainInfo = () => {
	const dispatch = useDispatch();
	const nickName = useSelector(getNickName);
	const name = useSelector(getName);
	const surname = useSelector(getSurname);
	const sex = useSelector(getSex);

	const [mainInfo, setMainInfo] = useState<MainInfoState>({
		nickName,
		name,
		surname,
		sex,
	});
	const [errors, setError] = useState<ErrorState>({});
	const isValid = Object.values(errors).length;

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
	useEffect(() => {
		validate(MainInfoValidator, mainInfo, setError);
	}, [mainInfo]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = trimFunction<MainInfoState>(mainInfo);
		dispatch(userActions.submitMainInfo(data));
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
					errorMessage={errors.nickName}
				/>
				<Input
					inputLabel="Name"
					placeHolder="Введите имя"
					type="text"
					name="name"
					value={mainInfo.name}
					handleChange={handleChange}
					errorMessage={errors.name}
				/>
				<Input
					inputLabel="Surname"
					placeHolder="Введите фамилию"
					type="text"
					name="surname"
					value={mainInfo.surname}
					handleChange={handleChange}
					errorMessage={errors.surname}
				/>
				<SelectField
					handleChange={handleChange}
					name="sex"
					selectLabel="Sex"
					options={options}
					errorMessage={errors.sex}
				/>
			</div>
			<PrevNextSteps disabled={!!isValid} text1="Назад" text2="Далее" />
		</form>
	);
};

export default MainInfo;
