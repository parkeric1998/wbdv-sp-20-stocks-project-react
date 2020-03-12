export const FIND_STOCKS = "FIND_STOCKS";
export const findStocks = (stocks) => ({
  type: FIND_STOCKS,
  stocks
});

export const FILTER_STOCKS = "FILTER_STOCKS";
export const filterStocks = (searchTerm) => ({
  type: FILTER_STOCKS,
  searchTerm
});