import proxyBase from './proxyBase'

const createUser = (name,email,password) => {
    return proxyBase().post('/users',{
        name,email,password
    })
}

export {
    createUser
}