import * as yup from 'yup'

const loginUserSchema = yup.object().shape({
    email: yup.string()
            .trim()
            .required('El correo electrónico es obligatorio')
            .email('El correo electrónico no tiene un formato adecuado'),
    password: yup.string()
                .trim()
                .required('La contraseña es obligatoria')
});

export default loginUserSchema;