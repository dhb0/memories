export const posts = (state = [], { type, payload }) => {
  switch (type) {
    case "UPDATE_POST":
      return state.map(post => post._id === payload._id ? payload : post);
    case "FETCH_ALL":
      return payload;
    case "CREATE_POST":
      return [...state, payload];
    case "DELETE_POST":
      return state.filter(post=>post._id !== payload._id);
    case "LIKE_POST":
      return state.map(post => post._id === payload._id ? payload : post);
    default: 
      return state;
  }
};
