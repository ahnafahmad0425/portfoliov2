import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const rippleContainer = document.createElement("div");
rippleContainer.classList.add("ripple-container");
document.body.appendChild(rippleContainer);

const createRipple = () => {
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");

  const size = Math.random() * 50 + 50;
  const posX = Math.random() * window.innerWidth;
  const posY = Math.random() * document.documentElement.scrollHeight;
  const borderWidth = Math.random() * 2 + 1;

  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  ripple.style.left = `${posX}px`;
  ripple.style.top = `${posY}px`;
  ripple.style.borderWidth = `${borderWidth}px`;

  rippleContainer.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 2000);
};

setInterval(createRipple, 150);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
