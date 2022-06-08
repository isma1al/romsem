import React from 'react';
import styles from './Card.module.scss';
console.log(styles);
function Card({ name, price, descr }) {
  return (
    <div className={styles.card}>
      <img width={200} height={150} src="img/2.png" alt="roll" />
      <h3 className="card__title">Соломон сет</h3>
      <p className="card__descr">1050 грамм, 30 кусочков</p>
      <div className={styles.card__footer}>
        <p className={styles.card__price}>
          Цена: <span>{price} руб.</span>
        </p>
        <button onClick={() => alert(1)}>
          <img src="img/plus.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Card;
