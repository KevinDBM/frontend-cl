import proxyBase from './proxyBase'

const getAuthors = () => {
    return proxyBase().get('/authors')
}

export {
    getAuthors
}