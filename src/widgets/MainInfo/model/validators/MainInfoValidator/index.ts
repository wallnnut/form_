import * as yup from "yup";

const forbidenSymbols = /(?=.*[!@#$%^&*])/;
const containsForbidenSymbols = (string: string) =>
	forbidenSymbols.test(string);

export const MainInfoValidator = yup.object().shape({
	sex: yup.string().required("field is required"),
	surname: yup
		.string()
		.required("field is required")
		.test(
			"You should use only letters",
			"You should use only letters",
			(string) => (string ? /^[a-zA-ZА-Яа-я ]*$/.test(string) : undefined)
		)
		.min(3, "Min length is 3 symbols")

		.max(50, "Max length is 30 symbols"),
	name: yup
		.string()
		.required("field is required")
		.min(3, "Min length is 3 symbols")
		.test(
			"You should use only letters",
			"You should use only letters",
			(string) => (string ? /^[a-zA-ZА-Яа-я ]*$/.test(string) : undefined)
		)
		.max(50, "Max length is 30 symbols"),
	nickName: yup
		.string()
		.required("field is required")
		.test(
			"symbols !@#$%^&*()_ are not allowed",
			"symbols !@#$%^&*()_ are not allowed",
			(value) => !containsForbidenSymbols(value)
		)
		.min(3, "Min length is 3 symbols")
		.max(30, "Max length is 30 symbols"),
});
