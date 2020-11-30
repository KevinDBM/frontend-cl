import React,{useContext} from 'react';
import {withRouter} from 'react-router-dom'
import {Formik,Form} from 'formik'
import InputWithErrors from '../../commons/InputWithErrors/InputWithErrors'
import {printErrorAlert,printSuccessAlert} from '../../../utils/printAlerts'
import loginUserSchema from '../../../schemas/loginUserSchema'
import {login} from '../../../services/auth'
import {AppContext} from '../../../AppContext'
import {saveToken} from '../../../utils/token'

const LoginForm = (props) => {
    const [generalContext,setGeneralContext] = useContext(AppContext)

    const sendRequestLogin = (values) => {
        login(values.email,values.password)
        .then(response => {
            printSuccessAlert(generalContext,setGeneralContext,response)
            saveToken(response.data.token)
    
            props.history.push('/')
        })
        .catch(error => {
            printErrorAlert(generalContext,setGeneralContext,error)
        })
    }

    return (
        <Formik
            initialValues={{
                email : '',
                password : '',
            }}
            validationSchema={loginUserSchema}
            onSubmit={(values,{setSubmitting}) => {
                sendRequestLogin(values)
            }}
        >
             {({ errors }) => (
                 <Form>
                    <InputWithErrors 
                        id="email-login"
                        label="Correo"
                        errors={errors}
                        name="email"
                        type="email"
                    />
                    <InputWithErrors 
                        id="password-login"
                        label="Contraseña"
                        errors={errors}
                        name="password"
                        type="password"
                    />
                    <button type="submit" className="btn btn-primary">INGRESA</button>
            </Form>
             )}
        </Formik>
    )
}

export default withRouter(LoginForm)