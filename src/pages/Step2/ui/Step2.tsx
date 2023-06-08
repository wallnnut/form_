import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Step1 = () => {
	const navigate = useNavigate();
	return (
		<div>
			Step2
			<button
				onClick={() => {
					navigate(-1);
				}}
			>
				Назад
			</button>
			<button
				onClick={() => {
					navigate("step/3");
				}}
			>
				Далее
			</button>
			<Outlet />
		</div>
	);
};

export default Step1;
