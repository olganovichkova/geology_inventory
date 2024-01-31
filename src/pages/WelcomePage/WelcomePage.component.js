import React from "react";

export const WelcomePage = () => {
  return (
    <div className="d-flex justify-content-center" style={{ width: "100%" }}>
      <div
        className="card border-dark text-center mb-3"
        style={{ maxWidth: "80%", position: "relative" }}
      >
        <div className="card-body">
          <h2 className="card-title">Geo-science Sample Database</h2>
          <p className="card-text ms-3 me-3">
            Welcome to the Geo-science sample database. This database was
            created to help staff and students find, search, and organize the
            entire rock collection/invenory here at Idaho State University. To
            continue, please make a selection from one of the following options.
          </p>
          <div
            className="d-flex justify-content-center btn-grouping mt-3"
            style={{}}
          >
            <a href="search" className="btn btn-lg btn-outline-dark mr-3">
              Search the Database
            </a>
            <a href="newentry" className="btn btn-lg btn-outline-dark ml-3">
              New Sample Entry Form
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WelcomePage;
