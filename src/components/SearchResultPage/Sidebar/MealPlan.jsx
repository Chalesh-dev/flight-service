import CheckboxComp from "./CheckboxComp";

const filters = [
  "Breakfast included",
  "Lunch included",
  "Dinner included",
  "All inclusive",
];

const MealPlan = () => {
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

export default MealPlan;
