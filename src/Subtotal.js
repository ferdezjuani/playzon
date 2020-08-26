import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import {getCartTotal} from './reducer';

function Subtotal() {
    const [{cart}, dispatch] = useStateValue();
    
    return (
        <div className='subtotal'>
            {/* Price */}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                    <p>
                        Subtotal ({cart.length} items): <strong>{value}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type='checkbox' />
                        This order contains a gift
                    </small>
                    </>
                )} 
                decimalScale={2}
                fixedDecimalScale={true}
                value={getCartTotal(cart)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal