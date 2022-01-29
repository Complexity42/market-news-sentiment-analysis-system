import * as Yup from 'yup';

export default Yup.object().shape({

	name: Yup
		.string()
		.required()
		.min(8)
		.max(16),

	email: Yup
		.string()
		.required()
		.email(),

	phone: Yup
		.string()
		.required()
		.matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/),

	password: Yup
		.string()
		.required()
		.min(8)
		.max(32),

	confirmPassword: Yup
		.string()
		.oneOf([
			Yup.ref('password'), null
		])

});