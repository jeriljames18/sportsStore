import './ProductScreen.css';
import { useState,useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';

import {getProductDetails} from '../redux/actions/productActions';
import {addToCart} from '../redux/actions/cartActions';
import { useParams,useNavigate } from 'react-router-dom';

const ProductScreen = () =>{
    const [qty,setQty] = useState(1);
    const dispatch = useDispatch();
    let {id} =  useParams();
    let navigate = useNavigate();
    const productDetails = useSelector((state)=>state.getProductDetails);
    const {loading,error,product} = productDetails;
    useEffect(()=>{
        if(product && id !== product._id) {
            dispatch(getProductDetails(id))
        }
    },[dispatch,product,id])

    const addToCartHandle = () =>{
        dispatch(addToCart(product._id,qty));
        navigate("/cart");
    }
    return(
        <div className='productScreen'>
           {loading ?(<h2>loading....</h2>) : error ? (<h2>{error}</h2>) :(
               <>
               <div className='screenleft'>
               <img src={product.imageUrl}  alt='product name'/>
               <p className='infoName'>{product.name}</p> 
                <p className='infoPrice'>CA$ {product.price}</p> 
                <p className='infoColor'> Color : {product.color}</p> 
                <p className='infoCategory'>Category : {product.category}</p>
                <p className='infoDescription'>{product.description}</p>
           </div>
           <div className='screenRight'>
                <div className='rightInfo'>
                    <p className='priceClass'>Price <span>CA$ {product.price}</span></p>
                    <p>Status : <span>{product.inStock > 0 ?"Available" : "Out of Stock"}</span></p>
                    <p>Qty 
                        <select value={qty} onChange={(e)=>setQty(e.target.value)}>
                            {[...Array(product.inStock).keys()].map((x)=>(
                                <option key={x+1} value={x+1}>{x+1}</option>
                            ))}
                        </select>
                    </p>
                    <button type='submit' onClick={addToCartHandle}>Add to Cart</button>
                </div>
           </div>
               </>
           )}
        </div>
    )
}

export default ProductScreen