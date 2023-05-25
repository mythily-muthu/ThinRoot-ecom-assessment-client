import React from "react";

const Topbar = () => {
  return (
    <div className="flex w-full h-7 bg-secondary items-center justify-between">
      <div className="flex w-[80%] mx-auto justify-between items-center">
        <div className="flex gap-6">
          <p
            className="text-xl"
            style={{
              fontFamily: "Trirong",
            }}
          >
            Hi There!
          </p>
          <p className="font-thin tracking-[0.2em] flex items-center">
            DELIVER TO
          </p>
          <p className=" tracking-[0.2em] flex items-center text-sm text-primary">
            CLICK HERE TO SELECT PINCODE
          </p>
        </div>
        <div className="flex gap-6 font-normal tracking-[0.2em] text-sm text-light">
          <p>GREEN CARD</p>
          <p>GIFT CARD</p>
          <p>STORE LOCATOR</p>
          <p>TRACT ORDER</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
