import React, { Fragment, useState } from 'react'

//components
import ModalRequestBook from './ModalRequestBook'

//utils
import getExcerpt from '../../../utils/getExcerpt'

const BookCard = (props) => {
    const book = props.book;

    const handleClickRequestButton = () => {
        props.handleChangeModalRequest()
    }

    return (
        <Fragment>
            <article className="card">
                <img className="card-img-top" src={book.image} alt={book.title} />
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
                    <button onClick={handleClickRequestButton} className="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModal">
                        SOLICITAR
                    </button>
                </div>
            </article>
            <ModalRequestBook book={book} myBooks={props.myBooks}/>
        </Fragment>
    )
}

export default BookCard