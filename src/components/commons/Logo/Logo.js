import React from 'react'
import './logo.css'
import {Link} from 'react-router-dom'

const Logo = (props) => {
    const centerLogo = props.center;

    return (
        <div className={`${centerLogo && 'mr-auto ml-auto'} logo`}>
            <Link to="/" className="logo-link">
                <i className="fa fa-book" aria-hidden="true"></i> COMPARTO LIBROS
            </Link>
        </div>
    )
}

export default Logo;