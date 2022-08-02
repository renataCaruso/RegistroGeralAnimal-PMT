import React from "react";
import styles from "./styles.css";

const Input = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  yupTeste,
}) => {
  return (
    <div className="wrapper">
      <label htmlFor={name} className="label" placeholder={placeholder}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className="input"
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        {...yupTeste}
      />
    </div>
  );
};

export default Input;
