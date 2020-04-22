import React, { Component } from "react";
import userService from "../../services/userService";
import { deleteStock } from "../../actions/userActions";
import { connect } from "react-redux";
import MyStocksComponent from "../MyStocksComponent";

class ProfileComponent extends Component {
  render() {
    if (this.props.name !== "") {
      return (
        <div className="container">
          <div>
            {this.props.name}
          </div>
          <MyStocksComponent />
        </div>
      );
    }
    return (
      <div>not logged in</div>
    )
  }

}

const stateToPropertyMapper = (state) => ({
  name: state.user.name
});


const dispatcherToPropsMapper = (dispatch) => ({
  deleteStock: async (symbol) => {
    await userService.deleteStock(symbol);
    dispatch(deleteStock(symbol));
  },
});


export default connect(stateToPropertyMapper, dispatcherToPropsMapper)(ProfileComponent);
