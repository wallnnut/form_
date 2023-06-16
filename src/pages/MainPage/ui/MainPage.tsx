import { UserInfo } from "features";
import React, { FC } from "react";
import { Container, Divider } from "shared/ui";
import { PhoneEmailSubmit } from "widgets";

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
