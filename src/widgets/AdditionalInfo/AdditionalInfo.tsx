import PrevNextSteps from "features/PrevNextSteps/PrevNextSteps";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "shared/Button/Button";
import CheckBoxField from "shared/CheckBoxField/CheckBoxField";
import Input from "shared/Input/Input";
import RadioField from "shared/RadioField/RadioField";
import classes from "./AdditionalInfo.module.scss";
import { ReactComponent as DeleteIcon } from "shared/assets/icons/deleteIcon.svg";
import { StateSchema } from "app/providers/storeProvider/config/stateSchema";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "entities/User/model/slice/userSlice";
import { Advantage, CheckboxGroup } from "entities/User/model/types/userSchema";
import { getAdvantages } from "entities/User/model/selectors/getAdvantages";
import { getRadioValue } from "entities/User/model/selectors/getRadioValue";
import { getCheckboxGroup } from "entities/User/model/selectors/getCheckboxGroup/getCheckboxGroup";

export type Options = {
	name: string;
	value: string;
};

interface ExtraInfo {
	advantages: Advantage[];
	checkboxGroup: CheckboxGroup[];
	radioValue: string;
}

const AdditionalInfo = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const advantages = useSelector(getAdvantages);
	const radioValue = useSelector(getRadioValue);
	const checkboxGroup = useSelector(getCheckboxGroup);
	const [extraInfo, setExtraInfo] = useState<ExtraInfo>({
		advantages,
		checkboxGroup,
		radioValue,
	});

	useEffect(() => {
		setExtraInfo((prevState: any) => ({
			...prevState,
			advantages: advantages,
		}));
	}, [advantages]);

	const handleChange = (data: { name: string; value: string | boolean }) => {
		if (data.name.includes("advantage")) {
			setExtraInfo((prevState: any): ExtraInfo => {
				const newAdvantagesArr = prevState.advantages.map(
					(advantage: any) => {
						if (advantage.name === data.name) {
							return { ...advantage, ...data };
						} else {
							return advantage;
						}
					}
				);

				return { ...prevState, advantages: newAdvantagesArr };
			});
		} else if (data.name.includes("checkbox")) {
			setExtraInfo((prevState: any): ExtraInfo => {
				const newCheckboxGroup = prevState.checkboxGroup.map(
					(check: any) => {
						if (check.name === data.name) {
							return { ...check, ...data };
						} else {
							return check;
						}
					}
				);

				return { ...prevState, checkboxGroup: newCheckboxGroup };
			});
		} else {
			setExtraInfo((prevState: any) => ({
				...prevState,
				[data.name]: data.value,
			}));
		}
	};

	const handleAddInput = () => {
		dispatch(userActions.addAdvantage());
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(userActions.submitExtraInfo(extraInfo));
		navigate("step/3");
	};

	const options: Options[] = [
		{ name: "1", value: "1" },
		{ name: "2", value: "2" },
		{ name: "3", value: "3" },
	];

	return (
		<form onSubmit={handleSubmit}>
			<div className={classes.inputWrapper}>
				{extraInfo.advantages.map((advantage, id) =>
					id === 0 ? (
						<div className={classes.inputGroup}>
							<Input
								key={advantage.name}
								placeHolder="Введите ваши качества"
								type="text"
								name={advantage.name}
								value={advantage.value}
								handleChange={handleChange}
							/>
							<button
								style={{
									background: "none",
									display: "block",
									flex: "0 0 auto",
								}}
							>
								{<DeleteIcon />}
							</button>
						</div>
					) : (
						<div className={classes.inputGroup}>
							<Input
								key={advantage.name}
								placeHolder="Введите ваши качества"
								type="text"
								name={advantage.name}
								value={advantage.value}
								handleChange={handleChange}
							/>
							<button>{<DeleteIcon />}</button>
						</div>
					)
				)}
			</div>
			<Button type="button" handleClick={handleAddInput} text="+" />

			<div className={classes.checkBoxGroup}>
				{extraInfo.checkboxGroup.map((check, id) => (
					<CheckBoxField
						value={check.value}
						checkBoxLabel={String(id + 1)}
						name={check.name}
						handleChange={handleChange}
					/>
				))}
			</div>
			<div className={classes.radioGroup}>
				<RadioField
					name="radioValue"
					radioLabel="Radio group"
					options={options}
					handleChange={handleChange}
					value={extraInfo.radioValue}
				/>
			</div>
			<PrevNextSteps />
		</form>
	);
};

export default AdditionalInfo;
