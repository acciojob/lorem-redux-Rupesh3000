export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';

export const fetchData = () => {
  return dispatch => {
    dispatch({ type: FETCH_DATA_START });
    
    fetch('https://api.lorem.com/ipsum')
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: FETCH_DATA_SUCCESS,
          payload: { title: data.title, body: data.body }
        });
      })
      .catch(error => {
        dispatch({ type: FETCH_DATA_FAIL, payload: error });
      });
  };
};