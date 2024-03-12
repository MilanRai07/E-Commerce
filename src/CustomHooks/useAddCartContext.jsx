import { useContext } from "react"
import { AddCart } from "../ContextAPI/AddCartContext"

const useAddCartContext = () => {
    return useContext(AddCart)
}
export default useAddCartContext;