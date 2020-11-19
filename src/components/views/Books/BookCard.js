import React from 'react'

const BookCard = (props) => {
    return (
        <article className="card">
            <img className="card-img-top" src="https://i.redd.it/w3kr4m2fi3111.png" alt={props.id} />
            <div className="card-body">
                <h5 className="card-title">Nombre del libro</h5>
                <p className="card-text">
                Short description   
                <span className="blockquote-footer">Autor</span> 
                </p>
            </div>
            <div className="card-footer">
                <a href="/" className="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModal">
                    SOLICITAR
                </a>
            </div>
        </article>
    )
}

export default BookCard