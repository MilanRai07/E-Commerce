
const ShopCard = (props) => {
    const { Id, Img, Name, Price } = props;
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
                    <button>
                        Own it now
                    </button>
                </div>
            </div>
        </>
    )
}
export default ShopCard;