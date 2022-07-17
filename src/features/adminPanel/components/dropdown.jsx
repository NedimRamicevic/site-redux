import React from "react";

export const Dropdown = ({ value, options, onChange }) => {
  return (
    <div class="form-item">
      <select
        placeholder="Select Category"
        className="appearance-none w-full bg-white bg-clip-padding rounded m-0 focus:outline-none
          transition
          ease-in-out"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option value={option.name}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};
