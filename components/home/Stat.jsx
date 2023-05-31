import React from "react";

const Stat = (props) => {
  return (
    <div className="flex bg-base-100  max-w-[690px] xl:w-1/4 align-middle my-5 mx-2 shadow-lg rounded-md hover:-translate-y-2 transition overflow-hidden">
      <div className="flex items-center p-2 min-w-[100px] rounded-l-md bg-neutral-focus mr-2">
        <span className="inline-block align-middle text-base-100 font-extrabold text-3xl">
          {props.stat}
        </span>
      </div>
      <div className="bg-base-100 p-1">
        <h3 className="font-bold text-lg text-neutral">{props.header}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Stat;
