import {Link} from 'react-router-dom'
import React from 'react';

const LoginForm = (props) => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="email-login">Correo</label>
                <input type="email" className="form-control" id="email-login" aria-describedby="emailHelp" placeholder="Correo" />
            </div>
            <div className="form-group">
                <label htmlFor="password-login">Contraseña</label>
                <input type="password" className="form-control" id="password-login" placeholder="Contraseña" />
            </div>
            <div>
                <Link to="/">
                    Olvidé mi contraseña
                </Link>
            </div>
            <button type="submit" className="btn btn-primary">INGRESA</button>
        </form>
    );
}

export default LoginForm