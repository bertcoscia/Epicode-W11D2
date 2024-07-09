import { ADD_TO_FAVOURITE } from "../actions";

const intialState = {
  content: []
};

const favouriteReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        content: action.payload
      };
    default:
      return state;
  }
};

export default favouriteReducer;
