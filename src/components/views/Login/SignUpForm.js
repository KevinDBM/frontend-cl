import React,{useContext} from 'react';
import {Formik,Form} from 'formik';
import {AppContext} from '../../../AppContext'
import signupUserSchema from '../../../schemas/signupUser'
import InputWithErrors from '../../commons/InputWithErrors/InputWithErrors'
import {createUser} from '../../../services/user'
import {printErrorAlert,printSuccessAlert} from '../../../utils/printAlerts'

const SignUpForm = (props) => {
    const [generalContext,setGeneralContext] = useContext(AppContext)

    const sendRequestCreateUser = (values) => {
        createUser(values.name,values.email,values.password)
        .then(response => {
            printSuccessAlert(generalContext,setGeneralContext,response)
        })
        .catch(error => {
            printErrorAlert(generalContext,setGeneralContext,error)
        })
    }

    return (
        <Formik
            initialValues={{
                name : '',
                email : '',
                password : '',
                confirmPassword : ''
            }}
            validationSchema={signupUserSchema}
            onSubmit={(values,{setSubmitting}) => {
                sendRequestCreateUser(values)
            }}
        >
             {({ errors }) => (
                 <Form>
                    <InputWithErrors 
                        id="name-signup"
                        label="Nombre"
                        errors={errors}
                        name="name"
                    />
                    <InputWithErrors 
                        id="email-signup"
                        label="Correo"
                        errors={errors}
                        name="email"
                        type="email"
                    />
                    <InputWithErrors 
                        id="password-signup"
                        label="Contraseña"
                        errors={errors}
                        name="password"
                    />
                    <InputWithErrors 
                        id="confirm-password-signup"
                        label="Confirmar contraseña"
                        errors={errors}
                        name="confirmPassword"
                    />
                    <button type="submit" className="btn btn-primary">REGÍSTRATE</button>
            </Form>
             )}
        </Formik>
    );
}

export default SignUpForm