import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "shared/Button/Button";
import Input from "shared/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "entities/User/model/slice/userSlice";
import { getEmail } from "entities/User/model/selectors/getEmail";
import { getPhone } from "entities/User/model/selectors/getPhone";

export interface MainInfo {
	phone: string;
	email: string;
}

const PhoneEmailSubmit = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const email = useSelector(getEmail);
	const phone = useSelector(getPhone);

	const [mainInfo, setMainInfo] = useState<MainInfo>({
		phone,
		email,
	});
	const handleChange = (data: { name: string; value: string }) => {
		setMainInfo((prevState) => ({
			...prevState,
			[data.name]: data.value,
		}));
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(userActions.submitPhoneAndEmail(mainInfo));
		navigate("/create");
	};
	return (
		<form onSubmit={handleSubmit} action="">
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "24px",
				}}
			>
				<Input
					value={mainInfo.phone}
					handleChange={handleChange}
					name="phone"
					inputLabel="Номер телефона"
					placeHolder="+7 999 999-99-99"
					type="tel"
				/>
				<Input
					value={mainInfo.email}
					handleChange={handleChange}
					name="email"
					inputLabel="Email"
					placeHolder="tim.jenings@example.com"
					type="email"
				/>
			</div>
			<div style={{ marginTop: "48px" }}>
				<Button type="submit" text="Начать" />
			</div>
		</form>
	);
};

export default PhoneEmailSubmit;
