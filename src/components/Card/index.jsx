import React from 'react';
import styles from './Card.module.scss';

function Card({ id, title, price, imageUrl, onPlus }) {
  // const [isAdded, setIsAdded] = React.useState();

  function onClickPlus() {
    onPlus({ id, title, price, imageUrl });
    // setIsAdded(!isAdded);
  }

  return (
    <div className={styles.card}>
      <img width={200} height={150} src={imageUrl} alt="roll" />
      <h3 className="card__title">{title}</h3>
      <p className="card__descr">1050 грамм, 30 кусочков</p>
      <div className={styles.card__footer}>
        <p className={styles.card__price}>
          Цена: <span>{price} руб.</span>
        </p>
        <button onClick={onClickPlus} className={styles.button}>
          +
        </button>
        {/* <img  className={styles.button} src={'img/btn-plus.svg'} alt="plus" /> */}
      </div>
    </div>
  );
}

export default Card;
