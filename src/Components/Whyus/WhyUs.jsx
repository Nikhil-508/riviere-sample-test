import React from 'react'
import './WhyUs.css'
import { Assets } from '../Assets/Assets'

const WhyUs = () => {
  return (
    <div className="why-wrap">
      <div className="why-heading">
        <span></span>
        <h1>Why Us?</h1>
        <span></span>
      </div>
      <div className="whyImg-cards">
        <img src={Assets.whyusimg1} alt="Why Us 1" />
        <img src={Assets.whyusimg2} alt="Why Us 2" />
        <img src={Assets.whyusimg3} alt="Why Us 3" />
        <img src={Assets.whyusimg4} alt="Why Us 4" />
      </div>
    </div>
  )
}

export default WhyUs
