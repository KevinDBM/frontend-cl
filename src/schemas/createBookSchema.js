import * as yup from 'yup'

const signupUserSchema = yup.object().shape({
    title: yup.string()
            .trim()
            .required('El título es obligatorio'),
    isbn: yup.string()
            .trim()
            .required('El ISBN es obligatorio')
            .max(13,'El ISB no debe contener más de 13 caracteres'),
    image: yup.string()
                .trim()
                .required('La imagen es obligatoria')
                .url('La imagen debe ser una url'),
    description : yup.string()
                    .trim()
                    .min(1,'La descripción debe contener al menos un caracter'),
    author: yup.number('El autor es obligatorio')
                .required('El autor es obligatorio')
                .integer('El autor es obligatorio')
                .min(1,'El autor es obligatorio')
});

export default signupUserSchema;