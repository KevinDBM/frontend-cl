import React,{Fragment,useState} from 'react'
import { Link } from 'react-router-dom';
import getExcerpt from '../../../utils/getExcerpt'

//components
import './ModalDeleteBook'
import ModalDeleteBook from './ModalDeleteBook';
import ModalShareBook from './ModalShareBook'

const BookCard = (props) => {
    const book = props.book;
    const [selectedBook,setSelectedBook] = useState(null)

    const handleSelectedBook = () => {
        setSelectedBook(book)
    }

    const handleCheckSelectedBook = (event) => {
        props.onSelectedBook(book,event.target.checked)
    }

    return (
        <Fragment>
            <article className="card">
                <img className="card-img-top" src={book.image} alt={`${book.title} - ${book.author.name}`} />
                <div className="card-body">
                    <h5 className="card-title">
                        {book.title}
                    </h5>
                    <p className="card-text">
                    {book.description && (
                        `${getExcerpt(book.description)} ${book.description !== getExcerpt(book.description) ? '...' : ''}`
                    )}
                    <span className="blockquote-footer">
                        {book.author.name}
                    </span> 
                    </p>
                </div>
                <div className="card-footer">
                    <label className="btn btn-dark mb-0 mr-1" data-toggle="tooltip" data-placement="top" title="Seleccionar libro">
                        <input type="checkbox" onChange={handleCheckSelectedBook}/>
                    </label>
                    <Link to={`/edit-book/${book.id}`} className="btn btn-primary mr-1" data-toggle="tooltip" data-placement="top" title="Editar libro">
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                    </Link>
                    <span className="btn btn-secondary mr-1" data-toggle="modal" data-target="#shareBookModal" onClick={handleSelectedBook}>
                    <i className="fa fa-share-alt" aria-hidden="true"></i>
                    </span>
                    <span className="btn btn-danger" data-toggle="modal" data-target="#exampleModal" onClick={handleSelectedBook}>
                        <i className="fa fa-trash-o" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Eliminar libro"></i>
                    </span>
                </div>
            </article>
            <ModalDeleteBook book={selectedBook} onDeleteBook={props.onDeleteBook}/>
            <ModalShareBook book={selectedBook} />
        </Fragment>
        
    )
}

export default BookCard;