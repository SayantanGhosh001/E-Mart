// src/utils/cartUtils.js

import { useState } from "react";

export const useHandleBuyNow = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleBuyNow = () => {
    setPopupVisible(true); // Show the popup when the item is added
    setTimeout(() => setPopupVisible(false), 3000); // Hide popup after 3 seconds
  };

  return { isPopupVisible, handleBuyNow, setPopupVisible };
};
