const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
      };
    case "MY_API_DATA":
      const recentData = action.payload.filter((currElement) => {
        return currElement.recent === true;
      })
      return {
        ...state,
        products: action.payload,
        newProducts: recentData

      }
    default:
      return state;
  }
}
export default ProductReducer;