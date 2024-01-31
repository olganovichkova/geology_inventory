import { React } from "react";
import imageIcon from "../../assets/images/imageIcon.png";

export const ResultCard = ({ sampleid, longdesc, category }) => {
  return (
    <div className="card mb-2">
      <div className="row mb-0">
        <div className="col-md-1 d-flex align-items-center pe-0">
          <img src={imageIcon} className="card-img" alt=""></img>
        </div>
        <div className="col-md-11 ps-0">
          <div className="card-body ps-0 pb-0">
            <h6 className="card-title ">{sampleid}</h6>
            <p className="text-muted">{category}</p>

            <p className="card-text border-top">{longdesc}</p>
          </div>
        </div>
      </div>
    </div>
    // <div class="form-check form-check-inline">
    //   <input
    //     class="form-check-input"
    //     type="checkbox"
    //     name={name}
    //     value={value.value}
    //     checked={value.checked}
    //     onChange={(e) => {
    //       console.log(e.target.value);
    //       console.log(value.checked);
    //       onChange({ value: value.value, checked: !value.checked });
    //     }}
    //   />
    //   <label class="form-check-label" for="inlineCheckbox1">
    //     {label}
    //   </label>
    // </div>
  );
};

export default ResultCard;
