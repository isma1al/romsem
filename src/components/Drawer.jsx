import React from 'react';

function Drawer({ onClose, cartItems, onRemoveItem }) {
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-20 d-flex justify-between align-center">
          Корзина
          <img onClick={onClose} className="removeBtn cu-p" src="img/remove-btn.svg" alt="roll" />
        </h2>
        <div className="items">
          {cartItems.map((obj) => (
            <div key={obj.id} className="cartItem mb-20 d-flex align-center justify-between">
              <div className="mr-20 d-flex">
                <img className="mr-15" width={70} height={70} src={obj.imageUrl} alt="roll" />
                <div>
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price} руб.</b>
                </div>
              </div>
              <img
                onClick={() => onRemoveItem(obj.id)}
                className="removeBtn"
                src="img/remove-btn.svg"
                alt="roll"
              />
            </div>
          ))}
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого</span>
              <div></div>
              <b>{totalPrice} руб.</b>
            </li>
          </ul>
          <button>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
