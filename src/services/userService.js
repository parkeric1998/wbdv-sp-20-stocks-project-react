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
  return await response.json();
};



const getSavedStocks = async (userId) => {
   const response = await fetch(`${API_URL}/users/${userId}/stocks`, {
     credentials: 'include'
   });
   return await response.json();
 };

const saveStock = async (userId, stockSymbol) => {
  const response = await fetch(`${API_URL}/users/${userId}/stocks/`, {
    method: 'POST',
    body: JSON.stringify({
      stockSymbol
    }),
    credentials: 'include',
  });
  return await response.json();
};

const deleteStock = async (userId, stockSymbol) => {
  const response = await fetch(`${API_URL}/users/${userId}/stocks/${stockSymbol}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  return await response.json();
};




export default {
  register,
  login,
  logout,
  getSavedStocks,
  saveStock,
  deleteStock
}