import React, { useState, useEffect } from "react";

const ChatBot = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    // Handle button click event here
  };

  return (
    <button
      className={`trail-button${showButton ? " show" : ""}`}
      onClick={handleButtonClick}
    >
      Free 7 Day Trail
    </button>
  );
};

export default ChatBot;
