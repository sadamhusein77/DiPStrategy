import React from "react";
import Button from "./Button";

export default function Accordion({
  id,
  service_name,
  gambar_1,
  gambar_2,
  gambar_3,
  detail,
  description,
  onHandleClick,
  onHandleLearnMore,
}) {
  return (
    <div className="flex border-t-[1px] border-t-slate-300 py-4">
      <div className="w-1/2 text-xl">
        <div className="text-white">{service_name}</div>
        <div className={`p-4 hidden ${id}`}>
          <img src={gambar_1} alt="gambar1" className="w-full w-" />
        </div>
      </div>
      <div className="w-1/2 text-base pl-8">
        <div className={`hidden items-center ${id}`}>
          <span className="text-white text-xs mb-5">{detail}</span>
        </div>
        <div className={`hidden ${id}`}>
          <div className="w-1/2">
            <img src={gambar_2} alt="gambar2" className="w-full" />
          </div>
          <div className="w-1/2 pl-3">
            <img src={gambar_3} alt="gambar3" className="w-full" />
          </div>
        </div>
        <div className="flex">
            <div className="w-2/3 text-white mt-3 text-xs pr-4">
                {description}
            </div>
            <div className="w-1/3 flex items-center">
                <Button
                    color={`bg-yellow-300`}
                    name={`LEARN MORE`}
                    size={`w-80`}
                    height={`h-10`}
                    onHandleClick={() => onHandleLearnMore(id)}
                />
                <div className={`ml-4 icon-${id}`} onClick={() => onHandleClick(id)}>
                    <ion-icon
                    name="add"
                    style={{ fontSize: "30px", color: "white" }}
                    ></ion-icon>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
