import { useState } from "react"
import useAddCartContext from "./useAddCartContext";

const useCartController = () => {
    const { CartManage } = useAddCartContext();
    const [addCartShow, setAddCardShow] = useState(true);
    const addInCart = (Id, Img, Name, Price) => {  //function to add the selected items in the cart array
        setAddCardShow(false);
        CartManage('add', Id, Img, Name, Price);
    }
    const deleteFromCart = (Id) => {     //function to delete selected items from the cart array
        setAddCardShow(true);
        CartManage('remove', Id);
    }
    return { addCartShow, addInCart, deleteFromCart }

}

export default useCartController