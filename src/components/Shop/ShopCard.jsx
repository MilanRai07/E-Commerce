import { useState } from "react";
import useAddCart from "../../CustomHooks/useAddCart";

const ShopCard = (props) => {
    const {CartAmount}=useAddCart();
    const [addCart, setAddCard] = useState(true);
    const { Id, Img, Name, Price } = props;

    const addChildCart = (id) => {
        setAddCard(false);
        CartAmount('add',id);
    }
    const deleteChildCart = (id) => {
        setAddCard(true);
        CartAmount('remove',id);
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
                        {Price}
                    </p>
                    {addCart ?
                        <button onClick={() => addChildCart(Id)}>
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