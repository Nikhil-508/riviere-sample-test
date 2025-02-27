import React from 'react'
import './SingleCoupon.css'
import SimilarCoupon from '../../Components/SimilarCoupon/SimilarCoupon'
import FiveGallonCoupon from '../../Components/fiveGallonCoupon/fiveGallonCoupon'


const SingleCoupon = () => {
  return (
    <div>
      <FiveGallonCoupon />
      <SimilarCoupon />
    </div>
  );
}

export default SingleCoupon
