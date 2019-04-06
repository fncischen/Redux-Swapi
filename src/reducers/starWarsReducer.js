import {FETCH, SUCCESS, FAILURE} from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null 
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  console.log("Reducer: ", action.type);
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH:
      console.log("Fetching!");
      return {
        ...state, fetching: true, error: null   
      };
    case SUCCESS:
      return {...state, fetching: false, characters: action.payload}
    case FAILURE:
      return {...state, error: action.error}
    default:
      return state;
  }
};
