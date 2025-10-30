// action types
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

// action creators
export const fetchStart = () => ({
  type: FETCH_START,
});

export const fetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (error) => ({
  type: FETCH_ERROR,
  payload: error,
});
