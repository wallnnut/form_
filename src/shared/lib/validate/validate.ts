import * as yup from "yup";

export function validate(
	validator: yup.ObjectSchema<{}>,
	data: yup.AnyObject,
	setError: React.SetStateAction<any>
) {
	validator
		.validate(data)
		.then(() => {
			setError({});
		})
		.catch((e) => setError({ [e.path]: e.message }));
}
