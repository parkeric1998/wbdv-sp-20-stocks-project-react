import React from "react";
import { connect } from "react-redux";
import StockSearchComponent from "../components/StockSearch/StockSearchComponent";
import finnhubService from "../services/finnhubService";
import { findStocks } from "../actions/finnhubActions";

class StockSearchContainer extends React.Component {
  componentDidMount() {
    const { findStocks } = this.props;
    findStocks();
  }

  componentDidUpdate(prevProps) {
    const { searchTerm } = this.props;
    if (prevProps.searchTerm !== searchTerm) {
      //filterStocks(searchTerm);
    }
  }

  render () {
    return <StockSearchComponent/>
  }
}

const stateToPropertyMapper = (state) => ({

});


const dispatcherToPropsMapper = (dispatch) => ({
  findStocks: async () => {
    const stocks = await finnhubService.findAllUSStocks();
    dispatch(findStocks(stocks));
  }
});

export default connect(stateToPropertyMapper, dispatcherToPropsMapper)(StockSearchContainer);