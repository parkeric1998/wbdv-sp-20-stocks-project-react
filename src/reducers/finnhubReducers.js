import { FIND_STOCKS, FILTER_STOCKS } from "../actions/finnhubActions";
import uniqBy from "lodash/uniqBy";

const initialState = {
  allStocks: [],
  filteredStocks: [],
  selectedStock: {}
};

const finnhubReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_STOCKS:
      const uniqueStock = uniqBy(action.stocks, (stock) => stock.symbol);
      return {
        ...state,
        allStocks: uniqueStock,
        filteredStocks: uniqueStock,
      };
    case FILTER_STOCKS:
      console.log("filtering", action.searchTerm);
      const filteredStocks = state.allStocks.filter(stock => stock.displaySymbol.startsWith(action.searchTerm));
      return {
        ...state,
        filteredStocks
      };
    default:
      return state
  }
};

export default finnhubReducer;
