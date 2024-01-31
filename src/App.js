import React from "react";
import logo from "./logo.svg";
import "../src/styles/styles.css";
import { EntryFormPage } from "./pages/EntryFormPage";
import SearchPage from "./pages/SearchPage/SearchPage.component";
import { WelcomePage } from "./pages/WelcomePage";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import { MapContainer } from "./components/Map/Map.component";

function App() {
  return (
    <div className="container-fluid page justify-content-center d-flex">
      {/* <div className="App">
        <MapContainer />
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<WelcomePage />} />

          <Route path="/newentry" element={<EntryFormPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
