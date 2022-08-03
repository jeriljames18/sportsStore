import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ imageUrl, name, price, category, description, productId, color }) => {
    return (
        <div className='product'>
            <img src={imageUrl} alt={name} />
            <div className='productInfo'>
                <p className='infoName'>{name}</p>
                <p className='infoPrice'>CA$ {price}</p>
                <div className='colorDiv'>
                    <p className='colorP'>Color :</p>
                    <p className='infoColor'>  {color}</p>
                </div>
                <div className='categoryDiv'>
                    <p className='categoryP'>Category :</p>
                    <p className='infoCategory'> {category}</p>
                </div>
                <p className='infoDescription'>{description.substring(0,100)}</p>
                <Link to={`/product/${productId}`} className="infoButton">View</Link>
            </div>
        </div>
    )
}

export default Product