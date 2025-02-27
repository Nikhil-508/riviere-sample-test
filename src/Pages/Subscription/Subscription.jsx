import React, { useState } from 'react'
import { BottomNav } from '../../Components/BottomNav/BottomNav';

const Subscription = () => {

    const [currentScreen, setCurrentScreen] = useState("Subscription");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 870);


  return (
    <div>
      subscription
      {isMobile && (
        <BottomNav
          currentScreen={currentScreen}
          setCurrentScreen={setCurrentScreen}
        />
      )}
    </div>
  )
}

export default Subscription
