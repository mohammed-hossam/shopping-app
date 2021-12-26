import React from 'react';
import Cart from '../../components/cart/Cart';
import BookMark from '../../components/bookMark/BookMark';
import './iconsContainer.scss';

function IconsContainer() {
  return (
    <div className="iconContainer">
      <BookMark />
      <Cart />
    </div>
  );
}

export default IconsContainer;
