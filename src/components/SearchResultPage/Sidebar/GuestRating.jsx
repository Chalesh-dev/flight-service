import RadioBoxComp from "./RadioBoxComp";
import SeeMoreLess from "./SeeMoreLess";

const filters = ["Any", "Wonderful 9+", "Very good 8+", "Good 7+"];

const GuestRating = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold text-sm">Guest rating</p>
      <SeeMoreLess filters={filters}>
        {filters.map((item, index) => (
          <RadioBoxComp key={index} title={item} value={item} name={item} />
        ))}
      </SeeMoreLess>
    </div>
  );
};

export default GuestRating;
