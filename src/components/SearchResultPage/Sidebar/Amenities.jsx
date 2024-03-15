import CheckboxComp from "./CheckboxComp";

const filters = [
  "Hot tub",
  "Pool",
  "Pet friendly",
  "Spa",
  "Wifi Included",
  "Parking",
  "Gym",
  "Airport shuttle included",
  "Kitchen",
  "Outdoor space",
  "Air conditioned",
  "Restaurant",
  "Electric car charging station",
  "Cribs",
  "Ocean view",
  "Casino",
  "Washer and dryer",
  "Water park",
  "Golf course",
  "Bar",
];

const Amenities = () => {
  return (
    <div className="flex flex-col gap-1 mt-8">
      <p className="font-semibold text-sm">Meal plans available</p>
      {filters.map((item, index) => (
        <CheckboxComp
          key={index}
          title={item}
          name={item}
          disabled={index === 3 && "disabled"}
        />
      ))}
    </div>
  );
};

export default Amenities;