import React, { useState } from "react";

export const DropCheckList = () => {
  return (
    <>
      <div className="align-items-center" style={{ width: "50%" }}>
        <div className="row justify-content-md-center">
          <h2 className="text-center"> New Sample Form</h2>
        </div>
        <p className="text-center" style={{ fontSize: "0.95rem" }}>
          Please fill out the form to the best of your ability. The fields
          marked with an asterisk (*) are required to be completed.
        </p>
        <fieldset className="p-2">
          <legend className=""></legend>
          <div className="list-group">
            <label className="list-group-item">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
              />
              First checkbox
            </label>
            <label className="list-group-item">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
              />
              Second checkbox
            </label>
            <label className="list-group-item">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
              />
              Third checkbox
            </label>
            <label className="list-group-item">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
              />
              Fourth checkbox
            </label>
            <label className="list-group-item">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
              />
              Fifth checkbox
            </label>
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default DropCheckList;
