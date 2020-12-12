import proxyBase from './proxyBase'

const addRequest = (requestedBook,priceOffered,bookToBarter) => {
    return proxyBase().post('/book-requests',{
        requestedBook,priceOffered,bookToBarter
    })
}

export {
    addRequest
}