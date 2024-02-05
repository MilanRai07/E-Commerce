const AddCartReducer=(state,action)=>{
    switch(action.type){
        case "ADD_CART":
              return{
                ...state,
                cartAmount:state.cartAmount+1,
              }
              case "DELETE_CART":
                return{
                  ...state,
                  cartAmount:state.cartAmount-1
                }
        default:
            return state;
    }
}
export default AddCartReducer;