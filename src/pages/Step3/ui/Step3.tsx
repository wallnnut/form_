import React from "react";
import { useNavigate } from "react-router-dom";

const Step3 = () => {
	const navigate = useNavigate();
	return (
		<div>
			Step3
			<button
				onClick={() => {
					navigate(-1);
				}}
			>
				Назад
			</button>
			<button>Далее</button>
		</div>
	);
};

export default Step3;
