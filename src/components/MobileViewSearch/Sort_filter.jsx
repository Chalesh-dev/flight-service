import React from "react";
import { SortFilterIcon } from "../Icons";

const Sort_filter = () => {
  return (
    <div className="border border-slate-500 rounded-full py-1 flex justify-center items-center text-lg font-bold cursor-pointer gap-1 text-[#1668e3]">
      <SortFilterIcon />
      Sort & Filter
    </div>
  );
};

export default Sort_filter;
