import React from 'react';
import styles from './Card.module.scss';

function Card({ title, price, imageUrl, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  function onClickPlus() {
    onPlus({ title, price, imageUrl });
    setIsAdded(!isAdded);
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

        <img
          onClick={onClickPlus}
          className={styles.button}
          src={isAdded ? 'img/btn-checked.svg' : 'img/btn-plus.svg'}
          alt="plus"
        />
      </div>
    </div>
  );
}

export default Card;
