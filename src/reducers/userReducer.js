import { LOGIN_USER, LOGOUT_USER, SAVE_STOCK, DELETE_STOCK} from "../actions/userActions";

const initialState = {
  userId: "",
  username: "",
  stocks: [],
};

const userReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN_USER:
      let user = action.user;
      return {
        ...state,
        userId: user.id,
        username: user.username,
        stocks: user.stocks,
      };
    case LOGOUT_USER:
      return initialState;
    case SAVE_STOCK:
      return {
        ...state,
        stocks: [...state.stocks, action.stock]
      };
    case DELETE_STOCK:
      return {
        ...state,
        stocks: state.stocks.filter(s => action.stock.symbol !== s.symbol)
      };
    default:
      return state
  }
};

export default userReducer();
