import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    console.log(props);
    let total =0;
    let totalQuantity =0;
    for( const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }

          total = total+ product.price*product.quantity;
          totalQuantity = totalQuantity + product.quantity;

      }

    //const totalreducer = ((previous,product) => previous+product.price);
    //total = cart.reduce(totalreducer,0);

    const shipping = total> 0 ? 15:0;
    const tax = (total + shipping)*0.10;
    const grandtotal = total+shipping+tax;

    //for( const product of cart){
      //  total = total+ product.price;
    // }

    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered:{totalQuantity}</h5>
            <p>Total: {total}</p>
            <p>Shipping:{shipping}</p>
            <p>tax:{tax.toFixed(2)}</p>
            <p>Grand Total: {grandtotal.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;