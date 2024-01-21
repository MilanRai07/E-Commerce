import { createContext, useEffect, useReducer } from "react";
import { ProductData } from "../Data/ProductData";
import reducer from '../Reducer/ProductReducer';
import { useContext } from "react";
const ProductContext=createContext();
const API=ProductData;

const initialState={
    isLoading:false,
    products:[],
    newProducts:[]
}
const ProductProvider=({children})=>{
    //usereducer hook here
    const [state,dispatch]=useReducer(reducer,initialState);

  const getProducts=(url)=>{
    //your api call here
    dispatch({type:"SET_LOADING" })
        const products=url;
        dispatch({type:"MY_API_DATA", payload:products });
     }
    useEffect(()=>{
     getProducts(API);

    },[]);
return  <ProductContext.Provider value={{...state}}>{children}</ProductContext.Provider>
}

//custom hook
const useProductContext=()=>{
    return useContext(ProductContext);
}
export {ProductProvider,ProductContext, useProductContext};