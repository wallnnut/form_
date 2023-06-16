import * as yup from "yup";

export const AboutInfoValidator = yup.object().shape({
	about: yup
		.string()
		.test(
			"You should use only letters",
			"You should use only letters",
			(string) => {
				if (string) {
					return /^[a-zA-ZА-Яа-я0-9 ]*$/.test(string);
				}
			}
		)
		.max(200, "Max length is 200 symbols"),
});
