import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../services/userService";
import {loginUser} from "../../actions/userActions";
import {connect} from "react-redux";

class LoginComponent extends Component {
  state = {
    name: "",
    password: "",
  };


  updateUsername = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value })
  };
  updatePassword = (e) => {
    e.preventDefault();
    this.setState({ password: e.target.value })
  };

  renderUsernameField = () => {
    return (
      <div className="form-group row">
        <label htmlFor="name" className="col-sm-2 col-form-label">
          Username
        </label>
        <div className="col-sm-10">
          <input className="form-control"
                 value={this.state.name}
                 onChange={this.updateUsername}
                 id="name"
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

  loginUser = async (e) => {
    e.preventDefault();
    const user = {
      name: this.state.name,
      password: this.state.password
    };
    const {loginUser} = this.props;
    if (await loginUser(user) === 1) {
      this.props.history.push('/profile');
    }
    else {
      alert("invalid login");
    }
  };

  render = () => {
    return (
      <div className="container">
        <h1>Sign In</h1>
        <form>
          {this.renderUsernameField()}
          {this.renderPasswordField()}
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" />
            <div className="col-sm-10">
              <button className="btn btn-primary btn-block" id="register" onClick={this.loginUser}>
                Login
              </button>
              <div className="row">
                <div className="col-6">
                  <Link to="/register">Register</Link>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <Link to="/home">Cancel</Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}


const stateToPropertyMapper = (state) => ({ });


const dispatcherToPropsMapper = (dispatch) => ({
  loginUser: async (user) => {
    const savedUser = await userService.login(user);
    if (savedUser.status !== 500) {
      dispatch(loginUser(savedUser));
      return 1;
    }
    return 0;
  }
});


export default connect(stateToPropertyMapper, dispatcherToPropsMapper)(LoginComponent);
