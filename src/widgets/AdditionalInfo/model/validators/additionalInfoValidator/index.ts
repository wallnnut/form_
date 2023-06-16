import * as yup from "yup";

export const AdditionalInfoValidator = yup.object().shape({
	advantages: yup.array(
		yup.object({
			value: yup
				.string()
				.test(
					"You should use only letters",
					"You should use only letters",
					(string) =>
						string ? /^[a-zA-ZА-Яа-я ]*$/.test(string) : undefined
				)
				.max(50, "Max length is 30 symbols"),
		})
	),
});
