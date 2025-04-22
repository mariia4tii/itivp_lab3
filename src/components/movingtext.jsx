import React from 'react';
import '../css/MovingText.css'; // Стили вынеси в отдельный файл
import logoNav from '../icons/logo-nav.svg';

const MovingText = () => {
  const items = Array.from({ length: 8 }); // Больше повторов для плавности

  return (
    <div className="moving-text-container">
      <div className="moving-track">
        {items.map((_, index) => (
          <div className="moving-content" key={index}>
            <span>Neapolitan pizza</span>
            <img src={logoNav} alt="Logo" className="moving-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingText;
