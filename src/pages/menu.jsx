import React, { useState, useEffect, useRef } from 'react';
import '../css/index.css';
import '../css/menu.css';
import '../css/toolbar.css';
import logo from '../img/logo.png';
import pizza1 from '../image2/pizza1.png';
import slicepizza1 from '../image2/slicepizza1.png';
import slicepizza2 from '../image2/slicepizza2.png';
import slicepizza3 from '../image2/slicepizza3.png';
import PizzaSelector from '../components/pizzaselector';
import Toolbar from '../components/Toolbar';
import flame from '../img/flame.png';
import frameFooter from '../img/frame-footer.png';
import circle1 from '../img/circle1.svg';
import circle2 from '../img/circle2.svg';
import circle3 from '../img/circle3.svg';
import circle4 from '../img/circle4.svg';
import MovingText from '../components/movingtext';

function Menu() {
  const [isPizzaSelectorVisible, setIsPizzaSelectorVisible] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [cart, setCart] = useState([]);
  const [showDescription, setShowDescription] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const [sortedPizzas, setSortedPizzas] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredPizzas, setFilteredPizzas] = useState([]);
  const searchInputRef = useRef(null);

  const pizzas = [
    { title: "Цезарь", description: "Тесто, томатный соус, моцарелла, пепперони, масло, соль.", price: "30", img: slicepizza1 },
    { title: "Маргарита", description: "Тесто, томатный соус, моцарелла, базилик, масло, соль.", price: "20", img: slicepizza2 },
    { title: "Пепперони", description: "Тесто, соус, моцарелла, пепперони, масло, соль.", price: "35", img: slicepizza3 },
  ];

  const allPizzas = [...pizzas, ...pizzas, ...pizzas];

  useEffect(() => {
    setSortedPizzas(allPizzas);
    setFilteredPizzas(allPizzas);
  }, []);

  const validateSearch = (value) => {
    const trimmed = value.trim();
    const spacePattern = /^(?! )[^\s]*(\s[^\s]+)*$/;
    const maxLength = 30;

    if (!spacePattern.test(trimmed)) {
      alert('Ошибка: Вводите не более 1 пробела между словами');
      return false;
    }

    if (trimmed.length > maxLength) {
      alert('Ошибка: Не превышайте 30 символов.');
      return false;
    }

    return true;
  };

  const handleSearch = () => {
    const value = searchInputRef.current.value;
    if (!validateSearch(value)) return;

    const filter = value.trim().toLowerCase();
    const filtered = sortedPizzas.filter(pizza =>
      pizza.title.toLowerCase().includes(filter)
    );
    setFilteredPizzas(filtered);
  };

  const handleClear = () => {
    setSearchValue('');
    setFilteredPizzas(sortedPizzas);
  };

  const handleInputChange = (e) => {
    let value = e.target.value.replace(/[^а-яА-Яa-zA-ZёЁ\s]/g, '');

    if (value.startsWith(' ')) {
      value = value.trim();
      alert('Ошибка: Ввод не должен начинаться с пробела.');
    }

    if (value.length > 30) {
      value = value.slice(0, 30);
      alert('Ошибка: Длина ввода не должна превышать 30 символов.');
    }

    setSearchValue(value);
  };

  const handleAddToCart = (pizza, ingredients) => {
    setCart((prevCart) => [...prevCart, { pizza, ingredients }]);
    setIsPizzaSelectorVisible(false);
  };

  const handleShowPizzaSelector = (pizza) => {
    setSelectedPizza(pizza);
    setIsPizzaSelectorVisible(true);
  };

  const handleCloseModal = () => {
    setSelectedPizza(null);
    setIsPizzaSelectorVisible(false);
  };

  const handleToggleDescription = () => setShowDescription(prev => !prev);

  const handleToggleView = () =>
    setViewMode((prev) => (prev === 'grid' ? 'list' : 'grid'));

  const handleSort = (type) => {
    const sorted = [...sortedPizzas].sort((a, b) => {
      if (type === 'price') {
        return parseInt(a.price) - parseInt(b.price);
      } else if (type === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
    setSortedPizzas(sorted);
    setFilteredPizzas(sorted);
  };

  return (
    <div>
      <header>
        <div className="column-content">
          <div className="column column-left">
            <p className="text1">ПРИ ЗАКАЗЕ ДВУХ БОЛЬШИХ ПИЦЦ МАРГАРИТА БЕСПЛАТНО</p>
          </div>
          <div className="column column-right image-container">
            <img src={pizza1} alt="Пицца" />
          </div>
        </div>
      </header>
      <MovingText />
      <main>
        <section id="search">
        <div id="search-field" style={{ position: 'relative' }}>
  <input
    id="search-input"
    ref={searchInputRef}
    type="text"
    placeholder="Поиск по названию"
    value={searchValue}
    onChange={handleInputChange}
    style={{ paddingRight: '30px' }}
  />
  {searchValue && (
    <button
      onClick={handleClear}
      style={{
        position: 'absolute',
        right: '140px',
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: '25px',
        color: '#999',
        lineHeight: '1'
      }}
      aria-label="Очистить"
    >
      ×
    </button>
  )}
  <button id="search-button" className="buttonblock" onClick={handleSearch}>
    <span className="buttontext">Найти</span>
  </button>
</div>

        </section>

        <Toolbar
          showDescription={showDescription}
          viewMode={viewMode}
          onToggleDescription={handleToggleDescription}
          onToggleView={handleToggleView}
          onSort={handleSort}
        />

        <div className={`blocks-container ${viewMode}`}>
          {filteredPizzas.map((pizza, index) => (
            <div className="block" key={index}>
              <img className="imgpizza imageblock" src={pizza.img} alt={pizza.title} />
              <p className="textic textmain">{pizza.title}</p>
              {showDescription && <p className="textpost">{pizza.description}</p>}
              <div className="price-and-button-container">
                <p className="textic textprice">{pizza.price}р</p>
                <button
                  className="buttonblock"
                  onClick={() => handleShowPizzaSelector(pizza)}
                >
                  <span className="buttontext">Добавить</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {isPizzaSelectorVisible && selectedPizza && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <PizzaSelector
              pizza={selectedPizza}
              onAddToCart={handleAddToCart}
              onClose={handleCloseModal}
            />
          </div>
        </div>
      )}

      <footer>
        <div className="frame-footer">
          <img id="frame-in-footer" src={frameFooter} alt="Frame Footer" />
          <img id="logo-footer" src={logo} alt="Logo" />
          <img id="circle1" src={circle1} alt="Circle 1" />
          <img id="circle2" src={circle2} alt="Circle 2" />
          <img id="circle3" src={circle3} alt="Circle 3" />
          <img id="circle4" src={circle4} alt="Circle 4" />
        </div>
        <div className="bottom-line">
          <ul>
            <li><a href="https://license.gov.by/">PRIVACY</a></li>
            <li><a href="">FUOCO</a></li>
            <li><a href="https://www.instagram.com/mariia.tii/">INSTAGRAM</a></li>
          </ul>
        </div>
      </footer>

      <img id="flame" src={flame} alt="Flame" />
    </div>
  );
}

export default Menu;
