import './CartItem.css';
import { Link } from 'react-router-dom';

const CartItem = ({ item, qtyChangeHandler, removeFromCart }) => {
    return (
        <div className='cartItem'>
            <div className="cartItemImage">
                <img src={item.imageUrl} alt={item.name} />
            </div>
            <div className='detailsClass'>
                <Link to={`/product/${item.product}`} className="cartitemName">
                    <p>{item.name}</p>
                </Link>
                <p className='cartItemPrice'>CA$ {item.price}</p>
                <select className='cartItemSelect'
                    value={item.qty}
                    onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
                    {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                    ))}
                </select>
            </div>
            <button className='cartItemDeleteButton'
                onClick={() => removeFromCart(item.product)}>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default CartItem