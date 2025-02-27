import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Home from '../Home/Home';
import Subscription from '../Subscription/Subscription';
import Coupon from '../Coupon/Coupon';
import Cart from '../Cart/Cart';
import Profile from '../Profile/Profile';
import { BottomNav } from '../../Components/BottomNav/BottomNav';

const BottomNavFixed = () => {

    const location = useLocation();
    const [currentScreen, setCurrentScreen] = useState("Home");

    const renderScreen = () => {

        switch (currentScreen) {
          case "Home":
            return <Home/>;
          case "Subscitption":
            return <Subscription/>;
          case "Coupon":
            return <Coupon/>;
          case "Cart":
            return <Cart/>;
          case "Profile":
            return <Profile/>;
          default:
            return <Home />;
        }
      };

      const [isMobile, setIsMobile] = useState(window.innerWidth <= 870);




  return (
    <>
      {renderScreen()}
      {isMobile && (
        <BottomNav
          currentScreen={currentScreen}
          setCurrentScreen={setCurrentScreen}
        />
      )}
    </>
  );
}

export default BottomNavFixed
