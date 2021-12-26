import React from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import './cart.scss';
function Cart() {
  return (
    <div className="cart">
      <div className="icon">
        <MdOutlineShoppingCart />
      </div>
    </div>
  );
}

export default Cart;
