import CartItem from '../components/CartItem';
import './CartScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {addToCart,removeFromCart} from '../redux/actions/cartActions';

const CartScreen = () =>{

    const dispatch = useDispatch();
    const cart = useSelector(state=>state.cart);

    const {cartItems} = cart;

    const qtyChangeHandler = (id,qty) =>{
        dispatch(addToCart(id,qty))
    }

    const removeHandler = (id) =>{
        dispatch(removeFromCart(id))
    }
    const getCount = () =>{
        return cartItems.reduce((qty,item)=>Number(item.qty) + qty,0);
    }

    const getCartSubTotal = () =>{
        return cartItems.reduce((price,item)=>(item.price * item.qty) + price,0)
    }
    return(
        <div className='cartScreen'>
            <div className="cartLeft">
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <div>Your cart is empty <Link to="/">Go Back</Link></div>
                ): cartItems.map((item)=>(
                    <CartItem item={item} key={item.product} qtyChangeHandler={qtyChangeHandler}
                    removeFromCart ={removeHandler}/>
                ))}
            </div>
            <div className="cartRight">
                <div className="cartInfo">
                <p className='subTotal' > Subtotal ({getCount()}) items</p>
                <p className='totalPrice'> CA$ {getCartSubTotal().toFixed(2)}</p>
                <button>Proceed to Checkout</button>
                </div>
                
            </div>
        </div>
    )
}

export default CartScreen