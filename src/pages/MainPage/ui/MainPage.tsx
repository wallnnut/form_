import React, { FC } from "react";
import Container from "shared/Container/Container";
import PhoneEmailSubmit from "widgets/PhoneEmailSubmit/PhoneEmailSubmit";
import UserInfo from "features/UserInfo/UserInfo";
import Divider from "shared/Divider/Divider";

const MainPage: FC = () => {
	return (
		<Container>
			<UserInfo />
			<Divider />
			<PhoneEmailSubmit />
		</Container>
	);
};

export default MainPage;
