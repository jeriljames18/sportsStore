import "./Navbar.css";
import {Link} from 'react-router-dom';

import {useSelector} from 'react-redux' 

const Navbar = ({click})=> {
    const cart = useSelector(state =>state.cart);
    const {cartItems } = cart;
    const getCountNumber = ()=>{
        return cartItems.reduce((qty,item)=>qty+Number(item.qty),0)
    }
    return (
        <div>
            <nav className="navbar">
                <div className="logo" href="#">
                    <h2>Sports Store</h2>
                </div>
               
                
                    <ul className="navbar-links">
                        <li className="nav-item">
                           <Link to="/cart" className="cartLink">
                               <i className='fas fa-shopping-cart'></i>
                               Cart 
                               <span className='cartlogoBadge'>{getCountNumber()}</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                           <Link to="/">
                               Shop 
                               <span className='cartlogoBadge'></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/request" className="requestProduct">
                                Request a Product ?
                            </Link>
                        </li>
                    </ul>

                    <div className='hamburgerMenu'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                
            </nav>
        </div>
    )
}
export default  Navbar