import React, { useState } from "react";
import Input from "shared/Input/Input";
import SelectField from "shared/SelectField/SelectField";
import { useNavigate } from "react-router-dom";
import PrevNextSteps from "features/PrevNextSteps/PrevNextSteps";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "entities/User/model/slice/userSlice";
import { getNickName } from "entities/User/model/selectors/getNickName";
import { getName } from "entities/User/model/selectors/getName";
import { getSurname } from "entities/User/model/selectors/getSurname";
import { getSex } from "entities/User/model/selectors/getSex";

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
	const dispatch = useDispatch();
	const nickName = useSelector(getNickName);
	const name = useSelector(getName);
	const surname = useSelector(getSurname);
	const sex = useSelector(getSex);

	const [mainInfo, setMainInfo] = useState<IMainInfo>({
		nickName,
		name,
		surname,
		sex,
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
		dispatch(userActions.submitMainInfo(mainInfo));
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
