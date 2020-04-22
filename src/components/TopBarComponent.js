import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../services/userService";
import { loginUser, logoutUser } from "../actions/userActions";
import { connect } from "react-redux";

class TopBarComponent extends Component {
  render() {
    return (
      <div className="navbar navbar-default row">
        <span className="col-2">
          <Link to="/privacy">
            Privacy Policy
          </Link>
        </span>
        <span className="col-2">
          <Link to="/home">
            Home
          </Link>
        </span>
        <span className="col-2">
          <Link to="/search">
            Search
          </Link>
        </span>
        <span className="col-2">
          <Link to="/profile">
            Profile
          </Link>
        </span>
        {
          this.props.name === "" ?
            <div>
              <span className="col-2">
                <Link to="/register">
                 Register
                </Link>
              </span>
              <span className="col-2">
                <Link to="/login">
                  Login
                </Link>
              </span>
            </div> :
            <span className="col-2">
                <button onClick={this.props.logoutUser}>
                  Logout
                </button>
              </span>
        }
      </div>
    )
  }

}

const stateToPropertyMapper = (state) => ({
  name: state.user.name
});


const dispatcherToPropsMapper = (dispatch) => ({
  logoutUser: async () => {
    await userService.logout();
    dispatch(logoutUser());
  },
});


export default connect(stateToPropertyMapper, dispatcherToPropsMapper)(TopBarComponent);
