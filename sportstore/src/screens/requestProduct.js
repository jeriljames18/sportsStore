import './requestProduct.css'

const RequestScreen = () =>{

   
    return(
        <div className='requestDiv'>
            <h2 className='requestTitle'> Please fill the form to request a new product</h2>
            <div className="formDiv">
            <form action="/submitForm" method="POST">
                <ul>
                    <li>
                       <p> Product Name</p>
                       <input type="text" name="productName"/>
                    </li>
                    <li>
                       <p> Product Brand</p>
                       <input type="text" name="productBrand"/>
                    </li>
                    <li>
                       <p> Product Color</p>
                       <input type="text" name="productColor"/>
                    </li>
                    <li>
                       <p> Product Size</p>
                       <input type="text" name="productSize"/>
                    </li>
                </ul>
                <input className='requestSubmit' type="submit" value="Request" />
            </form>
            </div>
        </div>
    )
}

export default RequestScreen