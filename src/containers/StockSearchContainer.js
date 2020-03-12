import React from "react";
import { connect } from "react-redux";
import StockSearchComponent from "../components/StockSearch/StockSearchComponent";
import finnhubService from "../services/finnhubService";
import { filterStocks, findStocks } from "../actions/finnhubActions";

class StockSearchContainer extends React.Component {
  componentDidMount() {
    const { findStocks, searchTerm, filterStocks } = this.props;
    findStocks().then(() => searchTerm && filterStocks(searchTerm));
  }

  componentDidUpdate(prevProps) {
    const { searchTerm, filterStocks } = this.props;
    if (prevProps.searchTerm !== searchTerm) {
      filterStocks(searchTerm);
    }
  }

  render() {
    const { searchTerm } = this.props;
    return <StockSearchComponent searchTerm={searchTerm ? searchTerm : ''} />
  }
}

const stateToPropertyMapper = (state) => ({});


const dispatcherToPropsMapper = (dispatch) => ({
  findStocks: async () => {
    const stocks = await finnhubService.findAllUSStocks();
    dispatch(findStocks(stocks));
  },
  filterStocks: (searchTerm) => {
    dispatch(filterStocks(searchTerm ? searchTerm.toUpperCase() : ""));
  }
});

export default connect(stateToPropertyMapper, dispatcherToPropsMapper)(StockSearchContainer);