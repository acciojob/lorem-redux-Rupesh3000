import "regenerator-runtime/runtime";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchError, fetchStart, fetchSuccess } from "../actions/loremActions";

function App() {
  const { loading, data, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchStart());
      try {
        const response = await fetch("https://api.lorem.com/ipsum");
        const result = await response.json();
        dispatch(fetchSuccess(result));
      } catch (err) {
        dispatch(fetchError(err.message));
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <p>
          <strong>{data.title}</strong> <br />
          {data.body}
        </p>
      )}
    </div>
  );
}

export default App;
