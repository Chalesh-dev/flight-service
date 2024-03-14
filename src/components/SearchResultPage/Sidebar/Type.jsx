import CheckboxComp from "./CheckboxComp";

const filters = [
  "Vacation rentals",
  "Bed & breakfast",
  "Hotel resort",
  "Cottage",
  "Villa",
  "Apartment",
  "Condo",
  "Private vacation home",
];

const Type = () => {
  return (
    <div className="flex flex-col gap-2 mt-8">
      <p className="font-semibold text-sm">Property type</p>
      {filters.map((item, index) => (
        <CheckboxComp key={index} title={item} name={item} />
      ))}
    </div>
  );
};

export default Type;