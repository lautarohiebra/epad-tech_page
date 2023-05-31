import React from "react";

const Beneficio = (props) => {
  return (
    <div className="bg-neutral-focus w-64 flex justify-center p-2 rounded-md shadow-md hover:shadow-2xl transition">
      <p className="font-semibold text-lg text-white">{props.name}</p>
    </div>
  );
};

export default Beneficio;
