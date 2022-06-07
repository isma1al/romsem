function App() {
  return (
    <div className="wrapper clear">
      <header className="header d-flex justify-between align-center">
        <div className="logo">
          <img src="img/logo.svg" alt="" />
        </div>
        <ul className="d-flex align-center">
          <li className="mr-30">
            <img width={18} height={18} src="img/cart.svg" alt="" /> <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="img/user.svg" alt="" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1 className="mb-40">Все роллы</h1>
        <div className="d-flex flex-wrap justify-between">
          <div className="card">
            <img width={200} height={150} src="img/1.png" alt="" />
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

          <div className="card">
            <img width={200} height={150} src="img/2.png" alt="" />
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

          <div className="card">
            <img width={200} height={150} src="img/3.png" alt="" />
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

          <div className="card">
            <img width={200} height={150} src="img/4.png" alt="" />
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
        </div>
      </div>
    </div>
  );
}

export default App;
