import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import PrivateRoute from './components/routes/privateRoute'
//css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

//js
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle'

//views
import Login from './components/views/Login/Login';
import ActivateAccount from './components/views/ActivateAccount/ActivateAccount'
import MyBooks from './components/views/MyBooks/MyBooks';
import Books from './components/views/Books/Books'
import Requests from './components/views/Requests/Requests'
import SaveBook from './components/views/MyBooks/Save/Save'


//CONTEXT
import AppContext from './AppContext';
//
import ErrorToast from './components/commons/ErrorToast/ErrorToast'
import SuccessToast from './components/commons/SuccesToast/SuccessToast'

const App = () => {
  return (
    <AppContext>
      <ErrorToast />
      <SuccessToast />
      <Router>
        <Switch>
          <PrivateRoute exact path='/' component={MyBooks} />
          <PrivateRoute exact path='/create-book' component={SaveBook} />
          <PrivateRoute exact path='/edit-book/:bookId' component={SaveBook} />
          <PrivateRoute exact path='/books' component={Books} />
          <PrivateRoute exact path='/requests' component={Requests} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/activate-account/:activateToken' component={ActivateAccount} />
        </Switch>
      </Router>
    </AppContext>
    
  );
}

export default App;
