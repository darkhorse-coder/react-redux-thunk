import { PUT_DATA } from "./types";

/**
 * fetch data
 * @param {*} params
 * @returns
 */
export const fetchData = (params) => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => {
      dispatch(putData(data));
    });
};

export const putData = (payload) => {
  return {
    type: PUT_DATA,
    payload,
  };
};
