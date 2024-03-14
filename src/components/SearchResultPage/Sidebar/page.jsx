import React from "react";
import Compare from "./Compare";
import Line from "./Line";
import SearchBox from "./SearchBox";
import PopularFilters from "./PopularFilters";
import PricePerNight from "./PricePerNight";
import GuestRating from "./GuestRating";
import StarRating from "./StarRating";

const Sidebar = () => {
  return (
    <div className="w-full lg:flex hidden flex-col gap-2 py-4">
      {/* compare */}
      <Compare />
      <Line />
      <SearchBox />
      {/* filters */}
      <h1 className="text-2xl font-bold my-1">Filter by</h1>
      <PopularFilters />
      <PricePerNight />
      <GuestRating />
      <StarRating />
    </div>
  );
};

export default Sidebar;
