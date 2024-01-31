import { React } from "react";

export const InlineCheck = ({ label, name, value, onChange }) => {
  return (
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        name={name}
        value={value.value}
        checked={value.checked}
        onChange={(e) => {
          console.log(e.target.value);
          console.log(value.checked);
          onChange({ value: value.value, checked: !value.checked });
        }}
      />
      <label class="form-check-label" for="inlineCheckbox1">
        {label}
      </label>
    </div>
  );
};

export default InlineCheck;
