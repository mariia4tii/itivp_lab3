import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import logoNav from '../icons/logo-nav.svg';
import '../css/index.css';

const Navbar = () => {
  const burgerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const burger = burgerRef.current;
    const menu = menuRef.current;

    const handleClick = () => {
      const isOpen = menu.style.display === 'block';
      menu.style.display = isOpen ? 'none' : 'block';
      burger.classList.toggle('open', !isOpen);
    };

    burger.addEventListener('click', handleClick);

    return () => {
      burger.removeEventListener('click', handleClick); // очистка при размонтировании
    };
  }, []);

  return (
    <nav>
      <div>
        <Link to="/" className="invisible-link">
          <img className="logo-nav1" src={logo} alt="Logo" />
          <img className="logo-nav2" src={logoNav} alt="Logonav" />
        </Link>
      </div>

      <div className="burger" id="burger" ref={burgerRef}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div id="menu" ref={menuRef}>
        <div className="menu-item"><Link to="/menu">Меню</Link></div>
        <div className="menu-item"><Link to="/contact">Контакты</Link></div>
        <div className="menu-item"><Link to="/special_offers">Спецпредложения</Link></div>
        <div className="order-burger"><Link to="/order">Заказать</Link></div>
      </div>

      <Link className="desctop-order" to="/order">Заказать</Link>
    </nav>
  );
};

export default Navbar;
