export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_TO_FAVOURITE = "REMOVE_TO_FAVOURITE";
export const GET_JOBS = "GET_JOBS";

export const getJobsAction = (baseEndpoint, query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseEndpoint}${query}&limit=20`);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
