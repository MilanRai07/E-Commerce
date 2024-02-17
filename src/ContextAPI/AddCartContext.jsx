import { createContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/AddCartReducer';

const AddCart = createContext();
const initialState = {  //initial state for usereducer
    cart: [],
}
const AddCartProvider = ({ children }) => {
    //usereducer hook here
    const [state, dispatch] = useReducer(reducer, initialState);
    //add the selected item into cart array with all details
    const CartManage = (status, Id, Img, Name, Price) => {   
        if (status === 'add') {
            dispatch({ type: 'ADD_CART', payload: { Id, Img, Name, Price } });
        } else if (status === 'remove') {
            dispatch({ type: 'DELETE_CART', payload: { Id } });
        }
    }
    const Decrement=(searchId,updatedQuantity)=>{  //for decreasing product quantity
       dispatch({type:'DECREMENT',payload:{searchId,updatedQuantity}})
    }
    const Increment=(searchId,updatedQuantity)=>{  //for increasing product quantity
        dispatch({type:'INCREMENT',payload:{searchId,updatedQuantity}})
     }
    return <AddCart.Provider value={{ ...state, CartManage,Decrement,Increment }}>{children}</AddCart.Provider>
}

export { AddCart, AddCartProvider };