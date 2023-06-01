import React from "react";
import { data } from "@/data/Servicios";

const ServiciosCard = () => {
  return data.map((data) => (
    <div key={data.header} className="center max-w-[700px] bg-base-100 p-5 mx-auto shadow-md mb-6 prose">
      <h3 className="text-black mb-3 text-2xl font-medium underline underline-offset-2">
        {data.header}
      </h3>
      <p className="bg-slate-100 p-4 rounded-md shadow-sm mb-2">{data.text}</p>
      <ul className="list-disc px-5">
        { data.Items.map((item) =>(
        <li key={item.itemNumber}>{item.content}</li>
        )) }
      </ul>
    </div>
  ));
};

export default ServiciosCard;
