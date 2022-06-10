import React from 'react';

function Header({ onClickCart, onClickClose, cartItems }) {
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
  return (
    <header className="header d-flex justify-between align-center">
      <div className="logo">
        <img src="img/logo.svg" alt="logo" />
      </div>
      <ul className="d-flex align-center">
        <li onClick={onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="img/cart.svg" alt="cart" />{' '}
          <span>{totalPrice} руб.</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
