import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
// import { InlineCheck } from "../../components/InlineCheck";
import SimpleMap, { MapContainer } from "../../components/Map/Map.component";
import { MapInstructions } from "../../components/MapInstructions";
import { Map } from "../../components/Map";
import { SmallLabel } from "../../components/SmallLabel";
import { InlineRadio } from "../../components/InlineRadio";
import InlineCheck from "../../components/InlineCheck/InlineCheck.component";
import axios from "axios";

export const EntryFormPage = (props) => {
  const [category, setCategory] = useState("");
  const [sampleId, setSampleId] = useState("");
  const [name, setName] = useState("");
  const [advisor, setAdvisor] = useState("");
  const [dateCollected, setDateCollected] = useState("");
  const [colReason, setColReason] = useState("");
  const [locationPoly, setLocationPoly] = useState("");
  const [storageBuilding, setStorageBuilding] = useState("");
  const [storageRoom, setStorageRoom] = useState("");
  const [storageSpecs, setStorageSpecs] = useState("");
  const [geologicName, setGeologicName] = useState("");
  const [sampleForm, setSampleForm] = useState("");
  const [sampleType, setSampleType] = useState("");
  const [geoDescription, setGeoDescription] = useState("");
  const [sampleImg, setSampleImg] = useState("");
  const [sampleForm1, setSampleForm1] = useState({
    value: "sampleForm1",
    checked: false,
  });
  const [sampleForm2, setSampleForm2] = useState({
    value: "sampleForm2",
    checked: false,
  });
  const [sampleForm3, setSampleForm3] = useState({
    value: "sampleForm3",
    checked: false,
  });
  const [sampleForm4, setSampleForm4] = useState({
    value: "sampleForm4",
    checked: false,
  });
  const [sampleType1, setSampleType1] = useState({
    value: "sampleType1",
    checked: false,
  });
  const [sampleType2, setSampleType2] = useState({
    value: "sampleType2",
    checked: false,
  });
  const [sampleType3, setSampleType3] = useState({
    value: "sampleType3",
    checked: false,
  });
  const [sampleType4, setSampleType4] = useState({
    value: "sampleType4",
    checked: false,
  });
  const [sampleType5, setSampleType5] = useState({
    value: "sampleType5",
    checked: false,
  });
  const [sampleType6, setSampleType6] = useState({
    value: "sampleType6",
    checked: false,
  });
  const [reason1, setReason1] = useState({
    value: "reason1",
    checked: false,
  });
  const [reason2, setReason2] = useState({
    value: "reason2",
    checked: false,
  });
  const [reason3, setReason3] = useState({
    value: "reason3",
    checked: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({});
    const result = await axios.post("http://localhost:3000/newentry", {});
  };
  // const [userInput, setUserInput] = useState({
  //   sample: "",
  //   sampleId: "", //a mix of numbers and letters along with "-" and "." and "/" and "_" limit 15
  //   name: "", //full name of collector
  //   advisor: "", //advisor name
  //   dateCollected: "", //select date from drop down icon
  //   colReason: "", //textarea for reason of collecting sample
  //   locationPoly: "", //polygon map interface
  //   storageBuilding: "", //
  //   storageRoom: "",
  //   storageDetails: "",
  //   geologicName: "", //geological name of the sample
  //   sampleForm: [""], //
  //   sampleType: [""],
  //   geoDescription: "",
  //   sampleImg: "",
  // });

  // const [otherInput, setOtherInput] = useState({
  //   otherType: "",
  //   otherAdvisor: "",
  //   otherForm: "",
  //   otherBuilding: "",
  //   otherRoom: "",
  // });
  //handle field changes
  const handleChange = (e) => {
    console.log("hello world");
    // setUserInput({ ...userInput, [input]: e.target.value });
    console.log(
      sampleForm1.value,
      sampleForm1.checked,
      sampleId,
      name,
      advisor,
      dateCollected,
      colReason,
      geologicName,
      sampleForm,
      sampleType,
      geoDescription,
      sampleImg
    );
  };

  // const updateSampleType = (e) => {
  //   setSampleType(sampleType.push(e.target.value));
  // };

  const format = (types) => {
    const formatted = types.map((type) => {
      if (type.checked) {
        return type;
      } else return;
    });
    return formatted.join(" , ");
  };

  const typeArray = [
    sampleType1.value,
    sampleType2.value,
    sampleType3.value,
    sampleType4.value,
    sampleType5.value,
    sampleType6.value,
  ];
  const formArray = [
    sampleForm1.value,
    sampleForm2.value,
    sampleForm3.value,
    sampleForm4.value,
  ];
  const reasonArray = [reason1.value, reason2.value, reason3.value];

  const [isDisabled, setIsDisabled] = useState(true);

  // const [isChecked, setIsChecked] = useState(false);

  // const [isSelected, setIsSelected] = useState(true);

  // const [isHidden, setIsHidden] = useState(true);

  const formatFields = (fields) => {
    return `"${fields.join('","')}"`;
  };
  const formatValues = (values) => {
    const formattedValues = values.map((value) => {
      if (typeof value === "string") {
        return `'${value}'`;
      }
      return value;
    });
    return formattedValues.join(",");
  };
  const handleSelect = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div className="align-items-center" style={{ width: "50%" }}>
      <div className="row justify-content-md-center">
        <h2 className="text-center"> New Sample Form</h2>
      </div>
      <p className="text-center" style={{ fontSize: "0.95rem" }}>
        Please fill out the form to the best of your ability. The fields marked
        with an asterisk (*) are required to be completed.
      </p>
      {/**form */}
      <form>
        <fieldset className="border p-4">
          <fieldset className="border p-2">
            <legend className="float-none w-auto p-2">
              Sample Identification
            </legend>
            {/**sample entry input block */}
            <div>
              <label>
                Is the sample entry for one or multiple bulk samples? *
              </label>
            </div>
            <div className="grid">
              <div className="g-col-3">
                <SmallLabel label="Please select one from the following." />
              </div>
            </div>
            {/**radio check 1 */}
            <InlineRadio
              label="Single Specimen"
              name="category"
              value="singleSpecimen"
              checked={category == "singleSpecimen"}
              onChange={setCategory}
            />
            {/**radio check 2 */}

            <InlineRadio
              label="Collection"
              name="category"
              value="collection"
              checked={category == "collection"}
              onChange={setCategory}
            />
            <hr />
            {/*sample ID input block */}
            <div className="mb-1">
              <label for="sampleId">Sample ID *</label>
              <input
                type="text"
                id="sampleId"
                className="form-control"
                style={{
                  borderBlockColor: "darkgrey",
                  borderInlineColor: "darkgrey",
                }}
                aria-describedby="sampleIdHelpBlock"
                placeholder="Enter ID here..."
                value={sampleId}
                onChange={(e) => {
                  setSampleId(e.target.value);
                }}
              />
              <SmallLabel
                label="Sample ID may contain letters, numbers, and valid special
                characters./,:-#_"
              />
            </div>
          </fieldset>
          {/*Collector info fieldset block */}
          <fieldset className="border p-2">
            <legend className="float-none w-auto p-2">Collector Info</legend>
            {/*Name input block */}
            <div className="mb-1">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                style={{
                  borderBlockColor: "darkgrey",
                  borderInlineColor: "darkgrey",
                }}
                aria-describedby="nameHelpBlock"
                placeholder="Enter full name here..."
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <SmallLabel label="Enter full name as first and last name. ex. John Doe" />
            </div>
            {/*Advisor input block */}
            {/**make this advisor input field as a drop down of advisor names */}
            <div className="mb-1">
              <label for="storageRoom">Advisor</label>
              {/**drop down */}
              <select
                id="advisorSelect"
                className="form-control custom-select form-select"
              >
                {/**option 1 */}
                <option
                  style={{
                    borderBlockColor: "darkgrey",
                    borderInlineColor: "darkgrey",
                  }}
                  selected
                >
                  Select an Advisor...
                </option>
                {/**option 2 */}
                <option>Advisor A</option>
                {/**option 3 */}
                <option>Advisor B</option>
              </select>
              <SmallLabel label="from the dropdown, select an Advisor." />
            </div>
            {/*Date input block */}
            <div className="mb-1">
              <label for="datecollected">Collection Year</label>
              <input
                type="number"
                id="datecollected"
                className="form-control"
                style={{
                  borderBlockColor: "darkgrey",
                  borderInlineColor: "darkgrey",
                }}
                aria-describedby="dateHelpBlock"
                placeholder="Enter collection year here..."
                value={dateCollected}
                onChange={(e) => {
                  setDateCollected(e.target.value);
                }}
              />
              <SmallLabel label="Enter the year of when this sample was collected." />
            </div>
            {/*Reason for collecting input block */}
            {/**change this from regular text input to 3 radio check options. 1] teaching 2]research 3]other */}
            <div className="grid">
              <div className="g-col-3">
                <label style={{ marginBottom: "0.1rem" }}>
                  Reason for Collecting Sample
                </label>
              </div>
              <div className="g-col-3">
                <SmallLabel label="Select all that apply." />
              </div>
            </div>
            {/*Checkbox 1 for reason input */}
            <InlineCheck
              label="Teaching"
              name="reason1"
              value={reason1}
              checked={reason1.checked}
              onChange={setReason1}
            />

            {/*Checkbox 2 for reason input*/}
            <InlineCheck
              label="Research"
              name="reason2"
              value={reason2}
              checked={reason2.checked}
              onChange={setReason2}
            />

            {/*Checkbox 3 for reason input */}
            <InlineCheck
              label="Other"
              name="reason3"
              value={reason3}
              checked={reason3.checked}
              onChange={setReason3}
            />
            {/* <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox4"
                value={sampleForm}
                onChange={handleSelect}
              />
              <label class="form-check-label" for="inlineCheckbox3">
                Other
              </label>
            </div> */}
            {/*Other input block for other reason */}
            <div className="mb-1 mt-2">
              <input
                type="text"
                id="othertype"
                className="form-control"
                style={{
                  borderBlockColor: "darkgrey",
                  borderInlineColor: "darkgrey",
                }}
                aria-describedby="otherHelpBlock"
                placeholder="Please enter other sample form..."
                value={sampleForm}
                // onChange={(e) => {
                //   setSampleType(e.target.value);
                // }}
                disabled={isDisabled}
              />
              <SmallLabel label="Enter a sample form only if 'Other' was selected." />
            </div>
            <hr />
            {/*Map fieldset */}
            <fieldset className="border p-2">
              <legend className="float-none w-auto p-2">
                Sample Collection Location
              </legend>
              <MapInstructions />

              <MapContainer />
            </fieldset>
          </fieldset>
          {/*Sample Specs fieldset */}
          <fieldset className="border p-2">
            <legend className="float-none w-auto p-2">Sample Specs</legend>
            {/*Short Description input block */}
            <div className="mb-1">
              <label for="geologicname">Short Description</label>
              <input
                type="text"
                id="shortDescription"
                className="form-control"
                style={{
                  borderBlockColor: "darkgrey",
                  borderInlineColor: "darkgrey",
                }}
                aria-describedby="shortDescriptionHelpBlock"
                placeholder="Enter geologic name of sample here..."
                value={geologicName}
                onChange={(e) => {
                  setGeologicName(e.target.value);
                }}
              />
              <SmallLabel
                label="Enter a specific geologic name or a reference to the sample. ex.
                quartz."
              />
            </div>

            <hr />
            {/* Sample Form input block */}
            <div className="grid">
              <div className="g-col-3">
                <label style={{ marginBottom: "0.1rem" }}>Sample Form </label>
              </div>
              <div className="g-col-3">
                <SmallLabel label="Select all that apply." />
              </div>
            </div>
            {/*Checkbox 1 for sample form */}

            <InlineCheck
              label="Hand Sample"
              name="sampleForm1"
              value={sampleForm1}
              checked={sampleForm1.checked}
              onChange={setSampleForm1}
            />
            {/*Checkbox 2 for sample form */}
            <InlineCheck
              label="Mineral Separate"
              name="sampleForm2"
              value={sampleForm2}
              checked={sampleForm2.checked}
              onChange={setSampleForm2}
            />

            {/*Checkbox 3 for sample form */}
            <InlineCheck
              label="Thin Section"
              name="sampleForm3"
              value={sampleForm3}
              checked={sampleForm3.checked}
              onChange={setSampleForm3}
            />

            {/*Checkbox 4 for sample form */}
            <InlineCheck
              label="Other"
              name="sampleForm4"
              value={sampleForm4}
              checked={sampleForm4.checked}
              onChange={setSampleForm4}
            />
            {/* <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox4"
                value={sampleForm}
                onChange={handleSelect}
              />
              <label class="form-check-label" for="inlineCheckbox3">
                Other
              </label>
            </div> */}
            {/*Other input block for sample form */}
            <div className="mb-1 mt-2">
              <input
                type="text"
                id="othertype"
                className="form-control"
                style={{
                  borderBlockColor: "darkgrey",
                  borderInlineColor: "darkgrey",
                }}
                aria-describedby="otherHelpBlock"
                placeholder="Please enter other sample form..."
                value={sampleForm}
                // onChange={(e) => {
                //   setSampleType(e.target.value);
                // }}
                disabled={isDisabled}
              />
              <SmallLabel label="Enter a sample form only if 'Other' was selected." />
            </div>
            <hr />
            {/*Sample type input block */}
            <div className="grid">
              <div className="g-col-3">
                <label style={{ marginBottom: "0.1rem" }}>Sample Type</label>
              </div>
              <div className="g-col-3">
                <SmallLabel label="Select all that apply." />
              </div>
            </div>
            {/*Checkbox 1 for sample type */}
            <InlineCheck
              label="Rock"
              name="sampleType1"
              value={sampleType1}
              checked={sampleType1.checked}
              onChange={setSampleType1}
            />

            {/*Checkbox 2 for sample type */}
            <InlineCheck
              label="Mineral"
              name="sampleType2"
              value={sampleType2}
              checked={sampleType2.checked}
              onChange={setSampleType2}
            />

            {/*Checkbox 3 for sample type */}
            <InlineCheck
              label="Fossil"
              name="sampleType3"
              value={sampleType3}
              checked={sampleType3.checked}
              onChange={setSampleType3}
            />

            {/*Checkbox 4 for sample type */}
            <InlineCheck
              label="Soil"
              name="sampleType4"
              value={sampleType4}
              checked={sampleType4.checked}
              onChange={setSampleType4}
            />

            {/*Checkbox 5 for sample type */}
            <InlineCheck
              label="Water"
              name="sampleType5"
              value={sampleType5}
              checked={sampleType5.checked}
              onChange={setSampleType5}
            />

            {/*Checkbox 6 for sample type */}
            <InlineCheck
              label="Other"
              name="sampleType6"
              value={sampleType6}
              checked={sampleType6.checked}
              onChange={setSampleType6}
            />
            {/* <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value={sampleType}
                onChange={handleSelect}
              />
              <label class="form-check-label" for="inlineRadio3">
                Other
              </label>
            </div> */}
            {/*Other input block for sample type */}
            <div className="mb-1 mt-2">
              <input
                type="text"
                id="othertype"
                className="form-control"
                style={{
                  borderBlockColor: "darkgrey",
                  borderInlineColor: "darkgrey",
                }}
                aria-describedby="otherHelpBlock"
                placeholder="Please enter other sample type..."
                value={sampleType}
                // onChange={(e) => {
                //   setSampleType(e.target.value);
                // }}
                disabled={isDisabled}
              />
              <SmallLabel label="Enter a sample type only if 'Other' was selected." />
            </div>
            <hr />
            {/*Image input block */}
            <div className="mb-1">
              <label for="image">Sample Image Upload</label>
              <input
                type="file"
                id="image"
                className="form-control"
                style={{
                  borderBlockColor: "darkgrey",
                  borderInlineColor: "darkgrey",
                }}
                aria-describedby="imageHelpBlock"
                value={sampleImg}
                onChange={(e) => {
                  setSampleImg(e.target.value);
                }}
              />
              <SmallLabel
                label="Select an image of the sample, if available. Accepted file types
                are .png .jpg .jpeg ex. image.jpg"
              />
            </div>
            {/*Detailed geo description input block */}
            {/*Add a character limit */}
            <div className="mb-1">
              <label for="geoDescription">
                Detailed Geological Description *
              </label>
              <textarea
                id="geodescription"
                className="form-control"
                rows="3"
                style={{
                  borderBlockColor: "darkgrey",
                  borderInlineColor: "darkgrey",
                }}
                aria-describedby="geoDescHelpBlock"
                placeholder="Describe the geologic details here..."
                value={geoDescription}
                onChange={(e) => {
                  setGeoDescription(e.target.value);
                }}
              />
              <SmallLabel
                label="Enter any additional information/details that are known about
                the sample that could be useful to record."
              />
            </div>
          </fieldset>
          {/*Storage details fieldset */}
          <fieldset className="border p-2">
            <legend className="float-none w-auto p-2">Storage Details</legend>
            {/*Building name input block */}
            {/**Add selection for other */}
            <div className="mb-1">
              <label for="storageBuilding">Storage Building Name *</label>
              {/**drop down */}
              <select
                id="storageBuilding"
                className="form-control custom-select form-select"
              >
                {/**option 1 */}
                <option
                  style={{
                    borderBlockColor: "darkgrey",
                    borderInlineColor: "darkgrey",
                  }}
                  selected
                >
                  Choose Building...
                </option>
                {/**option 2 */}
                <option>PS (Physical Science)</option>
                {/**option 3 */}
                <option>CH (Colonial Hall)</option>
              </select>
              <SmallLabel
                label="from the dropdown, select which building this sample will be
                stored in."
              />
            </div>
            {/**room input block */}
            <div className="mb-1">
              <label for="storageRoom">Storage Room Number *</label>
              {/**drop down */}
              <select
                id="storageRoom"
                className="form-control custom-select form-select"
              >
                {/**option 1 */}
                <option
                  style={{
                    borderBlockColor: "darkgrey",
                    borderInlineColor: "darkgrey",
                  }}
                  selected
                >
                  Choose Room...
                </option>
                {/**option 2 */}
                <option>Room #1</option>
                {/**option 3 */}
                <option>Room #2</option>
              </select>
              <SmallLabel
                label="from the dropdown, select which room this sample will be stored
                in."
              />
            </div>
          </fieldset>
        </fieldset>
        {/**submit button */}
        <button type="button" className="btnW" onClick={handleChange}>
          Add Sample
        </button>
      </form>
    </div>
  );
};
export default EntryFormPage;
