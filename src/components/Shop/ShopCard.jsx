import useNavigateHook from "../../CustomHooks/useNavigateHook";
import useCartController from "../../CustomHooks/useCartController";

const ShopCard = (props) => {
    const { Id, Img, Name, Price } = props;

    //custom hook for useNavigate function
    const { Navigation } = useNavigateHook();

    //custom hook for addcart boolean value to show whether button shows add cart or remove cart
    // and funciton that add to product to cart o rremove from cart
    const { addCartShow, addInCart, deleteFromCart } = useCartController();
    return (
        <>
            <div className="shop-card">
                <div className='shopimg-container' onClick={() => Navigation(Id, Name)}>
                    <img src={Img} alt={Name} className="shop-image" ></img>
                </div>
                <div className="shop-detail">
                    <h3 onClick={() => Navigation(Id, Name)}>
                        {Name}
                    </h3>
                    <p>
                        Nrs. {Price.toLocaleString()}
                    </p>
                    {addCartShow ?
                        <button onClick={() => addInCart(Id, Img, Name, Price)}>
                            Add to cart
                        </button>
                        :
                        <button onClick={() => deleteFromCart(Id)}>
                            Remove cart
                        </button>
                    }
                </div>
            </div>
        </>
    )
}
export default ShopCard;