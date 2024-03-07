import React from "react";
import { Menu } from "../Icons";

const MobileView = () => {
  const handleOpenSidebar = () => {
    console.log('frfr');
  };
  return (
    <div onClick={handleOpenSidebar}>
      <Menu />
    </div>
  );
};

export default MobileView;
