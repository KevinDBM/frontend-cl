import React,{Fragment} from 'react'

//components
import './ModalDeleteBook'
import ModalDeleteBook from './ModalDeleteBook';

const BookCard = (props) => {
    return (
        <Fragment>
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
                    <label className="btn btn-dark mb-0 mr-1" data-toggle="tooltip" data-placement="top" title="Seleccionar libro">
                        <input type="checkbox" />
                    </label>
                    <span href="" className="btn btn-primary mr-1" data-toggle="tooltip" data-placement="top" title="Editar libro">
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                    </span>
                    <span href="" className="btn btn-secondary mr-1" data-toggle="tooltip" data-placement="top" title="Compartir libro en redes">
                        <i className="fa fa-share-alt" aria-hidden="true"></i>
                    </span>
                    <span href="" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
                        <i className="fa fa-trash-o" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Eliminar libro"></i>
                    </span>
                </div>
            </article>
            <ModalDeleteBook />
        </Fragment>
        
    )
}

export default BookCard;