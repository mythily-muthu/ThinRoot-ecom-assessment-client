import React from "react";
import { useSelector } from "react-redux";

const Topbar = () => {
  const userState = useSelector((state) => state.user.user);

  return (
    <div className="flex w-full p-2 h-7 bg-secondary items-center justify-between">
      <div className="flex px-5 w-full xl:w-[80%] mx-auto justify-between items-center">
        <div className="flex gap-6 ">
          <p
            className="text-xl whitespace-nowrap flex items-center gap-x-3"
            style={{
              fontFamily: "Trirong",
            }}
          >
            Hi There!{" "}
            <span className="font-thin italic uppercase tracking-[0.1em] flex items-center text-primary">
              {userState?.name}
            </span>
          </p>
          {/* <p className="font-thin tracking-[0.2em] flex items-center">
            DELIVER TO
          </p> */}
          {/* <p className=" tracking-[0.2em] flex items-center text-sm text-primary">
            CLICK HERE TO SELECT PINCODE
          </p> */}
        </div>
        <div className="hidden md:block ">
          <div className="whitespace-nowrap flex gap-6 font-normal tracking-[0.2em] text-sm text-light">
            <p className=" ">GREEN CARD</p>
            <p>GIFT CARD</p>
            <p>STORE LOCATOR</p>
            <p>TRACT ORDER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
