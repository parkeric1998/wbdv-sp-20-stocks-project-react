import { finnhubUrl } from '../utils'
import { allStocks } from "../allStocks";

// REAL API CALL
// const findAllUSStocks = async () => {
//   const response = await fetch(finnhubUrl('stock/symbol', {exchange: `US`}));
//   return await response.json();
// };

// FAKE to not spam API
const findAllUSStocks = async () => {
  return allStocks;
};

export default {
  findAllUSStocks,
}