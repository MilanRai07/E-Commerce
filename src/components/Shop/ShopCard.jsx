import { useContext, useState } from "react";
import { CartData } from "./ShopIndex";

const ShopCard = (props) => {
    
    const [addCart, setAddCard] = useState(true);
    const { Id, Img, Name, Price } = props;
    const context =useContext(CartData);
    const {addToCart, deleteCart} =context;

    const addChildCart=(id)=>{
        setAddCard(false);
        addToCart(id);
    }
    const deleteChildCart=(id)=>{
        setAddCard(true);
        deleteCart(id)
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
                    { addCart?
                    <button onClick={()=>addChildCart(Id)}>
                        Add to cart
                    </button>
                    :
                    <button onClick={()=>deleteChildCart(Id)}>
                        Remove cart
                    </button>
                    }
                </div>
            </div>
        </>
    )
}
export default ShopCard;