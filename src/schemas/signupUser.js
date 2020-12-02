import * as yup from 'yup'

const signupUserSchema = yup.object().shape({
    name: yup.string()
            .trim()
            .required('El nombre es obligatorio'),
    email: yup.string()
            .trim()
            .required('El correo electrónico es obligatorio')
            .email('El correo electrónico no tiene un formato adecuado'),
    password: yup.string()
                .trim()
                .required('La contraseña es obligatoria'),
    confirmPassword: yup.string()
                .trim()
                .required('Debe confirmar la contraseña')
                .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden')
});

export default signupUserSchema;