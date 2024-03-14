const CheckboxComp = ({ onChangeHandler, checkedHandler, title, key, name }) => {
  return (
    <div class="inline-flex items-center" key={key}>
      <label
        class="relative flex items-center p-2 rounded-full cursor-pointer"
        htmlFor="check"
      >
        <input
          name={name}
          //   ref={checked}
          checked={checkedHandler}
          onChange={onChangeHandler}
          //   defaultChecked={checked}
          type="checkbox"
          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-900 checked:bg-blue-900 checked:before:bg-blue-900 hover:before:opacity-10"
        />
        <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      <label
        class="mt-px font-light text-gray-700 cursor-pointer select-none"
        htmlFor={title}
      >
        <span className="text-[0.75rem] font-bold">{title}</span>
      </label>
    </div>
  );
};

export default CheckboxComp;
