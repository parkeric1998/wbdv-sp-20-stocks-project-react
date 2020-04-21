import React from "react";

const RegisterComponent = () =>
    <div className="container">
        <h1>Register</h1>

        <div className="form-group row">
            <label htmlFor="username" className="col-sm-2 col-form-label">
                Username </label>
            <div className="col-sm-10">
                <input className="form-control wbdv-field wbdv-username"
                       id="username"
                       placeholder="Alice"/>
            </div>
        </div>

        <div className="form-group row">
            <label htmlFor="password" className="col-sm-2 col-form-label">
                Password </label>
            <div className="col-sm-10">
                <input type="password" className="form-control wbdv-field wbdv-password"
                       id="password" placeholder="123qwe#$%"/>
            </div>
        </div>

        <div className="form-group row">
            <label htmlFor="password-verify" className="col-sm-2 col-form-label">
                Verify Password </label>
            <div className="col-sm-10">
                <input type="password" className="form-control wbdv-field wbdv-password-verify"
                       id="password-verify" placeholder="123qwe#$%"/>
            </div>
        </div>

        <div className="form-group row">
            <label htmlFor="register" className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
                <a className="btn btn-primary btn-block wbdv-button wbdv-register"
                   href="../profile"
                   id="register"
                   role="button">Sign up</a>
                <div className="row">
                    <div className="col-6">
                        <a className="wbdv-link wbdv-login"
                           id="wbdv-login"
                           href="../login">Login</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <a href="../"
                           className="wbdv-cancel"
                           id="wbdv-cancel">Cancel</a>
                    </div>
                </div>
            </div>

        </div>
    </div>

export default RegisterComponent
