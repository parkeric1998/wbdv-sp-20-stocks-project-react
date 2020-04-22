import { finnhubUrl } from '../utils'
// import { allStocks } from "../allStocks";

//REAL API CALL
const findAllUSStocks = async () => {
  const response = await fetch(finnhubUrl('stock/symbol', {exchange: `US`}));
  return await response.json();
};



// REAL API CALL
const findStockDetails = async (symbol) => {
  const response = await fetch(finnhubUrl('quote', { symbol }));
  return await response.json();
};


// FAKE to not spam API
// const findAllUSStocks = async () => {
//   return allStocks;
// };
// FAKE to not spam API
// const findStockDetails = async () => {
//   return {"c":242.48,"h":270,"l":248,"o":255.94,"pc":275.43,"t":1584019800};
// };


export default {
  findAllUSStocks,
  findStockDetails
}
