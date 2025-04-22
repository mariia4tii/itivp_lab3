import React from 'react';
import '../css/index.css'; // Импортируйте ваши стили
import '../css/special_offers.css';
import logo from './../img/logo.png';
import logoNav from './../icons/logo-nav.svg';
import miniFlame from './../img/mini-flame.svg';
import pizzaTriangle1 from './../img/pizza-triangle1.png';
import pizzaTriangle2 from './../img/pizza-triangle2.png';
import pizzaTriangle3 from './../img/pizza-triangle3.png';
import frameFooter from './../img/frame-footer.png';
import circle1 from './../img/circle1.svg';
import circle2 from './../img/circle2.svg';
import circle3 from './../img/circle3.svg';
import circle4 from './../img/circle4.svg';
import flame from './../img/flame.png';
import MovingText from '../components/movingtext';
function Specialoffers() {
  return (
    <div>
      <header>
        <section id="cock-container" className="text-container">
          <img src={miniFlame} alt="Mini Flame" />
          <span id="text-special-offers">Специальные предложения</span>
          <img src={miniFlame} alt="Mini Flame" />
        </section>
      </header>

      <main>
      <MovingText/>

        <section id="offers">
          <div className="offer">
            <img src={pizzaTriangle1} alt="Triangle" />
            <span>Скидка в день рождения</span>
            <p>Именинникам скидка 20% на весь счет + комплимент от шефа</p>
          </div>
          <div className="offer">
            <img src={pizzaTriangle2} alt="Triangle" />
            <span>Доставка со скидкой</span>
            <p>При первом заказе доставки скидка 15% на всю корзину</p>
          </div>
          <div className="offer">
            <img src={pizzaTriangle3} alt="Triangle" />
            <span>Счастливые Часы</span>
            <p>С 17:00 до 19:00 второй бокал вина или коктейль в подарок к любой пицце</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="frame-footer">
          <img id="frame-in-footer" src={frameFooter} alt="Frame" />
          <img id="logo-footer" src={logo} alt="Logo" />
          <img id="circle1" src={circle1} alt="Circle 1" />
          <img id="circle2" src={circle2} alt="Circle 2" />
          <img id="circle3" src={circle3} alt="Circle 3" />
          <img id="circle4" src={circle4} alt="Circle 4" />
        </div>
        <div className="bottom-line">
          <ul>
            <li><a href="https://license.gov.by/">PRIVACY</a></li>
            <li><a href="../index.html">FUOCO</a></li>
            <li><a href="https://www.instagram.com/mariia.tii/">INSTAGRAM</a></li>
          </ul>
        </div>
      </footer>
      <img id="flame" src={flame} alt="Flame" />
    </div>
  );
}

export default Specialoffers;