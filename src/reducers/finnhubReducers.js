import { FIND_STOCKS } from "../actions/finnhubActions";

const initialState = {
  allStocks: [],
  selectedStock: {}
};

const finnhubReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_STOCKS:
      return {
        ...state,
        allStocks: action.stocks,
      };
    default:
      return state
  }
};

export default finnhubReducer;
