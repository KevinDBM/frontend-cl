import React from 'react';
//import {useParams} from 'react-router-dom'
import './activateAccount.css'
import {Link} from 'react-router-dom'

//components
import Logo from '../../commons/Logo/Logo' 

const ActivateAccount = (props) => {
    //const {activateToken} = useParams();

    return (
    <section className="d-flex align-items-center main-activate-account">
        <section className="container">
        <div className="col-12 offset-sm-3 col-sm-6 card pt-3 pb-3">
            <Logo center={true}/>
            Bienvenido a la plataforma, a partir de ahora podrá empezar a publicar libros e intercambiarlos con muchas otras personas de todas partes del mundo :D
            <Link to="/" className="btn btn-primary mt3">
                EMPEZAR A COMPARTIR
            </Link>
        </div>
    </section>
    </section>
    );
}
 
export default ActivateAccount;