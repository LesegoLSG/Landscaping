import React from "react";

const InputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = true,
}) => {
  return (
    <div className="w-full flex flex-col mb-4">
      <label htmlFor={name} className="block text-neutral-700 font-semibold">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded"
        required={required}
      />
    </div>
  );
};

export default InputField;
