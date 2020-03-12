import React from "react";
import { connect } from "react-redux";
import StockDetailsComponent from "../components/StockDetails/StockDetailsComponent";
import finnhubService from "../services/finnhubService";
import { findStockDetails } from "../actions/finnhubActions";

class StockDetailsContainer extends React.Component {
  componentDidMount() {
    const { findStockDetails, symbol } = this.props;
    findStockDetails(symbol);
  }

  componentDidUpdate(prevProps) {
    const { symbol, findStockDetails } = this.props;
    if (prevProps.symbol !== symbol) {
      findStockDetails(symbol);
    }
  }

  render() {
    const { symbol } = this.props;
    return <StockDetailsComponent symbol={symbol} />
  }
}

const stateToPropertyMapper = (state) => ({});


const dispatcherToPropsMapper = (dispatch) => ({
  findStockDetails: async (symbol) => {
    const stockDetails = await finnhubService.findStockDetails(symbol);
    dispatch(findStockDetails(stockDetails));
  }
});

export default connect(stateToPropertyMapper, dispatcherToPropsMapper)(StockDetailsContainer);