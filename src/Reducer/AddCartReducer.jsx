const AddCartReducer = (state, action) => {
  const { Id, Img, Name, Price } = action.payload;
  const cartProducts = {
    id: Id,
    image: Img,
    name: Name,
    price: Price
  }
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        cartAmount: state.cartAmount + 1,
        cart: [...state.cart, cartProducts]
      }
    case "DELETE_CART":
      return {
        ...state,
        cartAmount: state.cartAmount - 1
      }
    default:
      return state;
  }
}
export default AddCartReducer;