import * as yup from "yup";

export const EmailAndPhoneValidator = yup.object().shape({
	email: yup.string().email("invalid Email").required("field is required"),
	phone: yup.string().required("field is required"),
});
