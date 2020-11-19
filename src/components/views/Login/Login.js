import React from 'react';
import './login.css'

//components
import Logo from '../../commons/Logo/Logo'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
 
const Login = () => {
  return (
    <section className="d-flex align-items-center main-login">
      <section className="container">
        <div className="col-12 offset-sm-4 col-sm-4 card py-3">
            <Logo/>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="home-tab" data-toggle="tab" href="#login" role="tab" aria-controls="home" aria-selected="true">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#registro" role="tab" aria-controls="profile" aria-selected="false">Registro</a>
                </li>

              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="home-tab">
                    <LoginForm/>
                </div>
                <div className="tab-pane fade" id="registro" role="tabpanel" aria-labelledby="profile-tab">
                    <SignUpForm/>
                </div>
              </div>
        </div>
      </section>
    </section>
  );
}
 
export default Login;