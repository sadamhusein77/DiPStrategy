import React from 'react'
import Navbar from "./Navbar";
import Banner from "./Banner";
export default function Header() {
  return (
    <>
    <header className="bg-cover bg-no-repeat bg-center pt-6 lg:h-[700px] xl:h-[730px] 2xl:h-[930px]" style={{backgroundImage: "url(images/bg-banner.png)"}}>
        <div className="container mx-auto h-full flex flex-col justify-between">
          <Navbar />
          <Banner />
        </div>
      </header>
      <div className="bg-black">
        <div className="container mx-auto">
          <span className="lg:text-6xl xl:text-7xl 2xl:text-8xl text-white">PROBLEMS TODAY</span>
        </div>
      </div>
    </>
  )
}
