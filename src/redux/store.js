import { createStore } from 'redux';

const initialState = {
  isRegistered: false,
  registeredUsers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
     case 'REGISTER_USER':
      return {
        ...state,
        isRegistered: true,
        registeredUsers: [...state.registeredUsers, action.payload]
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);
