import React from "react";

const LoginComponent = () =>
    <div className="container">
        <h1>Sign In</h1>
        <form>
            <div className="form-group row">
                <label htmlFor="wbdv-username" className="col-sm-2 col-form-label">
                    Username </label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="wbdv-username"
                           placeholder="Alice"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="wbdv-password" className="col-sm-2 col-form-label">
                    Password </label>
                <div className="col-sm-10">
                    <input type="password" className="form-control wbdv-field wbdv-password"
                           id="wbdv-password" placeholder="123qwe#$%"/>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">
                    <a className="btn btn-primary btn-block wbdv-button wbdv-login"
                       href="../profile"
                       id="wbdv-login">Sign in
                    </a>
                    <div className="row">
                        <div className="col-6 wbdv-link wbdv-forgot-password"
                             id="wbdv-forgot-password">
                            <a href="#">Forgot Password?</a>
                        </div>
                        <div className="col-6">
                            <a href="../register"
                               className="float-right wbdv-link wbdv-register"
                               id="wbdv-register">Sign up</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <a href="../index.html"
                               className="wbdv-cancel"
                               id="wbdv-cancel">Cancel</a>
                        </div>
                    </div>

                </div>
            </div>
        </form>
    </div>

export default LoginComponent;
