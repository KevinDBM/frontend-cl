import React from 'react';

const SignUpForm = (props) => {
    return (
        <form method="get" action="activar-cuenta.html">
            <div className="form-group">
                <label htmlFor="name-signup">Nombre</label>
                <input type="text" className="form-control" id="name-signup" aria-describedby="emailHelp" placeholder="Nombre"/>
            </div>
            <div className="form-group">
                <label htmlFor="email-signup">Correo</label>
                <input type="email" className="form-control" id="email-signup" aria-describedby="emailHelp" placeholder="Correo"/>
            </div>
            <div className="form-group">
                <label htmlFor="password-signup">Contraseña</label>
                <input type="password" className="form-control" id="password-signup" placeholder="Contraseña"/>
            </div>
            <div className="form-group">
                <label htmlFor="confirm-password-signup">Confirmar contraseña</label>
                <input type="password" className="form-control" id="confirm-password-signup" placeholder="Confirmar contraseña"/>
            </div>
            <button type="submit" className="btn btn-primary">REGSÍSTRATE</button>
      </form>
    );
}

export default SignUpForm