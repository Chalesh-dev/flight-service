"use client";

import { useState } from "react";

const SeeMoreLess = ({ filters, children }) => {
  const [more, setMore] = useState(false);
  return (
    <div
      className={`w-full flex flex-col gap-1 pl-3 pt-3 ${
        more ? "h-auto" : "h-[140px]"
      } overflow-hidden relative`}
    >
      {children}
      {filters?.length > 3 && (
        <div
          className="text-blue-500 text-sm cursor-pointer pl-2 absolute -bottom-2 flex items-center w-full bg-[#eff3f7] h-[40px] z-50"
          onClick={() => setMore(!more)}
        >
          {more ? "See Less" : "See More"}
        </div>
      )}
    </div>
  );
};

export default SeeMoreLess;
