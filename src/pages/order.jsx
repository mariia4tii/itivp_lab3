import React, { useEffect } from 'react';
import '../css/index.css';
import '../css/order.css';
import logo from '../img/logo.png';
import logoNav from '../icons/logo-nav.svg';
import flameIcon from '../icons/flame-in-circle.svg';
import frameFooter from '../img/frame-footer.png';
import circle1 from '../img/circle1.svg';
import circle2 from '../img/circle2.svg';
import circle3 from '../img/circle3.svg';
import circle4 from '../img/circle4.svg';
import flame from '../img/flame.png';

function Order() {
  useEffect(() => {
    const nameInput = document.getElementById("name");
    const numberInput = document.getElementById("number");
    const addressInput = document.getElementById("address");
    const submitButton = document.querySelector(".submit-button");
    const paymentOptions = document.querySelectorAll('input[name="payment-type"]');
    const paymentBlock = document.getElementById("payment");

    function showError(input, message) {
      let wrapper = input.nextElementSibling;
      if (!wrapper || !wrapper.classList.contains("error-wrapper")) {
        wrapper = document.createElement("div");
        wrapper.className = "error-wrapper";
        input.insertAdjacentElement("afterend", wrapper);
      }
      wrapper.textContent = message;
    }

    function removeError(input) {
      const wrapper = input.nextElementSibling;
      if (wrapper && wrapper.classList.contains("error-wrapper")) {
        wrapper.textContent = "";
      }
    }

    function validateName() {
      const value = nameInput.value.trimStart();
      nameInput.value = value;
      removeError(nameInput);
      if (!value) {
        showError(nameInput, "Поле имени обязательно для заполнения.");
        return false;
      }
      if (/^\s/.test(value)) {
        showError(nameInput, "Имя не должно начинаться с пробела.");
        return false;
      }
      if (/\d/.test(value)) {
        showError(nameInput, "Имя не должно содержать цифры.");
        return false;
      }
      if (value.length > 40) {
        nameInput.value = value.slice(0, 40);
        showError(nameInput, "Имя не должно превышать 40 символов.");
        return false;
      }
      return true;
    }

    function validateNumber() {
      let value = numberInput.value.replace(/[^0-9+]/g, "");
      removeError(numberInput);
      if (!value) {
        showError(numberInput, "Поле номера обязательно для заполнения.");
        return false;
      }
      if (value.startsWith("+")) {
        if (!value.startsWith("+375")) {
          value = "+375";
        }
        if (value.length > 13) value = value.slice(0, 13);
      } else if (value.startsWith("8")) {
        if (!value.startsWith("80")) {
          value = "80";
        }
        if (value.length > 11) value = value.slice(0, 11);
      } else {
        value = "";
      }
      numberInput.value = value;
      return true;
    }

    function validateAddress() {
      const value = addressInput.value.trimStart();
      addressInput.value = value;
      removeError(addressInput);
      if (!value) {
        showError(addressInput, "Поле адреса обязательно для заполнения.");
        return false;
      }
      if (/^\s/.test(value)) {
        showError(addressInput, "Адрес не должен начинаться с пробела.");
        return false;
      }
      if (value.length > 50) {
        addressInput.value = value.slice(0, 50);
        showError(addressInput, "Адрес не должен превышать 50 символов.");
        return false;
      }
      return true;
    }

    function validatePayment() {
      const selected = [...paymentOptions].some(option => option.checked);
      let error = paymentBlock.querySelector(".error-wrapper");
      if (!selected) {
        if (!error) {
          error = document.createElement("div");
          error.className = "error-wrapper";
          error.style.color = "red";
          error.style.fontSize = "0.9em";
          error.style.marginTop = "4px";
          error.textContent = "Выберите способ оплаты.";
          paymentBlock.appendChild(error);
        }
        return false;
      } else if (error) {
        error.remove();
      }
      return true;
    }

    nameInput.addEventListener("input", validateName);
    nameInput.addEventListener("keydown", e => {
      const isLetter = /^[a-zA-Zа-яА-ЯёЁ]$/.test(e.key);
      const allowed = ["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab"];
      if (!isLetter && !allowed.includes(e.key)) e.preventDefault();
    });

    numberInput.addEventListener("input", validateNumber);

    addressInput.addEventListener("input", validateAddress);
    addressInput.addEventListener("keydown", e => {
      const isAllowed = /^[a-zA-Zа-яА-ЯёЁ0-9.,\s]$/.test(e.key);
      const allowed = ["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab"];
      if (!isAllowed && !allowed.includes(e.key)) e.preventDefault();
    });

    submitButton.addEventListener("click", e => {
      e.preventDefault();
      const validName = validateName();
      const validNumber = validateNumber();
      const validAddress = validateAddress();
      const validPayment = validatePayment();
      if (validName && validNumber && validAddress && validPayment) {
        // Valid form, submit logic here
      }
    });
  }, []);

  return (
    <div>
      <main>
        <section>
          <div id="information-about-order">
            <div id="input-fields-block">
              <div id="header-name">
                <img src={flameIcon} alt="Flame Icon" />
                <span>Заказ на доставку</span>
                <img src={flameIcon} alt="Flame Icon" />
              </div>
              <div id="input-fields">
                <label htmlFor="name">Имя:</label>
                <input id="name" type="text" />
                <label htmlFor="number">Номер телефона:</label>
                <input id="number" type="text" />
                <label htmlFor="address">Адрес доставки:</label>
                <input id="address" type="text" />
              </div>
              <div id="payment">
                <span>Оплата</span>
                <label>
                  <input type="radio" name="payment-type" value="1" />
                  <span className="custom-radio"></span>
                  картой на сайте
                </label>
                <label>
                  <input type="radio" name="payment-type" value="2" />
                  <span className="custom-radio"></span>
                  картой при получении
                </label>
                <label>
                  <input type="radio" name="payment-type" value="3" />
                  <span className="custom-radio"></span>
                  наличными
                </label>
              </div>
            </div>
            <div className="final-order">
              <h2>СОСТАВ ЗАКАЗА</h2>
              <div id="inf-order-summary">
                <div className="item-order">
                  <div className="pizza-name">
                    <span>ПЕППЕРОНИ</span>
                    <span>30P</span>
                  </div>
                  <span>30cм, традиционное тесто 30, 640г</span>
                </div>
                <div className="item-order">
                  <div className="pizza-name">
                    <span>МАРГАРИТА</span>
                    <span>35P</span>
                  </div>
                  <span>30см, традиционное тесто 30, 640г</span>
                </div>
                <span className="line"></span>
                <div className="total">
                  <span>СУММА ЗАКАЗА</span>
                  <span>65P</span>
                </div>
              </div>
            </div>
          </div>
          <input className="submit-button" type="submit" value="Оформить заказ" />
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

export default Order;