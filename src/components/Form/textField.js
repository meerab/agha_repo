import React from "react";

const InputField = ({
  type,
  name,
  onChange,
  onBlur,
  value,
  className,
  placeholder,
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        className={className}
      />
    </>
  );
};

export default InputField;
