import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Container from "shared/Container/Container";
import ProgressBar from "shared/ProgressBar/ProgressBar";

const CreatePage = () => {
	const navigate = useNavigate();
	const params = useParams();
	console.log(!!params.id);
	return (
		<Container>
			<div>
				<ProgressBar />
				Step1
				<button
					onClick={() => {
						navigate("/");
					}}
				>
					Назад
				</button>
				<button
					onClick={() => {
						navigate("step/2");
					}}
				>
					Далее
				</button>
			</div>
			<Outlet />
		</Container>
	);
};

export default CreatePage;
