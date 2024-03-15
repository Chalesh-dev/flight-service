import CheckboxComp from "./CheckboxComp";

const filters = [
  "Elevator",
  "In-room accessibility",
  "Roll-in shower",
  "Service animals allowed",
  "Wheelchair accessible parking",
  "Stair-free path to entrance",
  "Sign language-capable staff",
  "Accessible bathroom",
];

const Accessibility = () => {
  return (
    <div className="flex flex-col gap-1 mt-8">
      <p className="font-semibold text-sm">Accessibility</p>
      {filters.map((item, index) => (
        <CheckboxComp
          key={index}
          title={item}
          name={item}
          disabled={index === filters.length - 1 && "disabled"}
        />
      ))}
    </div>
  );
};

export default Accessibility;
