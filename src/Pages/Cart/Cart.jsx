import React, { useState } from 'react'
import { BottomNav } from '../../Components/BottomNav/BottomNav';
import { Assets } from '../../Components/Assets/Assets';
import './Cart.css'


const Cart = () => {

        const [currentScreen, setCurrentScreen] = useState("Cart");
        const [isMobile, setIsMobile] = useState(window.innerWidth <= 870);
        const [emptyCart, setEmptyCart] = useState(false);

  return (
    <div className="cart-container">
      <div className="cart-head">
        <h1>My Cart</h1>
      </div>
      {emptyCart && (
        <>
      <div className="cart-items">
        <img src={Assets.cartIcon} alt="" />
        <h1>Your Cart Is Empty</h1>
        <p>Looks like you haven't added any products to your cart yet.</p>
        <button>Add Products</button>
      </div>
      </>
      )}
      <>
      <div className='cart-items-wrap'>
        <div className='address-section'>
          <div className='address-left'>
          
          <h3><img src={Assets.locationIcon} alt="" />Delivery to</h3>
          <h1>Shabiya</h1>
          <p>Mohamed Bin Zayed City,62968,Shabiya, 26, Abu dhabi </p>
          </div>
          <div className='edit-icon'>
            <h1><img src={Assets.editIcon} alt="" />Edit</h1>
          </div>
        </div>
      </div>

      </>

      {isMobile && (
        <BottomNav
          currentScreen={currentScreen}
          setCurrentScreen={setCurrentScreen}
        />
      )}
    </div>
  );
}

export default Cart
