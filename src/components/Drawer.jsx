import React from 'react';

function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2 className="mb-20 d-flex justify-between align-center">
          Корзина
          <img className="removeBtn cu-p" src="img/remove-btn.svg" alt="roll" />
        </h2>
        <div className="items">
          <div className="mb-20 cartItem d-flex align-center justify-between">
            <div className="mr-20 d-flex">
              <img className="mr-15" width={70} height={70} src="img/1.png" alt="roll" />
              <div>
                <p className="mb-5">Соломон сет</p>
                <b>1700 руб.</b>
              </div>
            </div>
            <img className="removeBtn" src="img/remove-btn.svg" alt="roll" />
          </div>

          <div className="mb-20 cartItem d-flex align-center justify-between">
            <div className="mr-20 d-flex">
              <img className="mr-15" width={70} height={70} src="img/1.png" alt="roll" />
              <div>
                <p className="mb-5">Соломон сет</p>
                <b>1700 руб.</b>
              </div>
            </div>
            <img className="removeBtn" src="img/remove-btn.svg" alt="roll" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого</span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
