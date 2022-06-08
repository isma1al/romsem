import React from 'react';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [rolls, setRolls] = React.useState([]);

  React.useEffect(() => {
    fetch('https://62a0d45da9866630f8190090.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => setRolls(json));
  }, []);

  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj]);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer cartItems={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Все роллы</h1>
          <div className="search-block">
            <img src="img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap justify-between align-start">
          {rolls.map((obj) => (
            <Card onPlus={(obj) => onAddToCart(obj)} {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
