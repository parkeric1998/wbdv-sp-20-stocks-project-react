import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ROLES } from "../../constants";


//TODO frontend verify username/password length
class RegisterComponent extends Component {
  state = {
    username: "",
    password: "",
    role: "Beginner",
    verify: "",
  };

  updateUsername = (e) => {
    e.preventDefault();
    this.setState({ username: e.target.value })
  };
  updatePassword = (e) => {
    e.preventDefault();
    this.setState({ password: e.target.value })
  };
  updateVerify = (e) => {
    e.preventDefault();
    this.setState({ verify: e.target.value })
  };

  updateRole = (e) => {
    e.preventDefault();
    this.setState({ role: e.target.value })
  };

  renderRoleDropdown = () => {
    const { role } = this.state;
    return (
      <div className="form-group row">
        <label htmlFor="role" className="col-sm-2 col-form-label">
          Role
        </label>
        <div className="col-sm-10">
          <select id="role" className="form-control" onChange={this.updateRole} value={role}>
            {ROLES.map(role => <option key={role} value={role}>{role}</option>)}
          </select>
        </div>
      </div>
    )
  };

  renderUsernameField = () => {
    return (
      <div className="form-group row">
        <label htmlFor="username" className="col-sm-2 col-form-label">
          Username
        </label>
        <div className="col-sm-10">
          <input className="form-control"
                 value={this.state.username}
                 onChange={this.updateUsername}
                 id="username"
                 placeholder="Alice" />
        </div>
      </div>
    );
  };

  renderPasswordField = () => {
    return (
      <div className="form-group row">
        <label htmlFor="password" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input type="password"
                 value={this.state.password}
                 onChange={this.updatePassword}
                 className="form-control"
                 id="password"
                 placeholder="123qwe#$%" />
        </div>
      </div>
    )
  };

  renderVerifyField = () => {
    return (
      <div className="form-group row">
        <label htmlFor="password-verify"
               value={this.state.verify}
               onChange={this.updateVerify}
               className="col-sm-2 col-form-label">
          Verify Password
        </label>
        <div className="col-sm-10">
          <input type="password" className="form-control"
                 id="password-verify" placeholder="123qwe#$%" />
        </div>
      </div>
    );
  };

  registerUser = (e) => {
    e.preventDefault();
    console.log({
      role: this.state.role,
      username: this.state.username,
      password: this.state.password
    })
  };

  render = () => {
    return (
      <div className="container">
        <h1>Register</h1>
        {this.renderRoleDropdown()}
        {this.renderUsernameField()}
        {this.renderPasswordField()}
        {this.renderVerifyField()}

        <div className="form-group row">
          <div htmlFor="register" className="col-sm-2 col-form-label" />
          <div className="col-sm-10">
            <button className="btn btn-primary btn-block" id="register" onClick={this.registerUser}>
              Sign up
            </button>
            <div className="row">
              <div className="col-6">
                <Link to="/login">Login</Link>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <Link to="/home">Cancel</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default RegisterComponent
