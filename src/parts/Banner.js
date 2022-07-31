import React from "react";

export default function Banner() {
  return (
    <div className="flex justify-between items-center">
      <div className="lg:text-6xl xl:text-7xl 2xl:text-8xl">
        WE ASSIST YOU IN <br /> SOLVING TOMORROW'S
      </div>
      <a href="#ABOUTUS" className="sm:text-md md:text-md lg:text-lg">
        ABOUT US
        <ion-icon
          name="arrow-forward-outline"
          style={{ fontSize: "100px", transform: "rotate(-45deg)" }}
        ></ion-icon>
      </a>
    </div>
  );
}
