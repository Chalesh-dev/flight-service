import React, { useEffect, useRef, useState } from "react";
import { MapIcon, SearchIcon } from "@/components/Icons";
import SearchResultComp from "./SearchResultComp";
import Loading from "./Loading";

const Origin = ({ title, placeholder }) => {
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(true);
  const [searchVal, setSearchVal] = useState(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSearchResult(true);

    const timeOutId = setTimeout(() => {
      setSearchResult(false);
    }, 50000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [search]);

  return (
    <div className="relative">
      <div
        onClick={() => setOpen(true)}
        className="h-[50px] border border-[#818494] rounded-lg flex flex-1 gap-1 items-center pl-3 pr-1 cursor-pointer"
      >
        <MapIcon />
        <div className="flex flex-col">
          <span className="text-sm w-full overflow-hidden">{title}</span>
          <p className="text-[0.78rem] overflow-hidden w-[220px]">
            {searchVal}
          </p>
        </div>
      </div>

      {/* search box */}
      <div
        ref={boxRef}
        className={`${
          open ? "flex transition-all ease-in-out duration-1000" : "hidden"
        } absolute border border-[#818494] -top-1 -left-2 w-[380px] flex-col bg-white z-[999] rounded-lg`}
      >
        <div className="w-full overflow-hidden h-[70px] border-b border-slate-500 flex items-center">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-[80%] pl-3 overflow-hidden font-bold text-2xl outline-none focus:outline-none text-[#818494]"
            placeholder={placeholder}
          />
        </div>
        <div className="w-full h-[400px]">
          {!search && (
            <div className="w-full flex flex-col justify-center items-center mt-10">
              <SearchIcon size={28} />
              <p className="text-sm text-center mt-2">
                Search by city or airport
              </p>
            </div>
          )}
          {search &&
            (searchResult ? (
              <Loading />
            ) : (
              <SearchResultComp setOpen={setOpen} setSearchVal={setSearchVal} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Origin;
