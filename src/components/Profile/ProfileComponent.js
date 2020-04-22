import React, {Component} from "react";
import userService from "../../services/userService";
import {deleteStock, loginUser} from "../../actions/userActions";
import {connect} from "react-redux";

class ProfileComponent extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    {this.props.name}
                </div>
                <div>
                    {this.props.stocks}
                </div>
            </div>
        );
    }

}

const stateToPropertyMapper = (state) => ({
    stocks: state.user.stocks,
    name: state.user.name
});


const dispatcherToPropsMapper = (dispatch) => ({
    deleteStock: async (symbol) => {
        await userService.deleteStock(symbol);
        dispatch(deleteStock(symbol));
    },
});


export default connect(stateToPropertyMapper, dispatcherToPropsMapper)(ProfileComponent);
