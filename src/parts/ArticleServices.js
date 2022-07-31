import React from "react";
import Accordion from "../component/Accordion";
export default function ArticleServices({
  dataServices,
  onHandleClick,
  onLearnMore
}) {
  return (
    <section id="services" className="pt-28 bg-black">
      <div className="container mx-auto flex items-center">
        <div className="w-2/5 text-white text-6xl">
          OUR <br />
          SERVICES
        </div>
        <div className="w-2/5 text-white lg:text-base xl:text-lg">
          We’ve worked with a wide array of clients across the globe to apply
          design fundamentals of elegance, simplicity
        </div>
        <div className="w-1/5 text-white text-end">
          <a href="#viewall" className="sm:text-md md:text-md lg:text-lg">
            VIEW ALL
            <ion-icon
              name="arrow-forward-outline"
              style={{
                fontSize: "100px",
                transform: "rotate(-45deg)",
                color: "white",
              }}
            ></ion-icon>
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-20">
      {dataServices.length === 0 ? (
            <h2>Tidak ada services</h2>
          ) : (
            dataServices.map((item) => (
              <Accordion
                {...item}
                key={item.id}
                onHandleClick={onHandleClick}
                onHandleLearnMore={onLearnMore}
              />
            ))
          )}
      </div>
    </section>
  );
}
