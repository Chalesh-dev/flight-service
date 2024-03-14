import React from "react";
import CustomFilters from "./CheckboxComp";
import CheckboxComp from "./CheckboxComp";

const filters = [
  "All inclusive",
  "Hotel resort",
  "Pool",
  "House boat",
  "Ocean view",
];

const PopularFilters = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold text-sm">Popular filters</p>
      {filters.map((item, index) => (
        <CheckboxComp key={index} title={item} name={item} />
      ))}
    </div>
  );
};

export default PopularFilters;
