// combine different reducers
import { combineReducers } from 'redux';

// actions
import {
  ADD_MOVIES,
  ADD_TO_FAVOURITES,
  SET_SHOW_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  ADD_MOVIE_TO_LIST,
  ADD_SEARCH_RESULT,
} from '../actions';



const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false,
};

// movies reducer
export function movies(state = initialMoviesState, action) {
  
  // switch case on action.type
  switch (action.type) {

    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      }; // returning a new array not changing in state

    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };

    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val,
      };

    case REMOVE_FROM_FAVOURITES:
      const filteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourites: filteredArray,
      };
    
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };

    default:
      return state;
  }
}

const initialSearchState = {
  results: {},
  showSearchResults: false,
};

// search reducer
export function search(state = initialSearchState, action) {

  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        results: action.movie,
        showSearchResults: true,
      };

    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        showSearchResults: false,
      };

    default:
      return state;
  }
}


// structure of combineReducer
/*
const initialRootState = {
  movies: initialMoviesState,
  search: []
};

export default function rootReducer(state = initialRootState, action) {
  return {
    movies: movies(state.movies, action),
    search: search(state.search, action)
  };
}
*/

// imported from redux
export default combineReducers({
  movies,
  search,
});
