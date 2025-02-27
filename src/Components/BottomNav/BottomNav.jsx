import React from 'react'
import './BottomNav.css'
import { Link } from 'react-router-dom';
import { Assets } from '../Assets/Assets';

export const BottomNav = ({setCurrentScreen,currentScreen}) => {

    const handleNavClick = (screen) => {
        setCurrentScreen("Home");
        // console.log("screeeeeeeenn",screen);
        
      };



  return (


    <div className="bottom-nav">
    <ul className="nav-bar">
      <li>
        <Link
          to="/home"
          className={`link ${currentScreen === "Home" ? "active" : ""}`}
        >
          <img
            src={currentScreen === "Home" ? Assets.ActiveHome : Assets.Home}
            alt="Home"
          />
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/subscription"
          className={`link ${currentScreen === "Subscription" ? "active" : ""}`}
        >
          <img
            src={
              currentScreen === "Subscription" ? Assets.activeSub : Assets.Sub}
            alt="Subscription"
          />
          Subscription
        </Link>
      </li>
      <li>
        <Link
          to="/coupon"
          className={`link ${currentScreen === "Coupon" ? "active" : ""}`}
        >
          <img
            src={currentScreen === "Coupon" ? Assets.ActiveCoupon : Assets.Coupon}
            alt="Coupon"
          />
          Coupon
        </Link>
      </li>
      <li>
        <Link
          to="/cart"
          className={`link ${currentScreen === "Cart" ? "active" : ""}`}
        >
          <img
            src={currentScreen === "Cart" ? Assets.ActiveCart : Assets.Cart}
            alt="Cart"
          />
          Cart
        </Link>
      </li>
      <li>
        <Link
          to="/profile"
          className={`link ${
            currentScreen === "Profile" ? "active" : ""
          }`}
        >
          <img
            src={
              currentScreen === "Profile" ? Assets.ActiveProfile: Assets.Profile}
            alt="Profile"
          />
          Profile
        </Link>
      </li>
    </ul>
    </div>
  );
};
