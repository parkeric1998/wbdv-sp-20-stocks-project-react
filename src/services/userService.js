import { API_URL } from '../constants'

const register = async (user) => {
  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'content-type': 'application/json'
    },
    credentials: 'include',
  });
  return await response.json();
};

const login = async (user) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'content-type': 'application/json'
    },
    credentials: 'include',
  });
  return await response.json();
};

const logout = async () => {
  const response = await fetch(`${API_URL}/logout`, {
    method: 'POST',
    credentials: 'include',
  });
};


//unneeded?
const getSavedStocks = async (userId) => {
   const response = await fetch(`${API_URL}/stocks`, {
     credentials: 'include'
   });
   return await response.json();
 };

// stock is { symbol, name }
const saveStock = async (stock) => {
  const response = await fetch(`${API_URL}/stocks/`, {
    method: 'POST',
    body: JSON.stringify(stock),
    headers: {
      'content-type': 'application/json'
    },
    credentials: 'include',
  });
  return await response.json();
};

const deleteStock = async (stockSymbol) => {
  const response = await fetch(`${API_URL}/stocks/${stockSymbol}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  return await response.json();
};


export default {
  register,
  login,
  logout,
  saveStock,
  deleteStock
}