// import { finnhubToken } from './keys'

// params is a object of key-value pairs
export const finnhubUrl = (path, params) => {
  const paramString = params ? Object.keys(params).map(key => `${key}=${params[key]}&`) : '';
  const finnhubToken = process.env.FINNHUB_TOKEN
  return `https://finnhub.io/api/v1/${path}?${paramString}token=${finnhubToken}`;
};