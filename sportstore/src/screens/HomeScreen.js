import React from 'react';
import Product from '../components/Product';
import './HomeScreen.css';
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'


import  {getProducts as listProducts} from '../redux/actions/productActions'

const HomeScreen = () =>{

    const dispatch = useDispatch();
    const getProducts = useSelector(state =>state.getProducts);
    const {products,loading,error} = getProducts;

    useEffect(()=>{
        dispatch(listProducts())

    },[dispatch])
    return(
        <div className='homeScreen'>
            <h2 className='homeTitle'> All Products</h2>
            <div className='homeProducts'>
                {loading ? (<h2>Loading...</h2>) : error? (<h2>{error}</h2>) : (products.map(
                    (product)=><Product 
                    key={product._id}
                    productId= {product._id}
                    name={product.name}
                    price={product.price}
                    color={product.color}
                    category= {product.category}
                    description={product.description}
                    imageUrl={product.imageUrl}
                    />))}
            </div>
        </div>
    )
}

export default HomeScreen