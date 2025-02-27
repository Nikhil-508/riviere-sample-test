import React from 'react'
import './SubscriptionSuccess.css'
import { Assets } from '../../Components/Assets/Assets'

const SubscriptionSuccess = () => {
  return (
    <div className='subscribe-container'>
      <div className='sub-image-wrap'>
        <img src={Assets.subscription_success} alt="" />
      </div>
      <div className='sub-text-wrap'>
        <h2>Subscription Request Pending</h2>
        <p>Your Subscription request has been successfully completed.  Our sales representative will contact you soon.   After the back end team verification, the  delivery day & route as well as sales man  contact details will be shown.</p>
      </div>
    </div>
  )
}

export default SubscriptionSuccess
