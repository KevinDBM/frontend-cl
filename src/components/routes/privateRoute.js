import React,{useContext} from 'react';
import {Route,Redirect} from 'react-router-dom';

//CONTEXT
import {AppContext} from '../../AppContext';

const PrivateRoute = ({component:Component,auth,...rest}) => {
    const [generalContext,setGeneralContext]= useContext(AppContext)
    return (
        <Route 
            {...rest}
            render = {props =>
                generalContext.isLoggedIn() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to='/login' />
                )
            } 
        />
    )
}

export default PrivateRoute