import {FETCH, SUCCESS, FAILURE} from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null 
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH:
      return {
        ...state, fetching: true  
      };
    case SUCCESS:
      return {...state, characters: action.data.results}
    case FAILURE:
      return {...state, error: action.error}
    default:
      return state;
  }
};
