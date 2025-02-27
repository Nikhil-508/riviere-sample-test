import React, { useState } from 'react'
import './HomeCategoryCard.css'
import { Assets } from '../Assets/Assets'

const HomeCategoryCard = () => {


  const [couponPurchase,setCouponPurchase] = useState(true);
  const [orderPlaced,setOrderPlaced] = useState(true);
  const [isLoggedIn,setIsLoggedIn] = useState(true);

    const categories = [
        { id: 1, name: 'coupon', image: Assets.coupon },
        { id: 2, name: 'Five Gallon Bottle',image:Assets.gallon },
        { id: 3, name: 'Accessories', image: Assets.dispencer },
        { id: 4, name: 'Small Bottles', image: Assets.bottle },
      ];


  return (
    <>

    {/* fot guest user */}


      <div className="category-wrap">
        <div className="category-container">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <img
                src={category.image}
                alt={category.name}
                className="category-image"
              />
              <p className="category-name">{category.name}</p>
            </div>
          ))}
        </div>
      </div>






{/* for logged in user */}

      <div className="category-wrap">
        {/*below section show only when the order palced */}
        <div className="category-heading">
          <span></span>
          <h1>Next Service Day</h1>
          <span></span>
        </div>
        <div className="order-placed-message">
          <img src={Assets.yellowsign} alt="" />
          <h1>Hi Nikhil B,</h1>
          <p>
            Your order successfully placed. Our sales representative will
            contact you soon. After the back end team verification, the delivery
            day & route as well as sales man contact details will be shown.
          </p>
        </div>
        <div className="category-container-top">
          {/* Conditionally render Refill Coupon container */}
          {couponPurchase && (
            <div
              className="refill-cpn-container"
              style={{
                backgroundImage: `url(${Assets.refillcpnBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h1>25</h1>
              <button>Refill Coupon</button>
            </div>
          )}
          <div className="two-card-container">
            <div className="category-card">
              <img
                src={Assets.coupon}
                alt="coupon"
                className="category-image"
              />
              <p className="category-name">Coupon</p>
            </div>

            <div className="category-card">
              <img
                src={Assets.gallon}
                alt="coupon"
                className="category-image"
              />
              <p className="category-name">Five gallon Bottle</p>
            </div>
          </div>
        </div>

        <div className="category-container-bottom">
          <div className="category-card">
            <img
              src={Assets.dispencer}
              alt="dispencer"
              className="category-image"
            />
            <p className="category-name">dispencer</p>
          </div>
          <div className="category-card">
            <img src={Assets.bottle} alt="bottle" className="category-image" />
            <p className="category-name">bottle</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCategoryCard
