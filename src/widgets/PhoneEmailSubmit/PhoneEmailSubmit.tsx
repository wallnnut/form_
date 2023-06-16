import React, { useState, useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { userActions } from "entities/User/model/slice/userSlice";
import { EmailAndPhoneValidator } from "widgets/PhoneEmailSubmit/model/PhoneAndNameValidator";
import { validate } from "shared/lib/validate/validate";
import { getEmail, getPhone } from "../../entities/User/model/selectors/index";
import { Button, Input, MaskedTextInput } from "../../shared/ui/index";
import { trimFunction } from "shared/lib/trimFunction/trimFunction";
export interface MainInfo {
	phone: string;
	email: string;
}

const PhoneEmailSubmit: FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const email = useSelector(getEmail);
	const phone = useSelector(getPhone);
	const [errors, setError] = useState<Record<string, string>>({});
	const [mainInfo, setMainInfo] = useState<MainInfo>({
		phone,
		email,
	});
	const isValid = Object.values(errors).length;

	useEffect(() => {
		validate(EmailAndPhoneValidator, mainInfo, setError);
	}, [mainInfo]);

	const handleChange = (data: { name: string; value: string }) => {
		setMainInfo((prevState) => ({
			...prevState,
			[data.name]: data.value,
		}));
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = trimFunction<MainInfo>(mainInfo);
		dispatch(userActions.submitPhoneAndEmail(data));
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
				<MaskedTextInput
					value={mainInfo.phone}
					handleChange={handleChange}
					name="phone"
					inputLabel="Номер телефона"
					placeHolder="+7 (999) 999-99-99"
					type="tel"
					errorMessage={errors.phone}
				/>

				<Input
					value={mainInfo.email}
					handleChange={handleChange}
					name="email"
					inputLabel="Email"
					placeHolder="tim.jenings@example.com"
					type="email"
					errorMessage={errors.email}
				/>
			</div>
			<div style={{ marginTop: "48px" }}>
				<Button disabled={!!isValid} type="submit" text="Начать" />
			</div>
		</form>
	);
};

export default PhoneEmailSubmit;
