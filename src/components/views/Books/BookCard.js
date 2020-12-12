import React from 'react'

//utils
import getExcerpt from '../../../utils/getExcerpt'

const BookCard = (props) => {
    const book = props.book;

    return (
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
                <a href="/" className="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModal">
                    SOLICITAR
                </a>
            </div>
        </article>
    )
}

export default BookCard