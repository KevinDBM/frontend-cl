import proxyBase from './proxyBase'

const login = (email,password) => {
    return proxyBase().post('/auth',{
        email,password
    })
}

export {
    login
}