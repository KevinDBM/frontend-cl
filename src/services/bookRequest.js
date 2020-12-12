import proxyBase from './proxyBase'

const addRequest = (requestedBook,priceOffered,bookToBarter) => {
    return proxyBase().post('/book-requests',{
        requestedBook,priceOffered,bookToBarter
    })
}

const getMyBookRequestList = (perPage,currentPage) => {
    return proxyBase().get('/book-requests',{
        params : {
            perPage,
            currentPage
        }
    })
}

const updateStatusBookRequest = (bookRequestId,status) => {
    return proxyBase().patch(`/book-requests/${bookRequestId}/status`,{
        status
    })
}

export {
    addRequest,
    getMyBookRequestList,
    updateStatusBookRequest
}