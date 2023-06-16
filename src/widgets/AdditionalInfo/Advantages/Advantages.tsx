import { Advantage } from "entities/User/model/types/userSchema";
import React, { FC } from "react";
import classes from "./Advantages.module.scss";
import { ErrorState } from "widgets/types";
import { Input } from "shared/ui";
import DeleteInput from "../DeleteInput/DeleteInput";
import { useDispatch } from "react-redux";
import { userActions } from "entities/User/model/slice/userSlice";

export interface AdvantageProps {
	advantages: Advantage[];
	handleAdvantageChange: (data: { name: string; value: string }) => void;
	errors: ErrorState;
	label: string;
}

const Advantages: FC<AdvantageProps> = ({
	advantages,
	handleAdvantageChange,
	errors,
	label,
}) => {
	const dispatch = useDispatch();
	const handleChange = (data: { name: string; value: string }) => {
		handleAdvantageChange(data);
	};
	return (
		<div>
			<label htmlFor="advantage-group">{label}</label>
			{advantages.map((advantage, id) => (
				<div key={advantage.name} className={classes.inputGroup}>
					<div style={{ flexGrow: "3" }}>
						<Input
							tabIndex={id + 1}
							placeHolder="Введите ваши качества"
							type="text"
							name={advantage.name}
							value={advantage.value}
							handleChange={handleChange}
							errorMessage={errors[`advantages[${id}].value`]}
						/>
					</div>

					<DeleteInput
						onDelete={() =>
							dispatch(userActions.deleteAdvantage(advantage))
						}
					/>
				</div>
			))}
		</div>
	);
};

export default Advantages;
