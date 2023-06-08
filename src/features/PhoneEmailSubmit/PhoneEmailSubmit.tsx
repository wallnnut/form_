import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "shared/Button/Button";
import Input from "shared/Input/Input";

export interface MainInfo {
	phone: string;
	email: string;
}

const PhoneEmailSubmit = () => {
	const navigate = useNavigate();
	const [mainInfo, setMainInfo] = useState<MainInfo>({
		phone: "",
		email: "",
	});
	const handleChange = (data: { [x: string]: string }) => {
		setMainInfo((prevState) => ({
			...prevState,
			...data,
		}));
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(mainInfo);
		navigate("/create");
	};
	return (
		<form onSubmit={handleSubmit} action="">
			<Input
				value={mainInfo.phone}
				handleChange={handleChange}
				name="phone"
				inputName="Номер телефона"
				placeHolder="+7 999 999-99-99"
				type="tel"
			/>
			<Input
				value={mainInfo.email}
				handleChange={handleChange}
				name="email"
				inputName="Email"
				placeHolder="tim.jenings@example.com"
				type="email"
			/>
			<Button type="submit" text="Начать" />
		</form>
	);
};

export default PhoneEmailSubmit;
