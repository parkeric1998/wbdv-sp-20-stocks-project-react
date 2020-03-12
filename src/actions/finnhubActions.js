export const FIND_STOCKS = "FIND_STOCKS";
export const findStocks = (stocks) => ({
  type: FIND_STOCKS,
  stocks
});