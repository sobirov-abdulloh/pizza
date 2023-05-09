import React from "react";
import "./ForYou.css";

const ForYou = () => {
  return (
    <div className="container__You">
      <div className="box__You">
        <h1>О вас</h1>
        <div className="input__Info">
          <div className="input">
            <label htmlFor="name">Имя*</label>
            <input type="text" name="name" placeholder="Алексей" />
          </div>
          <div className="input">
            <label htmlFor="phone">Номер телефона*</label>
            <input type="text" name="phone" placeholder="+7" />
          </div>
          <div className="input">
            <label htmlFor="name">Почта</label>
            <input type="text" name="name" placeholder="mail@gmail.com" />
          </div>
        </div>
        <div className="for__Line"></div>
        <div className="delivery">
          <div className="deliver__Button">
            <h3>Доставка</h3>
            <div className="button__Del">
              <button>Доставка</button>
              <button>Самовывоз</button>
            </div>
          </div>
            <div className="street">
              <label htmlFor="street">Улица*</label>
              <input ClassName="street" type="text" placeholder="Пушкина" />
            </div>
          <div className="starts">
            <div className="address__Box">
              <label htmlFor="home">Дом</label>
              <input name="home" type="text" placeholder="1а" />
            </div>
            <div className="address__Box">
              <label htmlFor="entrance">Подъезд</label>
              <input name="entrance" type="text" placeholder="2" />
            </div>
            <div className="address__Box">
              <label htmlFor="floor">Этаж</label>
              <input name="floor" type="text" placeholder="3" />
            </div>
            <div className="address__Box">
              <label htmlFor="apartment">Квартира</label>
              <input name="apartment" type="text" placeholder="4" />
            </div>
            <div className="address__Box">
              <label htmlFor="intercom">Домофон</label>
              <input name="intercom" type="text" placeholder="0000" />
            </div>
          </div>
        </div>
        <div className="time__Deliver">
          <label htmlFor="time">Когда выполнить заказ?</label>
          <div className="radio_Box">
            <div className="radio_Input">
              <input name="contact" value="fast" type="radio" />
              <span>Как можно скорее</span>
            </div>
            <div className="radio_Input">
              <input name="contact" value="time" type="radio" />
              <span>По времени</span>
            </div>
          </div>
        </div>
        <div className="for__Line"></div>
        <div className="pay__Container">
          <h3>Оплата</h3>
          <div className="radio_Box">
            <div className="radio_Input">
              <input name="money" value="cash" type="radio" />
              <span>Наличными</span>
            </div>
            <div className="radio_Input">
              <input name="money" value="card" type="radio" />
              <span>Картой</span>
            </div>
            <div className="radio_Input">
              <input name="money" value="apple" type="radio" />
              <span>Apple Pay</span>
            </div>
          </div>
        </div>
        <div className="for__Line"></div>
        <div className="surrender">
          <h3>Сдача</h3>
          <div className="radio_Boxes">
            <div className="radio_Input">
              <input type="radio" />
              <span>Без сдачи</span>
            </div>
            <div className="radio_Input">
              <input type="radio" />
              <span>Сдача с</span>
            </div>
            <input className="count" type="text" placeholder="0" />
          </div>
        </div>
        <div className="for__Line"></div>
        <div className="comments">
          <h3>Комментарий</h3>
          <textarea placeholder="Есть уточнения?" />
        </div>
        <div className="for__Line"></div>
        <div className="total__Button">
          <p>Итого: 2 379 ₽</p>
          <button>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};

export default ForYou;
