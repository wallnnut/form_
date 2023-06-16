import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./AdditionalInfo.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "entities/User/model/slice/userSlice";
import { Advantage, CheckboxGroup } from "entities/User/model/types/userSchema";
import { AdditionalInfoValidator } from "./model/validators/additionalInfoValidator";
import AddInput from "./AddInput/AddInput";
import {
	getAdvantages,
	getRadioValue,
	getCheckboxGroup,
} from "entities/User/model/selectors";
import { validate } from "shared/lib";
import { PrevNextSteps } from "features";
import CheckBoxGroup from "./CheckBoxGroup/CheckBoxGroup";
import RadioGroup from "./RadioGroup/RadioGroup";
import Advantages from "./Advantages/Advantages";
import { ErrorState } from "widgets/types";

export type Options = {
	name: string;
	value: string;
};

export interface ExtraInfo {
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
	const [errors, setError] = useState<ErrorState>({});
	const [extraInfo, setExtraInfo] = useState<ExtraInfo>({
		advantages,
		checkboxGroup,
		radioValue,
	});
	const isValid = Object.values(errors).length;

	useEffect(() => {
		validate(AdditionalInfoValidator, extraInfo, setError);
	}, [extraInfo]);

	useEffect(() => {
		setExtraInfo((prevState) => ({
			...prevState,
			advantages: advantages,
		}));
	}, [advantages]);

	const handlePutCheck = (data: { name: string; value: boolean }) => {
		setExtraInfo((prevState): ExtraInfo => {
			const newCheckboxGroup = prevState.checkboxGroup.map((check) => {
				if (check.name === data.name) {
					return { ...check, ...data };
				} else {
					return check;
				}
			});
			return { ...prevState, checkboxGroup: newCheckboxGroup };
		});
	};
	const handleRadioChange = (data: {
		name: string;
		value: string | boolean;
	}) => {
		setExtraInfo((prevState) => ({
			...prevState,
			[data.name]: data.value,
		}));
	};

	const handleChange = (data: { name: string; value: string }) => {
		dispatch(userActions.setAdvantage(data));
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
				<Advantages
					label="Advantages"
					errors={errors}
					handleAdvantageChange={handleChange}
					advantages={extraInfo.advantages}
				/>
			</div>
			<AddInput handleAdd={handleAddInput} />
			<div>
				<div style={{ marginTop: "24px" }}>
					<CheckBoxGroup
						options={extraInfo.checkboxGroup}
						handPutCheck={handlePutCheck}
					/>
				</div>

				<div className={classes.radioGroup}>
					<RadioGroup
						options={options}
						value={extraInfo.radioValue}
						handleRadioChange={handleRadioChange}
					/>
				</div>
			</div>
			<PrevNextSteps disabled={!!isValid} text1="Назад" text2="Далее" />
		</form>
	);
};

export default AdditionalInfo;
