import React, { useState, useEffect } from "react";
import axios from "axios";
import { ResultCard } from "../../components/ResultCard";

export const SearchPage = () => {
  const [collapse, setCollapse] = useState(false);
  const [toggle, setToggle] = useState("");
  const [results, setResults] = useState([]);
  const [showMap, setShowMap] = useState(false);
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");
  const [advisor, setAdvisor] = useState("");
  const [form, setForm] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [building, setBuilding] = useState("");
  const [room, setRoom] = useState("");
  const [category, setCategory] = useState("");
  const [reason, setReason] = useState("");

  const onClick = (e) => {
    if (collapse) {
      setCollapse(e.target.value);
      setToggle(e.target.value);
    }
  };

  const onToggleMap = (e) => {
    setShowMap(!showMap);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/samples")
      .then(function (response) {
        // handle success
        console.log(response);

        setResults(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <div className="align-items-center" style={{ width: "80%" }}>
      <div className="row justify-content-md-center">
        <h2 className="text-center"> Search Inventory</h2>
      </div>
      <fieldset className="border p-4 d-flex flex-column justify-content-center">
        <div className="mb-1">
          <div className="row">
            <div className="col-lg-1 pt-3">
              <a className="navbar-brand"></a>
            </div>
            <div className="col-lg-9 pt-2">
              <input
                type="search"
                id="searchBar"
                className="form-control"
                style={{
                  borderBlockColor: "darkgrey",
                  borderInlineColor: "darkgrey",
                }}
                aria-describedby="sampleIdHelpBlock"
                placeholder="Enter keyword or phrase to search by..."
                // value={sampleId}
                onChange={(e) => {
                  // setSampleId(e.target.value);
                }}
              />
              <small>Note: separate each word with a space.</small>
            </div>
            <div className="col-lg-2">
              <button className="btn">Search</button>
            </div>
          </div>
          {/**Advanced Search Filter */}
          <button
            onClick={onclick}
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            className="advanced btn"
          >
            Advance Search With Filters <i className="fa fa-angle-down"></i>
          </button>
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
              <fieldset>
                {/**first row in advanced search */}
                <div className="row">
                  {/**search by year */}
                  <div className="col-md-4">
                    <input
                      type="text"
                      placeholder="Search by collection year"
                      className="form-control"
                      value={year}
                      onChange={(e) => {
                        setYear(e.target.value);
                      }}
                    />
                  </div>

                  <div className="col-md-4">
                    {/**search by name of collector */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search by name of collector"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>

                  <div className="col-md-4">
                    {/**advisor select */}
                    <select
                      id="advisorSelect"
                      className="form-control custom-select form-select"
                      value={advisor}
                      onChange={(e) => {
                        setAdvisor(e.target.value);
                      }}
                    >
                      {/**option 1 */}
                      <option
                        style={{
                          borderBlockColor: "darkgrey",
                          borderInlineColor: "darkgrey",
                        }}
                        defaultValue={advisor}
                      >
                        Search by advisor name
                      </option>
                      {/**option 2 */}
                      <option>Advisor A</option>
                      {/**option 3 */}
                      <option>Advisor B</option>
                    </select>
                  </div>
                </div>
                {/** second row in advanced search*/}
                <div className="row">
                  {/**select form */}
                  <div className="col-md-4">
                    <select
                      id="formSelect"
                      className="form-control custom-select form-select"
                      value={form}
                      onChange={(e) => {
                        setForm(e.target.value);
                      }}
                    >
                      {/**option 1 */}
                      <option
                        style={{
                          borderBlockColor: "darkgrey",
                          borderInlineColor: "darkgrey",
                        }}
                        selected
                      >
                        Search by sample form
                      </option>
                      {/**option 2 */}
                      <option>Hand Sample</option>
                      {/**option 3 */}
                      <option>Mineral Separate</option>
                      {/**option 4 */}
                      <option>Thin Section</option>
                    </select>
                  </div>

                  <div className="col-md-4">
                    {/**select type */}
                    <select
                      id="formSelect"
                      className="form-control custom-select form-select"
                      value={type}
                      onChange={(e) => {
                        setType(e.target.value);
                      }}
                    >
                      {/**option 1 */}
                      <option
                        style={{
                          borderBlockColor: "darkgrey",
                          borderInlineColor: "darkgrey",
                        }}
                        selected
                      >
                        Search by sample type
                      </option>
                      {/**option 2 */}
                      <option>Rock</option>
                      {/**option 3 */}
                      <option>Mineral</option>
                      {/**option 4 */}
                      <option>Fossil</option>
                      {/**option 5 */}
                      <option>Soil</option>
                      {/**option 6 */}
                      <option>Water</option>
                    </select>
                  </div>

                  <div className="col-md-4">
                    {/**select building */}
                    <select
                      id="buildingSelect"
                      className="form-control custom-select form-select"
                      value={building}
                      onChange={(e) => {
                        setBuilding(e.target.value);
                      }}
                    >
                      {/**option 1 */}
                      <option
                        style={{
                          borderBlockColor: "darkgrey",
                          borderInlineColor: "darkgrey",
                        }}
                        selected
                      >
                        Search by storage building
                      </option>
                      {/**option 2 */}
                      <option>Bldg 1</option>
                      {/**option 3 */}
                      <option>Bldg 2</option>
                    </select>
                  </div>
                </div>
                {/** third row in advanced search*/}
                <div className="row">
                  {/**select room */}
                  <div className="col-md-4">
                    <select
                      id="roomSelect"
                      className="form-control custom-select form-select"
                      value={room}
                      onChange={(e) => {
                        setRoom(e.target.value);
                      }}
                    >
                      {/**option 1 */}
                      <option
                        style={{
                          borderBlockColor: "darkgrey",
                          borderInlineColor: "darkgrey",
                        }}
                        selected
                      >
                        Search by storage room
                      </option>
                      {/**option 2 */}
                      <option>room 1</option>
                      {/**option 3 */}
                      <option>room 2</option>
                    </select>
                  </div>

                  <div className="col-md-4">
                    {/**select category */}
                    <select
                      id="categorySelect"
                      className="form-control custom-select form-select"
                      value={category}
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                    >
                      {/**option 1 */}
                      <option
                        style={{
                          borderBlockColor: "darkgrey",
                          borderInlineColor: "darkgrey",
                        }}
                        selected
                      >
                        Search by category
                      </option>
                      {/**option 2 */}
                      <option>single specimen</option>
                      {/**option 3 */}
                      <option>collection</option>
                    </select>
                  </div>

                  <div className="col-md-4">
                    {/**select reason */}
                    <select
                      id="reasonSelect"
                      className="form-control custom-select form-select"
                      value={reason}
                      onChange={(e) => {
                        setReason(e.target.value);
                      }}
                    >
                      {/**option 1 */}
                      <option
                        style={{
                          borderBlockColor: "darkgrey",
                          borderInlineColor: "darkgrey",
                        }}
                        selected
                      >
                        Search by reason
                      </option>
                      {/**option 2 */}
                      <option>teaching</option>
                      {/**option 3 */}
                      <option>research</option>
                    </select>
                  </div>
                </div>
              </fieldset>
              <h6 className="align-self-center">OR</h6>
              <div className="d-flex justify-content-center p-2">
                <label className="border align-self-center p-2">
                  Click Here to Search by Location Using Maps
                </label>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset className="border p-4 d-flex flex-column justify-content-center">
        <legend className="float-none w-auto p-2">Results</legend>

        {results.map((result) => (
          <ResultCard
            sampleid={result.sampleid}
            longdesc={result.longdescription}
            category={result.category}
          />
        ))}
      </fieldset>
    </div>
  );
};

// advisorname: null
// ​​​
// category: "singlespecimen"
// ​​​
// collectionlocation: null
// ​​​
// collectionreason: null
// ​​​
// collectionyear: null
// ​​​
// collectorname: null
// ​​​
// formid: 1
// ​​​
// id: 1
// ​​​
// longdescription: "test sample"
// ​​​
// sampleform: null
// ​​​
// sampleid: "on-1-12-23"
// ​​​
// sampleimage: null
// ​​​
// sampletype: null
// ​​​
// shortdescription: null
// ​​​
// storagebuilding: null
// ​​​
// storageduration: null
// ​​​
// storageroom: null
// ​​​
// storagespecs: null
export default SearchPage;
