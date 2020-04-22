import React from "react";
import StockQuoteComponent from "./StockQuoteComponent";
import "./StockDetailsComponent.css"
import userService from "../../services/userService";
import { deleteStock, saveStock } from "../../actions/userActions";
import { connect } from "react-redux";

const StockDetailsComponent = ({ symbol, savedStocks, loggedIn, saveStock, deleteStock, state }) => {
  const isSaved = savedStocks.some(stock => stock.symbol === symbol);
  return (
    <div className="details-page">
      <h1 className="display-4">{`${symbol}`}</h1>
      {loggedIn && (isSaved ?
        <button onClick={() => deleteStock(symbol)}>Unsave</button> :
        <button onClick={() => saveStock(symbol)}>Save</button>)}
      <StockQuoteComponent />
    </div>
  )
};

const stateToPropertyMapper = (state) => ({
  savedStocks: state.user.stocks,
  loggedIn: state.user.name !== "",
});


const dispatcherToPropsMapper = (dispatch) => ({
  saveStock: async (symbol) => {
    let stock = { symbol, name: "" };
    await userService.saveStock(stock);
    dispatch(saveStock(stock));
  },
  deleteStock: async (symbol) => {
    await userService.deleteStock(symbol);
    dispatch(deleteStock(symbol));
  },
});


export default connect(stateToPropertyMapper, dispatcherToPropsMapper)(StockDetailsComponent);