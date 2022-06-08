import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

const arr = [
  { name: 'Соломон сет', descr: '1050 грамм, 30 кусочков', price: '1700' },
  { name: 'Цезарь сет', descr: '1050 грамм, 30 кусочков', price: '1800' },
  { name: 'Туду сет', descr: '1050 грамм, 30 кусочков', price: '1900' },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Все роллы</h1>
          <div className="search-block">
            <img src="img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap justify-between">
          {arr.map((obj) => (
            <Card {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
