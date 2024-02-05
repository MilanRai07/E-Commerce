const ProductReducer=(state,action)=>{
  switch (action.type) {
    case "SET_LOADING":
        return{
            ...state,
            isLoading:true
        };
        case "MY_API_DATA":
        const recentData=action.payload.filter((currElement)=>{
           return currElement.recent===true;
        })
            return{
                ...state,
                isLoading:false,
                products:action.payload,
                newProducts:recentData
                
            }
    default:
       return state;
  }
}
export default ProductReducer;