import React from 'react';
import '../css/index.css';
import logo from '../img/logo.png';
import logoNav from '../icons/logo-nav.svg';
import pizzaHeader1 from '../img/pizza-header-1.png';
import pizzaHeader2 from '../img/pizza-header-2.png';
import cockLeft from '../img/cock-left.svg';
import cockRight from '../img/cock-right.svg';
import framePizza from '../icons/frame-pizza.svg';
import pizzaInFrame1 from '../img/pizza-in-frame-1.png';
import pizzaInFrame2 from '../img/pizza-in-frame-2.png';
import pizzaInFrame3 from '../img/pizza-in-frame-3.png';
import frameHistory from '../img/frame-history.png';
import shrimpLeft from '../img/shrimp-left.svg';
import shrimpRight from '../img/shrimp-right.svg';
import pizzaBigImage from '../img/pizza-big-image.png';
import flame from '../img/flame.png';
import frameFooter from '../img/frame-footer.png';
import circle1 from '../img/circle1.svg';
import circle2 from '../img/circle2.svg';
import circle3 from '../img/circle3.svg';
import circle4 from '../img/circle4.svg';
import rotatePizzaGif from '../gif/rotate-pizza.gif';
import MovingText from '../components/movingtext';


function Home() {
  return (
    <div>
      <header>
        <div className="column-content">
          <div className="column column-left1">
            
            <img
              className="logo-image"
              src={logo}
              alt="Логотип"
            />
            
            <MovingText/>

            <div className="image-container">
              <img src={pizzaHeader1} alt="Пицца 1" />
            </div>
          </div>

          <div className="column">
            <div className="column-right1">
              <div className="text-container">
                <p>ПИЦЦА, СОЗДАННАЯ ПО НЕАПОЛИТАНСКИМ ТРАДИЦИЯМ</p>
              </div>
              <div className="image-container">
                <img src={pizzaHeader2} alt="Пицца 2" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="cock-container" className="text-container">
          <img src={cockLeft} alt="Cock Left" />
          <span id="text-cock">кусочек солнечной Италии в каждом укусе</span>
          <img src={cockRight} alt="Cock Right" />
        </section>

        <section id="frame-container">
          <div id="frames-for-pizza">
            {[{
              name: 'Пепперони',
              image: pizzaInFrame1,
            }, {
              name: 'Маргарита',
              image: pizzaInFrame2,
            }, {
              name: 'Цезарь',
              image: pizzaInFrame3,
            }].map((pizza, index) => (
              <div className="frame" key={index}>
                <img src={framePizza} alt="Pizza Frame" />
                <div className="content">
                  <span>{pizza.name}</span>
                  <img src={pizza.image} alt={`${pizza.name} Pizza`} className="pizza-image" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="image-container">
          <img src={pizzaBigImage} alt="Большая пицца" />
        </div>

        <div className="column-content">
          <div className="column column-left1">
            <span>История создания пиццы</span>
            <img src={rotatePizzaGif} alt="gif" />
          </div>
          <div className="column column-right1">
            <img src={frameHistory} alt="Frame History" />
            <img id="left-shrimp" src={shrimpLeft} alt="Shrimp" />
            <div className="text-overlay">
              <p>
                Ресторан специализируется на неаполитанской пицце, приготовленной в дровяной печи, изготовленной вручную в Неаполе мастером Стефано Феррара. Печь достигает температуры около 1000 градусов, что позволяет выпекать пиццу всего за 90 секунд, создавая воздушную и слегка обугленную корочку с дымным ароматом.
              </p>
              <p>
                Меню включает разнообразные пиццы, салаты, панини, кальцоне и десерты. Ресторан открыт ежедневно с 11:00 до окончания запаса теста.
              </p>
            </div>
            <img id="right-shrimp" src={shrimpRight} alt="Right Shrimp" />
          </div>
        </div>
      </main>

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

export default Home;
