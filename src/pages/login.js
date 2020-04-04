import React from 'react';

import './login.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = () => {
  return (
        <div id="login">
        <h3 class="text-center text-white pt-5">Login Form</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" action="" method="post">
                          <h3 class="text-center" style={{color: "#031e56"}}>Login</h3>
                          <img style={{height: 'auto', width: 200, marginRight: 'auto', marginLeft: 'auto', display: 'block'}}alt="eLegal Göttingen e.V." src="https://static1.squarespace.com/static/5ddadf77527463483ca93517/t/5ddae0318f514102b45b16c7/1583930052706/?format=1500w" />
                            <div class="form-group">
                              <label for="username" style={{color: "#031e56"}}>Email:</label><br />
                                <input type="text" name="username" id="username" class="form-control" />
                            </div>
                            <div class="form-group">
                              <label for="password" style={{color: "#031e56"}}>Passwort:</label><br />
                                <input type="text" name="password" id="password" class="form-control" />
                            </div>
                          {/*<div class="form-group">
                              <input type="submit" name="submit" class="btn btn-info btn-md" value="submit"></input>
                            </div>*/}

                          <button class="btn" style={{background: '#031e56', color: 'white'}}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Login;
