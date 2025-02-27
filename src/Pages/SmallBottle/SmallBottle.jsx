import React, { useState } from 'react'
import './SmallBottle.css'
import { Assets } from '../../Components/Assets/Assets';

const SmallBottle = () => {


    const [addedToCart, setAddedToCart] = useState({}); 

    const accessoriesData = [
        {
          image: `${Assets.single5litre}`,
          name: "Riviere 1.5 Ltr x 12 Psc",
          price: 30,
          price_org: 35,
          price_off: 16,
        },
        {
          image: `${Assets.single5litre}`,
          name: "Riviere Cup 200 ml",
          price: 15,
          price_org: 20,
          price_off: 20,
        },
        {
          image: `${Assets.single5litre}`,
          name: "Riviere 330 ml",
          price: 350,
          price_org: 380,
          price_off: 25,
        },
        {
          image: `${Assets.single5litre}`,
          name: "Riviere 500 ml",
          sub_text: "Tissue 1*5 150 double ply",
          price: 9,
          price_org: 11,
          price_off: 16,
        }

      ];


      const toggleCart = (index) => {
        setAddedToCart((prev) => ({
          ...prev,
          [index]: !prev[index], // Toggle state only for the clicked item
        }));
      };



  return (
    <div className='smallBottle-container'>
      <div className="smallBottle-head">
        <img src={Assets.backArrow} alt="" />
        <h1>Small Bottles</h1>
      </div>
      <div className="smallBottle-banner">
        <button>Order Now</button>
        <img src={Assets.smallBotlleBanner} alt="" />
      </div>


      <div className="accessories-container">
        {accessoriesData.map((item,index) => {
          return (
            <div key={item.name} className="accessories-card">
              <img className="product" src={item.image} alt="small-bottle" />
              <div>
                <h1>{item.name}</h1>
                {item.sub_text && <p>{item.sub_text}</p>}
                <div className="card-price-section">
                  <p className="price">{item.price} AED</p>
                  <p className="price-org">
                    <del>{item.price_org} AED</del>
                  </p>
                  <p className="price-off">{item.price_off}% off</p>
                </div>
                <button className="buy-now-btn">Buy Now</button>
              </div>
              <div className="add-to-cart">
                <img
                  onClick={() => toggleCart(index)}
                  src={addedToCart[index] ? Assets.shoppingCartSuccess : Assets.shoppingCart}
                  alt="shopping-cart"
                />
              </div>
            </div>
          );
        })}
      </div>


    </div>
  );
}

export default SmallBottle
