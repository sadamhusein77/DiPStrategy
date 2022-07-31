import React from "react";

export default function Button({ name, size, height, color, icon, onHandleClick }) {
  return (
    <button className={`${color} ${size} ${height} text-xs flex items-center justify-center pl-2 py-1`} onClick={onHandleClick}>
      {name}
      <ion-icon
        name={`${icon ? icon : "arrow-forward-outline"}`}
        style={{ fontSize: "25px", transform: "rotate(-45deg)", marginLeft: "20px" }}
      ></ion-icon>
    </button>
  );
}
