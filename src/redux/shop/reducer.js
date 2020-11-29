import { UPDATE_COLLECTIONS } from './types';

const initialState = {
  collections: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
