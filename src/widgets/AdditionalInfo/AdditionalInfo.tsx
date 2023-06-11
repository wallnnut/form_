import PrevNextSteps from "features/PrevNextSteps/PrevNextSteps";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "shared/Button/Button";
import CheckBoxField from "shared/CheckBoxField/CheckBoxField";
import Input from "shared/Input/Input";
import RadioField from "shared/RadioField/RadioField";
import classes from "./AdditionalInfo.module.scss";
import { ReactComponent as DeleteIcon } from "shared/assets/icons/deleteIcon.svg";

export type Options = {
	name: string;
	value: string;
};

const AdditionalInfo = () => {
	const navigate = useNavigate();
	const [countInputAreas, setCountInputAreas] = useState([1, 2, 3]);
	const [extraInfo, setExtraInfo] = useState<any>({
		checkbox1: false,
		checkbox2: false,
		checkbox3: false,
		radioValue: "",
	});
	useEffect(() => {
		setExtraInfo((prevState: any) => {
			const newArr = [...countInputAreas];
			const object: any = { ...prevState };
			newArr.forEach((el, id) => {
				object["input" + id] = "";
			});

			return { ...object };
		});
	}, [countInputAreas]);

	const handleChange = (data: { name: string; value: string | boolean }) => {
		setExtraInfo((prevState: any) => ({
			...prevState,
			[data.name]: data.value,
		}));
	};

	const handleAddInput = () => {
		const newElement = countInputAreas.slice(-1)[0] + 1;
		setCountInputAreas((prevState) => [...prevState, newElement]);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
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
				{countInputAreas.map((el, id) =>
					id === 0 ? (
						<div className={classes.inputGroup}>
							<Input
								key={el + id}
								placeHolder="Введите ваши качества"
								type="text"
								name={`input${id}`}
								value={extraInfo[`input${id}`]}
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
								key={el + id}
								inputLabel=""
								placeHolder="Введите ваши качества"
								type="text"
								name={`input${id}`}
								value={extraInfo[`input${id}`]}
								handleChange={handleChange}
							/>
							<button>{<DeleteIcon />}</button>
						</div>
					)
				)}
			</div>
			<Button type="button" handleClick={handleAddInput} text="+" />

			<div className={classes.checkBoxGroup}>
				<CheckBoxField
					value={extraInfo.checkbox1}
					checkBoxLabel="1"
					name="checkbox1"
					handleChange={handleChange}
				/>
				<CheckBoxField
					value={extraInfo.checkbox2}
					checkBoxLabel="2"
					name="checkbox2"
					handleChange={handleChange}
				/>
				<CheckBoxField
					value={extraInfo.checkbox3}
					checkBoxLabel="3"
					name="checkbox3"
					handleChange={handleChange}
				/>
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
