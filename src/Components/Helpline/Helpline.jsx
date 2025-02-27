import React from 'react'
import './Helpline.css'
import { Assets } from '../Assets/Assets';

const Helpline = () => {
  return (
    <div 
    className="help-wrap"
    style={{
      backgroundImage: `url(${Assets.helplineBg})`, // ✅ Correct syntax
      backgroundSize: "cover", // Ensures the background covers the div
      backgroundPosition: "center", // Centers the background image
      backgroundRepeat: "no-repeat" // Prevents repetition
    }}
  >
  
      <div className="help-heading">
        <span></span>
        <h1>Helpline</h1>
        <span></span>
      </div>
      <img className='help-img' src={Assets.helplineLadyImg} alt="" />
      <div className='text-section'>
        <h1><img src={Assets.headmic} alt="" />Customer Support</h1>
        <p>If you can't find the information you're looking for, our customer support team is here to help.</p>
        <div className='bttn-container'>
            <button className='chat-bttn'>Chat With Us</button>
            <button className='call-bttn'>Call Now</button>

        </div>

      </div>

    </div>
  );
}

export default Helpline
