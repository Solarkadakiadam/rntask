import {LOG_IN, REGISTER} from '../actions/user';

const initialState = {
  isLoggedIn: false,

  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: action.user.isLoggedIn,
        user: action.user.info,
      };
    case REGISTER:
      return {
        ...state,
        isLoggedIn: action.user.isLoggedIn,
        user: action.user.info,
      };
    default:
      return state;
  }
};

export default userReducer;
