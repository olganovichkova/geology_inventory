import React from "react";

export const SmallLabel = ({ label }) => {
  return (
    <>
      <small
        className="form-text text-muted "
        style={{
          fontSize: "0.75rem",
          marginTop: "0",
          marginBottom: "0.5rem",
        }}
      >
        {label}
      </small>
    </>
  );
};

export default SmallLabel;
