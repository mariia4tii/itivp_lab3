import React from 'react';
import { Link } from 'react-router-dom';
import '../css/index.css';
import '../css/contact.css';

// Импортируем изображения
import miniFlame from '../img/mini-flame.svg';
import logoNav from '../icons/logo-nav.svg';
import star from '../icons/star.svg';
import frameFooter from '../img/frame-footer.png';
import logoFooter from '../img/logo.png';
import circle1 from '../img/circle1.svg';
import circle2 from '../img/circle2.svg';
import circle3 from '../img/circle3.svg';
import circle4 from '../img/circle4.svg';
import flame from '../img/flame.png';
import MovingText from '../components/movingtext';

const Contact = () => {
  const contacts = [
    {
      name: 'Тц “Скала”',
      assessment: 4.79,
      address: 'ул. Петра Глебки, 5',
      delivery: 'Пн-вс: 11:00 - 02:00',
      restaurant: 'Пн-вс: 10:00-22:00',
    },
    {
      name: 'Алми',
      assessment: 4.65,
      address: 'ул. Притыцкого, 93',
      delivery: 'Пн-вс: 11:00 - 02:00',
      restaurant: 'Пн-вс: 10:00-23:00',
    },
    {
      name: 'Рига',
      assessment: 4.67,
      address: 'ул. Сурганова, 50к1',
      delivery: 'Пн-вс: 11:00 - 02:00',
      restaurant: 'Пн-вс: 10:00-23:00',
    },
    {
      name: 'Немига',
      assessment: 4.79,
      address: 'ул. Романовская Слобода, 8',
      delivery: 'Пн-вс: 11:00 - 02:00',
      restaurant: 'Пн-вс: 10:00-23:00',
    },
  ];

  return (
    <div>
      {/* Header */}
      <header>
        <section id="cock-container" className="text-container">
          <img src={miniFlame} alt="Мини пламя" />
          <span id="text-contact">Контакты</span>
          <img src={miniFlame} alt="Мини пламя" />
        </section>
      </header>

      {/* Running line */}
      <MovingText/>

      {/* Контакты */}
      <section id="contacts">
        {contacts.map((contact, index) => (
          <div className="contact" key={index}>
            <span className="name-center"><b>{contact.name} | </b></span>
            <span className="assessment">{contact.assessment} <img src={star} alt="Звезда" /></span>
            <p>{contact.address}</p>
            <div>
              <p>доставка:</p>
              <p>{contact.delivery}</p>
            </div>
            <div>
              <p>Ресторан и самовывоз:</p>
              <p>{contact.restaurant}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Контактная информация */}
      <section id="telephone-email">
        <div>
          <p>телефон:</p>
          <p>+375447391615</p>
        </div>
        <div>
          <p>Вопросы, отзывы и предложения:</p>
          <p>feedback@fuoco.by</p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="frame-footer">
          <img id="frame-in-footer" src={frameFooter} alt="Рамка в подвале" />
          <img id="logo-footer" src={logoFooter} alt="Логотип" />
          <img id="circle1" src={circle1} alt="Круг 1" />
          <img id="circle2" src={circle2} alt="Круг 2" />
          <img id="circle3" src={circle3} alt="Круг 3" />
          <img id="circle4" src={circle4} alt="Круг 4" />
        </div>
        <div className="bottom-line">
          <ul>
            <li><a href="https://license.gov.by/">PRIVACY</a></li>
            <li><Link to="/">FUOCO</Link></li>
            <li><a href="https://www.instagram.com/mariia.tii/">INSTAGRAM</a></li>
          </ul>
        </div>
      </footer>

      <img id="flame" src={flame} alt="Пламя" />
    </div>
  );
};

export default Contact;
