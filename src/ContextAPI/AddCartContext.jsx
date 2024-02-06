import { createContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/AddCartReducer';

const AddCart = createContext();
const initialState = {  //initial state for usereducer
    cartAmount: 0,
    cart: []
}
const AddCartProvider = ({ children }) => {
    //usereducer hook here
    const [state, dispatch] = useReducer(reducer, initialState);
    //cartamount in navbar here
    const CartManage = (status, Id, Img, Name, Price) => {  //for navbar icon top be updated after add cart click 
        if (status === 'add') {
            dispatch({ type: 'ADD_CART', payload: { Id, Img, Name, Price } });
        } else if (status === 'remove') {
            dispatch({ type: 'DELETE_CART', payload: { Id, Img, Name, Price } });
        }
    }
    return <AddCart.Provider value={{ ...state, CartManage }}>{children}</AddCart.Provider>
}

export { AddCart, AddCartProvider };