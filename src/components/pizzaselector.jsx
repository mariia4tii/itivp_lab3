import React, { useState } from 'react';
import '../css/pizzaselector.css';

const PizzaSelector = ({ pizza, onAddToCart, onClose }) => {
  const [selectedIngredients, setSelectedIngredients] = useState({
    cheese: false,
    mushrooms: false,
    olives: false,
    pepperoni: false,
  });

  const handleIngredientChange = (ingredient) => {
    setSelectedIngredients((prevState) => ({
      ...prevState,
      [ingredient]: !prevState[ingredient],
    }));
  };

  const handleAddToCart = () => {
    onAddToCart(pizza, selectedIngredients);
    onClose(); // Закрыть модалку после добавления
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <div  className="textp">
        <p >Выберите ингредиенты для пиццы: {pizza.title}</p>
        </div>
        <img src={pizza.img} alt={pizza.title} className="pizza-image" />
        <div className="ingredients">
          {[
            ['cheese', 'Сыр'],
            ['mushrooms', 'Грибы'],
            ['olives', 'Оливки'],
            ['pepperoni', 'Пепперони'],
          ].map(([key, label]) => (
            <label key={key} style={{ display: 'block', margin: '8px 0' }}>
              <input
                type="checkbox"
                checked={selectedIngredients[key]}
                onChange={() => handleIngredientChange(key)}
              />
              {label}
            </label>
          ))}
        </div>
        <button className="add-btn" onClick={handleAddToCart}>Добавить в корзину</button>
      </div>
    </div>
  );
};

export default PizzaSelector;
