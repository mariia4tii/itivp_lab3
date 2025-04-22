import React, { useState } from 'react';
import '../css/toolbar.css';
import { FaCog } from 'react-icons/fa'; // Для иконки настроек

const Toolbar = ({ showDescription, viewMode, onToggleDescription, onToggleView, onSort }) => {
  const [isVisible, setIsVisible] = useState(false); // Стейт для видимости панели

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="toolbar-container">
     <button className="settings-icon" onClick={toggleVisibility}></button>

      {isVisible && (
        <div className="toolbar">  
       
          <label>
            <input
              type="checkbox"
              checked={showDescription}
              onChange={onToggleDescription}
            />
            Показывать описание
          </label>

          <button onClick={() => onSort('price')}>
            Сортировать по цене
          </button>

          <button onClick={() => onSort('title')}>
            Сортировать по названию
          </button>
        </div>
      )}
    </div>
  );
};

export default Toolbar;
