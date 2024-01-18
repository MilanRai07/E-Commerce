import { createContext } from "react";

const ProductContext=createContext();

const ProductProvider=({children})=>{
   return <ProductProvider>{children}</ProductProvider>
}
export {ProductProvider};