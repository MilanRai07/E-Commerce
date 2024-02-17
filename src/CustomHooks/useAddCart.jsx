import { useContext } from "react"
import { AddCart } from "../ContextAPI/AddCartContext"

const useAddCart = () => {
    return useContext(AddCart)
}
export default useAddCart;