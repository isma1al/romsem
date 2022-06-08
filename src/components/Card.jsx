import React from 'react';

function Card() {
  return (
    <div className="card">
      <img width={200} height={150} src="img/2.png" alt="roll" />
      <h3 className="card__title">Соломон сет</h3>
      <p className="card__descr">1050 грамм, 30 кусочков</p>
      <div className="card__footer d-flex justify-between align-center">
        <p className="card__price">
          Цена: <span>1700 руб.</span>
        </p>
        <button>
          <img src="img/plus.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Card;
