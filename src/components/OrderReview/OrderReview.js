import React from 'react';
import useCart from '../hooks/useCart';
import Cart from '../Cart/Cart';
import useProducts from '../hooks/useProducts';
import './OrderReview.css';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, deleteFromDb, getStoredCart } from '../../utilities/fakedb';
import { Link, useNavigate } from 'react-router-dom';

const OrderReview = () => {
    const [products, setProducts] = useProducts([]);
    const [cart,setCart] = useCart(products);
    let navigate = useNavigate();
    const handleRemove = key =>{
        deleteFromDb(key);
        const newCart = cart.filter(product=> product.key!==key);
        setCart(newCart);
    }
    const handlePlaceOrder = ()=>{
          navigate('/placeorder');
          setCart([]);
          clearTheCart(cart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                  {
                      cart.map(product => <ReviewItem product={product}
                        key={product.key}
                        handleRemove={handleRemove}
                      
                      ></ReviewItem>)
                  }
            </div>

           <div className="cart-container">
                  <Cart cart={cart}>
                      <Link to="/placeorder">
                        <button onClick={handlePlaceOrder} className='btn-regular'>Place Order</button>
                      </Link>
                  </Cart>
           </div>
            
     </div>
    );
}; 

export default OrderReview;