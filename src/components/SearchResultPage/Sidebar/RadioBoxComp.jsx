import React from "react";

const RadioBoxComp = ({title, key, name, value}) => {
  return (
    <label class="flex radio p-2 cursor-pointer w-2/3" key={key}>
      <input class="my-auto transform scale-150 cursor-pointer" type="radio" name={name} value={value} />
      <div class="title px-4">{title}</div>
    </label>
  );
};

export default RadioBoxComp;
