import React from 'react';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';
import axios from 'axios';

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [rolls, setRolls] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get('https://62a0d45da9866630f8190090.mockapi.io/cart');
      const itemsResponse = await axios.get('https://62a0d45da9866630f8190090.mockapi.io/items');
      setCartItems(cartResponse.data);
      setRolls(itemsResponse.data);
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://62a0d45da9866630f8190090.mockapi.io/cart/${obj.id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
    } else {
      axios.post('https://62a0d45da9866630f8190090.mockapi.io/cart', obj);
      setCartItems((prev) => [...prev, obj]);
    }
    // try {

    // } catch {}
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://62a0d45da9866630f8190090.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          cartItems={cartItems}
          onClose={() => setCartOpened(false)}
          onRemoveItem={onRemoveItem}
        />
      )}
      <Header cartItems={cartItems} onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="content__inner d-flex align-center justify-between mb-40">
          <h1 className="mr-10">{searchValue ? `Поиск по: ${searchValue}` : 'Все роллы'}</h1>
          <div className="search-block mr-30">
            <img src="img/search.svg" alt="search" />
            <input
              value={searchValue}
              onChange={onChangeSearchInput}
              type="text"
              placeholder="Поиск..."
            />
          </div>
        </div>

        <div className="rolls__inner d-flex flex-wrap  align-start">
          {rolls
            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item) => (
              <Card key={item.title} onPlus={(obj) => onAddToCart(obj)} {...item} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
