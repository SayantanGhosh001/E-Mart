import React from "react";
import "../css/Popup.css"; // Create a CSS file for styling the popup
import CorrectGif from "../image/correct.gif"

const Popup = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <img
          src={CorrectGif} // Your GIF URL here
          alt="Added to Cart"
          className="popup-gif"
        />
        <p>{message}</p>
        <button onClick={onClose} className="btn btn-primary">
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
