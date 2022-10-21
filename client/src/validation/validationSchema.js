import * as yup from 'yup';

const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

const testOptions = {
    name: 'is-password-mathes',
    message: 'Passwords don\'t match',
    test: (value, context) => value === context.parent.password
}

const schemas = {
    loginSchema: yup.object({
        username: yup
            .string()
            .required('Specify your username'),
        password: yup
            .string()
            .matches(passwordRegEx, 'Password must contain at least 6 characters, including at least one number, one uppercase and one lowercase letter')
            .required('Type in your password'),
    }),
    signupSchema: yup.object({
        username: yup
            .string()
            .required('Specify your username'),
        email: yup
            .string()
            .email('Incorrect email format')
            .required(),
        password: yup
            .string()
            .matches(passwordRegEx, 'Password must contain at least 6 characters, including at least one number, one uppercase and one lowercase letter')
            .required('Type in your password'),
        confirmPassword: yup
            .string()
            .required('Confirm your password')
            .test(testOptions),
    }),
    questionSchema: yup.object({
        title: yup
            .string()
            .max(100, 'Tile must have 100 characters at most')
            .required('You must enter the title of a question'),
        questionBody: yup
            .string()
            .max(1000)
            .required('Enter detailed description of your problem')
    }),
    answerSchema: yup.object({
        answer: yup
            .string()
            .max(1000, 'Answer must not exceed 500 characters')
            .required()
    })
}

export default schemas;