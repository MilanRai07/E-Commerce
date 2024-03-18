import { createContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/AddCartReducer';

const AddCart = createContext();

const GetLocalCartData = () => {
    let localCartData = localStorage.getItem('localCart');
    if (localCartData) {
        return JSON.parse(localCartData)
    }
}
const initialState = {  //initial state for usereducer
    cart: GetLocalCartData()
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

    useEffect(() => {
        //set the cart added to the localstorage where key is "localCart"
        localStorage.setItem('localCart', JSON.stringify(state.cart));
    }, [state.cart])

    const Decrement = (searchId, updatedQuantity) => {  //for decreasing product quantity
        dispatch({ type: 'DECREMENT', payload: { searchId, updatedQuantity } })
    }
    const Increment = (searchId, updatedQuantity) => {  //for increasing product quantity
        dispatch({ type: 'INCREMENT', payload: { searchId, updatedQuantity } })
    }
    return <AddCart.Provider value={{ ...state, CartManage, Decrement, Increment }}>{children}</AddCart.Provider>
}

export { AddCart, AddCartProvider };