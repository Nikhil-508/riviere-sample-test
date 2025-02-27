import React, { useState } from "react";
import { BottomNav } from "../../Components/BottomNav/BottomNav";

const Profile = () => {
  const [currentScreen, setCurrentScreen] = useState("Profile");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 870);

  return (
    <div>
      Profile
      {isMobile && (
        <BottomNav
          currentScreen={currentScreen}
          setCurrentScreen={setCurrentScreen}
        />
      )}
    </div>
  );
};

export default Profile;
