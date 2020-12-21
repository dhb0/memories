import axios from "axios";

const API_URL = "http://localhost:5000/posts/"

export const getPosts = () => {
  return async (dispatch) => {
    await axios.get(API_URL).then((response) =>
      dispatch({
        type: "FETCH_ALL",
        payload: response.data,
      })
    );
  };
};

export const createPost = (post) => {
  return async (dispatch) => {
    await axios.post(API_URL, post).then((response) =>
      dispatch({
        type: "CREATE_POST",
        payload: response.data,
      })
    );
  };
};

export const updatePost = (id, updatedPost) =>{
  return async (dispatch) => {
    await axios.patch(`${API_URL}${id}`, updatedPost).then((response) =>
      dispatch({
        type: "UPDATE_POST",
        payload: response.data,
      })
    )
    .catch(err=>console.log(err))
  };
}

export const deletePost = (id) =>{
  return async (dispatch) => {
    await axios.patch(`${API_URL}${id}`).then((response) =>
      dispatch({
        type: "DELETE_POST",
        payload: response.data,
      })
    )
    .catch(err=>console.log(err))
  };
}

export const likePost = (id) =>{
  return async (dispatch) => {
    await axios.patch(`${API_URL}${id}/likepost`).then((response) =>
      dispatch({
        type: "LIKE_POST",
        payload: response.data,
      })
    )
    .catch(err=>console.log(err + 'yarraam'))
  };
}