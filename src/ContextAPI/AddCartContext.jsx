import { createContext, useReducer } from "react";
import reducer from '../Reducer/AddCartReducer';

const AddCart=createContext();
const initialState={  //initial state for usereducer
    newProducts:[],
    cartAmount:0,
    cart:[],
    index:'',
}
const AddCartProvider=({children})=>{
    //usereducer hook here
    const [state,dispatch]=useReducer(reducer,initialState);
     //cartamount in navbar here
     const CartAmount=(status,Id)=>{  //for navbar icon top be updated after add cart click 
        if(status==='add'){
            dispatch({type:'ADD_CART',payload:Id});
        }else if(status==='remove'){
            dispatch({type:'DELETE_CART',payload:Id});
        }
     }
   return <AddCart.Provider value={{...state,CartAmount}}>{children}</AddCart.Provider>
}
export {AddCart,AddCartProvider};