// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
const FETCH = "FETCH";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const getCharacter = () => dispatch => {
    dispatch({type: FETCH});
    axios.get('https://swapi.co/api/people')
      .then(({data}) => {
      dispatch({type: SUCCESS, payload: data.things});
    })
    .catch(err => {
      dispatch({type: FAILURE, error: err});
    });
  };