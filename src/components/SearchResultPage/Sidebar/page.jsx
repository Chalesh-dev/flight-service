import React from "react";
import Compare from "./Compare";
import Line from "./Line";
import SearchBox from "./SearchBox";
import PopularFilters from "./PopularFilters";
import PricePerNight from "./PricePerNight";
import GuestRating from "./GuestRating";
import StarRating from "./StarRating";
import PaymentType from "./PaymentType";
import Cancellation from "./Cancellation";
import Type from "./Type";
import MealPlan from "./MealPlan";
import OneKeyBenefits from "./OneKeyBenefits";
import Accessibility from "./Accessibility";
import TravelerExperience from "./TravelerExperience";
import Amenities from "./Amenities";

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
      <PaymentType />
      <Cancellation />
      <Type />
      <MealPlan />
      <Amenities />
      <OneKeyBenefits />
      <Accessibility />
      <TravelerExperience />
    </div>
  );
};

export default Sidebar;
