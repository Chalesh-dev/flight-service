import React from "react";
import Origin from "./Boxes/Origin";
import CalendarRangeComp from "./Boxes/CalendarRangeComp";
import Travelers from "./Boxes/Travellers";
import Button from "./Boxes/Button";
import CheckBox from "./Boxes/CheckBox";

const Tab1 = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-2">
        <Origin />
        <CalendarRangeComp />
        <Travelers />
        <Button />
      </div>
      <CheckBox />
    </div>
  );
};

export default Tab1;
