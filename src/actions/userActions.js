export const LOGIN_USER = "LOGIN_USER";
export const loginUser = (user) => ({
  type: LOGIN_USER,
  user
});

export const LOGOUT_USER = "LOGOUT_USER";
export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const SAVE_STOCK = "SAVE_STOCK";
export const saveStock = (stock) => ({
  type: SAVE_STOCK,
  stock
});

export const DELETE_STOCK = "DELETE_STOCK";
export const deleteStock = (symbol) => ({
  type: DELETE_STOCK,
  symbol
});
