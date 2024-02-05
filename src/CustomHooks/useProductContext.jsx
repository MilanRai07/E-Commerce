import { useContext } from "react";
import { ProductContext } from "../ContextAPI/ProductContext";

const useProductContext=()=>{   //custom hook for children consuming context
    return useContext(ProductContext);
}
export default useProductContext;