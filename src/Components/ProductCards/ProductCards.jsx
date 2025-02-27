import React from 'react';
import './ProductCards.css';
import { Assets } from '../Assets/Assets';

const productData = [
  {
    image: Assets.big_dispencer,
    title: "Hot & Cool Dispenser",
    discountedPrice: 365,
    originalPrice: 400,
    discount: "8.75%",
  },
  {
    image: Assets.single5litre,
    title: "5 Litre Water Bottle",
    discountedPrice: 20,
    originalPrice: 25,
    discount: "20%",
  },
  {
    image: Assets.singleTissue,
    title: "Single Tissue Pack",
    discountedPrice: 10,
    originalPrice: 15,
    discount: "33.33%",
  },
  {
    image: Assets.packtissue,
    title: "Pack of Tissues",
    discountedPrice: 45,
    originalPrice: 50,
    discount: "10%",
  },
  {
    image: Assets.water_pump,
    title: "Automatic Water Pump",
    discountedPrice: 80,
    originalPrice: 100,
    discount: "20%",
  },
  {
    image: Assets.singleCan,
    title: "Single Water Can",
    discountedPrice: 12,
    originalPrice: 15,
    discount: "20%",
  },
  {
    image: Assets.mini_dispencer,
    title: "Mini Water Dispenser",
    discountedPrice: 250,
    originalPrice: 300,
    discount: "16.67%",
  },
];

const ProductCards = () => {

  return (
    
    <div className="product-list">
      {productData.map((product, index) => (
        <div className="product-wrap" key={index}>
          <div className="product-img">
            <img src={product.image} alt={product.title} />
            <img className="product-offer" src={Assets.offerGif} alt="Offer" />
          </div>
          <div className="title-section">
            <h1>{product.title}</h1>
            <div className="price-section">
              <h1>{product.discountedPrice} AED</h1>
              <h2 className="strikethrough">{product.originalPrice} AED</h2>
              <h3>{product.discount} off</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
