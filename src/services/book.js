import { proxy } from 'jquery'
import proxyBase from './proxyBase'

const getMyBooks = (perPage,currentPage) => {
    return proxyBase().get('/books?own',
    {
        params : {
            perPage,
            currentPage
        }
    })
}

const getAllBooks = (perPage,currentPage) => {
    return proxyBase().get('/books',
    {
        params : {
            perPage,
            currentPage
        }
    })
}

const bookFinder = (perPage,currentPage,term) => {
    return proxyBase().get('/books',
    {
        params : {
            perPage,
            currentPage,
            term
        }
    })
}

const getBook = (bookId) => {
    return proxyBase().get(`/books/${bookId}`)
}

const createBook = (title,isbn,author,image,description) => {
    let body = {
        title,
        isbn,
        author,
        image
    }
    if(description && description.trim() !== '') body.description = description;
    return proxyBase().post('/books',body)
}

const updateBook = (bookId,title,isbn,author,image,description) => {
    let body = {
        title,
        isbn,
        author,
        image
    }
    if(description && description.trim() !== '') body.description = description;
    return proxyBase().patch(`/books/${bookId}`,body)
}

const deleteBook = (bookId) => {
    return proxyBase().delete(`/books/${bookId}`)
}

const deleteMultipleBooks = (bookIds) => {
    return proxyBase().delete(`/books/`,{
        data : {
            books : bookIds
        }
    })
}

const getBookSuggestions = (term) => {
    return proxyBase().get('/books/suggestions',
    {
        params : {
            term
        }
    })
}


export {
    getMyBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
    deleteMultipleBooks,
    getAllBooks,
    bookFinder,
    getBookSuggestions
}