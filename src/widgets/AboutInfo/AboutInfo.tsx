import PrevNextSteps from "features/PrevNextSteps/PrevNextSteps";
import React, { useState } from "react";
import TextField from "shared/TextField/TextField";

const AboutInfo = () => {
	const [aboutInfo, setAboutInfo] = useState({
		about: "",
	});
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	const handleChange = (data: { name: string; value: string }) => {
		setAboutInfo((prevState: any) => ({
			...prevState,
			[data.name]: data.value,
		}));
	};
	return (
		<form onSubmit={handleSubmit} action="">
			<TextField
				label="About"
				name="about"
				handleChange={handleChange}
				rows={5}
			/>
			<PrevNextSteps />
		</form>
	);
};

export default AboutInfo;
