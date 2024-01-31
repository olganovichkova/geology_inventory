import React from "react";

export const InlineRadio = ({ label, value, name, onChange }) => {
  return (
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        id="inlineCheckbox1"
        value={value}
        name={name}
        onChange={(e) => {
          console.log(e.target.value);
          onChange(e.target.value);
        }}
      />
      <label class="form-check-label" for="inlineCheckbox1">
        {label}
      </label>
    </div>
  );
};

export default InlineRadio;
