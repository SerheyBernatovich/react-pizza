import React from 'react';
import { Link } from 'react-router-dom';
import cartEmptyImg from '../assets/img/empty-cart.png';

const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
      Cart empty <span>😕</span>
    </h2>
    <p>
      Найвірогідніше, вы не замовили ще піццу.
      <br />
      Для того, чтобы замовити піццу, перейдіть на головную сторінку.
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/" className="button button--black">
      <span>Повернутися назад</span>
    </Link>
  </div>
);

export default CartEmpty;
