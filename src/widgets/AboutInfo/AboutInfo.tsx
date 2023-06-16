import React, { useState, useEffect } from "react";
import { getAboutInfo } from "entities/User/model/selectors/getAboutInfo";
import { useSelector } from "react-redux";
import { AboutInfoValidator } from "./model/validators";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "app/providers/storeProvider/ui/StoreProvider";
import { sendData, userActions } from "entities/User/model/slice/userSlice";
import { Modal, ModalContent, TextField, SymbolsCounter } from "shared/ui";
import { validate } from "shared/lib";
import { PrevNextSteps } from "features";
import { getLoadingStatus } from "entities/User/model/selectors";
import Spinner from "shared/ui/Spinner/Spinner";
import { ErrorState } from "widgets/types";
import { trimFunction } from "shared/lib/trimFunction/trimFunction";

export interface AboutState {
	about: string;
}

const AboutInfo = () => {
	const about = useSelector(getAboutInfo);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const isLoading = useSelector(getLoadingStatus);
	const [aboutInfo, setAboutInfo] = useState<AboutState>({
		about,
	});
	const [error, setError] = useState<ErrorState>({});
	const result = isLoading === "fulfilled" ? true : false;
	useEffect(() => {
		validate(AboutInfoValidator, aboutInfo, setError);
	}, [aboutInfo]);

	const isValid = Object.values(error).length;

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		const data = trimFunction<AboutState>(aboutInfo);
		dispatch(userActions.collectAllData(data));
		e.preventDefault();
		dispatch(sendData());
		setIsOpen((prevState) => !prevState);
	};
	const handleChange = (data: { name: string; value: string }) => {
		setAboutInfo((prevState) => ({
			...prevState,
			[data.name]: data.value,
		}));
	};
	const handleClick = () => {
		if (result) {
			navigate("/");
			navigate(0);
		} else {
			setIsOpen(false);
		}
	};
	return (
		<>
			<>
				{isLoading === "pending" ? (
					<div
						style={{
							position: "absolute",
							top: "50%",
							left: "50%",
						}}
					>
						<Spinner />
					</div>
				) : (
					<Modal
						className=""
						onClose={() => setIsOpen(false)}
						isOpen={isOpen}
					>
						<ModalContent
							handleClick={handleClick}
							result={result}
						/>
					</Modal>
				)}
			</>

			<form onSubmit={handleSubmit} action="">
				<div style={{ display: "flex", flexDirection: "column" }}>
					<TextField
						value={aboutInfo.about}
						label="About"
						name="about"
						handleChange={handleChange}
						rows={5}
						errorMessage={error.about}
					/>
					<div style={{ alignSelf: "end" }}>
						<SymbolsCounter string={aboutInfo.about} />
					</div>
				</div>
				<PrevNextSteps
					disabled={!!isValid}
					text1="Назад"
					text2="Отправить"
				/>
			</form>
		</>
	);
};

export default AboutInfo;
