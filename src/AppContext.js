import React,{createContext,useState} from 'react'
import {getToken} from './utils/token'

const isLoggedIn = () => {
    return getToken() || null;
}

const AppContextProvider = (props) =>{
    const [state,setState] = useState({
        isLoggedIn,
        showErrorToast : false,
        errorMessageToast : '',
        showSuccessToast : false,
        successMessageToast : ''
    })

    return (
        <AppContext.Provider value={[state,setState]}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;

export const AppContext = createContext();