import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Create a full-screen container for ripples
const rippleContainer = document.createElement("div");
rippleContainer.classList.add("ripple-container");
document.body.appendChild(rippleContainer);

// Function to create ripples with random border size
const createRipple = () => {
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");

  // Generate random size, position, and border width
  const size = Math.random() * 50 + 50; // Size between 50 and 100px
  const posX = Math.random() * window.innerWidth;
  const posY = Math.random() * document.documentElement.scrollHeight; // Full page height
  const borderWidth = Math.random() * 2 + 1; // Border width between 1 and 3px

  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  ripple.style.left = `${posX}px`;
  ripple.style.top = `${posY}px`;
  ripple.style.borderWidth = `${borderWidth}px`;

  rippleContainer.appendChild(ripple);

  // Remove ripple after animation
  setTimeout(() => {
    ripple.remove();
  }, 2000); // Adjust this to match the animation duration
};

// Generate ripples at intervals
setInterval(createRipple, 150); // Adjust this to change frequency of ripples

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
