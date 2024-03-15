"use client";
const SeeMoreLess = ({ children }) => {
  const handleClick = () => {
    alert('more')
  };
  return (
    <div className="w-full flex flex-col gap-1 h-[120px] overflow-hidden relative">
      {children}
      <p className="text-blue-500 mt-4 cursor-pointer absolute  bottom-2" onClick={handleClick}>
        See More
      </p>
    </div>
  );
};

export default SeeMoreLess;
