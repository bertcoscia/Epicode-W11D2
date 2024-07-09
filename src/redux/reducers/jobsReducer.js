import { GET_JOBS } from "../actions";

const intialState = {
  content: []
};

const jobsReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        content: action.payload
      };
    default:
      return state;
  }
};

export default jobsReducer;
