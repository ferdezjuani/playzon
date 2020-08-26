
import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ cart }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img 
                    className='checkout__ad'
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/AMZN_OutletDeals_Template_March_1500x200_wh_EN.jpg'
                    alt='outlet ad'
                />
                {cart?.length === 0 ? (
                    <div>
                        <h2>Your shopping cart is empty</h2>
                        <p>
                            You have no items in your cart. To buy one or more items, click "Add to basket" next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2>Your shopping cart</h2>
                        {cart?.map(item =>
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        )}
                    </div>
                )}
            </div>
            {cart.length > 0 && (
                <div className='checkout__right'>
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
