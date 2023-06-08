import PhoneEmailSubmit from "features/PhoneEmailSubmit/PhoneEmailSubmit";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Container from "shared/Container/Container";
import UserInfo from "widgets/UserInfo/UserInfo";

// Увидеть информацию о пользователе
// Перейти по ссылкам git telegramm и резюме
// Ввести номер телефона и email
//  Начать отправление формы

const MainPage: FC = () => {
	const navigate = useNavigate();
	return (
		<Container>
			<button
				onClick={() => {
					navigate("/create");
				}}
			>
				Начать
			</button>
			<UserInfo />
			<PhoneEmailSubmit />
		</Container>
	);
};

export default MainPage;
