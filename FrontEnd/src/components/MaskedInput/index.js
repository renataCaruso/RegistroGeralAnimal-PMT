import React from "react";
import InputMask from "react-input-mask";

// const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');{

// }

const MaskedInput = ({ value, onChange, placeholder, type, className }) => {
  return (
    <InputMask
      mask="999.999.999-99"
      type={type}
      className={className}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default MaskedInput;
