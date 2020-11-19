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
import CreateMyBook from './components/views/MyBooks/Create/Create'

const App = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path='/' component={MyBooks} />
        <PrivateRoute exact path='/create-book' component={CreateMyBook} />
        <PrivateRoute exact path='/books' component={Books} />
        <PrivateRoute exact path='/requests' component={Requests} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/activate-account/:activateToken' component={ActivateAccount} />
      </Switch>
    </Router>
  );
}

export default App;
