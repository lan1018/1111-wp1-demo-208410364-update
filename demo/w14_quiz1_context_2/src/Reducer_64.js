const Reducer_64 = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, alert: action.payload};
  }


}
export default Reducer_64;
