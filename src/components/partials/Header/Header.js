import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import {deleteToken} from '../../../utils/token'

//components
import Logo from '../../commons/Logo/Logo'

const Header = (props) => {
    const logout = () => {
        deleteToken()
        props.history.push('/login')
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Logo></Logo>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            Mis libros
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/books">
                            Todos los libros
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/requests">
                            Solicitudes
                        </Link>
                    </li>
                    
                </ul>
                <Link to="/" className="logout-link" onClick={logout}>
                    Logout
                </Link>
                </div>
            </nav>
        </header>
    )
}

export default withRouter(Header);