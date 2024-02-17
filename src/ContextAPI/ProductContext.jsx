import { createContext, useEffect, useReducer } from "react";
import { ProductData } from "../Data/ProductData";
import reducer from '../Reducer/ProductReducer';

const ProductContext = createContext();  // context api creation
const API = ProductData;

const initialState = {  //initial state for usereducer
    products: [],
    newProducts: [] //this was not necessary still did for reducer we could use provide products directly
}
const ProductProvider = ({ children }) => {  //context api provider funtion, can access by all the children
    //usereducer hook here
    const [state, dispatch] = useReducer(reducer, initialState);

    // api should have been called here, since i am using own fake json data
    const getProducts = (url) => {
        dispatch({ type: "SET_LOADING" })
        const products = url;
        dispatch({ type: "MY_API_DATA", payload: products });
    }

    useEffect(() => {
        getProducts(API);    //function automatically calling for products
    }, []);

    return <ProductContext.Provider value={{ ...state }}>{children}</ProductContext.Provider> //all the children, value is provided
}

export { ProductProvider, ProductContext };