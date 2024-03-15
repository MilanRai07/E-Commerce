
const AddCartReducer = (state, action) => {
  const { Id, Img, Name, Price, searchId, updatedQuantity } = action.payload;

  const cartProducts = {
    id: Id,
    image: Img,
    name: Name,
    price: Price,
    quantity: 1,
  }
  switch (action.type) {

    case "ADD_CART":
      const existedItem = state.cart.find((element) => {   //check the if the selected element is alrady existed
        return element.id === Id;
      })
      if (existedItem) {
        const updatedProduct = state.cart.map((element) => {
          if (element.id === Id) {
            const updatedQuantity = element.quantity + 1;
            return {
              ...element,
              quantity: updatedQuantity   //if existed item then just add the quantity not the item  
            }
          } else {
            return element
          }
        })
        return {
          ...state,
          cart: updatedProduct
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, cartProducts],
        }
      }

    case "DELETE_CART":
      const updatedCart = state.cart.filter(element => {    //filter out the selected item
        return element.id !== Id;
      })
      return {
        ...state,
        cart: updatedCart
      }

    case "DECREMENT":
      const decremented = state.cart.map(element => {
        if (element.id === searchId) {
          return { ...element, ...updatedQuantity }; // Update the specific item quanity by decreasing 
        }
        return element;
      });
      return {
        ...state,
        cart: decremented,
      }

    case "INCREMENT":
      const incremented = state.cart.map(element => {
        if (element.id === searchId) {
          return { ...element, ...updatedQuantity }; // Update the specific item by increasing
        }
        return element;
      });
      return {
        ...state,
        cart: incremented
      }
    default:
      return state;
  }
}
export default AddCartReducer;