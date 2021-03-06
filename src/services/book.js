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

export {
    getMyBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
}