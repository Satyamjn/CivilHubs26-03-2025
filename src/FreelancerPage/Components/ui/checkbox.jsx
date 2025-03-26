import React from "react";

const Checkbox = ({ label, name, checked, onChange }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 accent-blue-500 cursor-pointer"
      />
      <label htmlFor={name} className="text-gray-700 cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
