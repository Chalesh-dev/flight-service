import Advertise from "@/components/SearchResultPage/Advertise";
import Content from "@/components/SearchResultPage/Content/page";
import SearchComp from "@/components/SearchResultPage/SearchComp";
import Sidebar from "@/components/SearchResultPage/Sidebar/page";
import Sorting from "@/components/SearchResultPage/Sorting/page";
import React from "react";

const Search = () => {
  return (
    <div className="grid grid-cols-7 gap-5">
      <div className="2xl:col-span-6 xl:col-span-7 lg:col-span-6 col-span-7 flex flex-col gap-3">
        <SearchComp />

        {/* MobileView(sort & filter & map & properties) */}
        <div className="lg:hidden flex flex-col gap-2">
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 bg-pink-400">sort & filter</div>
            <div className="bg-lime-600">view in map</div>
          </div>
          <div className="w-full bg-cyan-400">properties</div>
        </div>

        {/* sidebar & sorting $ content */}
        <div className="grid grid-cols-4 gap-4">
          <Sidebar />
          <div className="lg:col-span-3 col-span-4 gap-5 w-full flex flex-col">
            <Sorting />
            <Content />
          </div>
        </div>
      </div>
      <Advertise />
    </div>
  );
};

export default Search;
