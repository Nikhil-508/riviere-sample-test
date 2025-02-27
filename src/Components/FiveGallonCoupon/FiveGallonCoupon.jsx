import React, { useState } from 'react'
import './FiveGallonCoupon.css'
import { Assets } from '../Assets/Assets';

const FiveGallonCoupon = () => {


    const [count,setCount] = useState(0)

    const handleCount = (prop) => {
        if(prop === "decrement"){
            if(count <= 0) return
            setCount((prev) => prev - 1)

        }
        if(prop === "increment") {
            setCount((prev) => prev + 1)

        }

    }





  return (
    <div className='fiveGallon-container'>
      <div className="fiveGallon-head">
        <img src={Assets.backArrow} alt="" />
        <h1>Coupons</h1>
      </div>
      <div className='fiveGallon-data'>
        <div className='fiveGallon-banner-wrap'>
            <img src={Assets.couponGallon} alt="" />
            <img className='coupon-offer-gif' src={Assets.offerGif} alt="" />
            <h1>365 AED</h1>
        </div>
        <div className='fiveGallon-price-wrap'>
            <div className='coupon-price-data'>
                <h1>365 AED</h1>
                <span>Buy 56 Bottle 365 AED</span>
                <h2>Add-Ons</h2>
                <h3>8 FIVE GALLON + DISPENSER FREE</h3>
            </div>
            <div className='coupon-quantity'>
                <h2>Quantity</h2>
                <button onClick={() => handleCount("decrement")}>-</button>
                <h3>{count}</h3>
                <button onClick={() => handleCount("increment")}>+</button>
            </div>
        </div>
            <div className='coupon-para'>
                <p>The perfect combination of a durable, reusable five-gallon water bottle and a sleek, compact mini water dispenser, designed to provide a convenient, eco-friendly, and space-saving solution for accessing fresh, clean drinking water, whether at home, in the office, or on the go.</p>
            </div>
            <div className='coupon-details'>
                <ul>
                    <li>Unique Quality Of Minerals</li>
                    <li>BPA Free Bottles</li>
                    <li>Low Sodium</li>
                    <li>BPA Free Bottles</li>
                    <li>Free Home Delivery</li>
                </ul>
            </div>

      </div>
    </div>
  );
}

export default FiveGallonCoupon
