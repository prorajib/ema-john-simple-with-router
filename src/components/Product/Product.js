import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    const{name, img,seller, price, stock,star} = props.product;
    
//    console.log(props);

    return (
        <div className='product'>
            <div>
            <img src={img} alt="" srcset="" />
            </div>
            <div className='product-info'>
            <h4 className='product-name'>{name}</h4>
            <p>by:{seller}</p>
            <p className='price'>Price: {price}</p>
            <p><small>only {stock} left in stock - order soon</small></p>
            <Rating
            initialRating={star}
              emptySymbol="far fa-star icon-color"
              fullSymbol="fas fa-star icon-color"
              readonly
            ></Rating><br /><br />
            <button onClick={()=>props.handleAddToCart(props.product)} className='btn-regular'><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
                      
        </div>
    );
};


export default Product;