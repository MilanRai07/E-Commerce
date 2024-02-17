import { useState } from "react";
import useAddCart from "../../CustomHooks/useAddCart";

const ShopCard = (props) => {
    const { CartManage } = useAddCart();
    const [addCart, setAddCard] = useState(true);
    const { Id, Img, Name, Price } = props;

    const addChildCart = (Id, Img, Name, Price) => {  //function to add the selected items in the cart array
        setAddCard(false);
        CartManage('add', Id, Img, Name, Price);
    }
    const deleteChildCart = (Id) => {     //function to delete selected items from the cart array
        setAddCard(true);
        CartManage('remove', Id);
    }

    return (
        <>
            <div className="shop-card">
                <div className='shopimg-container'>
                    <img src={Img} alt={Name} className="shop-image" ></img>
                </div>
                <div className="shop-detail">
                    <h3>
                        {Name}
                    </h3>
                    <p>
                        Nrs. {Price.toLocaleString()}
                    </p>
                    {addCart ?
                        <button onClick={() => addChildCart(Id, Img, Name, Price)}>
                            Add to cart
                        </button>
                        :
                        <button onClick={() => deleteChildCart(Id)}>
                            Remove cart
                        </button>
                    }
                </div>
            </div>
        </>
    )
}
export default ShopCard;