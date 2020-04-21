import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ROLES } from "../../constants";

class RegisterComponent extends Component {
  state = {
    username: "",
    password: "",
    role: "",
    verify: "",
  };

  updateUsername = (e) => {
    e.preventDefault();
    this.setState({username: e.target.value})
  };
  updatePassword = (e) => {
    e.preventDefault();
    this.setState({password: e.target.value})
  };
  updateVerify = (e) => {
    e.preventDefault();
    this.setState({verify: e.target.value})
  };

  updateRole = (e) => {
    e.preventDefault();
    this.setState({role: e.target.value})
  };

  renderRoleDropdown = () => {
    const { role } = this.state;
    return (
      <div className="form-group row">
        <label htmlFor="role" className="col-sm-2 col-form-label">
          Role
        </label>
        <div className="col-sm-10" onChange={this.updateRole}>
          <select id="role" className="form-control" value={role}>
            {ROLES.map(role => <option key={role} value={role}>{role}</option>)}
          </select>
        </div>
      </div>
    )
  };

  render = () => {
    return (
      <div className="container">
        <h1>Register</h1>
        {this.renderRoleDropdown()}
        <div className="form-group row">
          <label htmlFor="username" className="col-sm-2 col-form-label">
            Username
          </label>
          <div className="col-sm-10">
            <input className="form-control"
                   onChange={this.updateUsername}
                   id="username"
                   placeholder="Alice" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input type="password" onChange={this.updatePassword} className="form-control"
                   id="password" placeholder="123qwe#$%" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password-verify" onChange={this.updateVerify} className="col-sm-2 col-form-label">
            Verify Password
          </label>
          <div className="col-sm-10">
            <input type="password" className="form-control"
                   id="password-verify" placeholder="123qwe#$%" />
          </div>
        </div>

        <div className="form-group row">
          <div htmlFor="register" className="col-sm-2 col-form-label" />
          <div className="col-sm-10">
            <button className="btn btn-primary btn-block" id="register">
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
