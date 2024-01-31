import React, { useState, useRef } from "react";
import {
  Polygon,
  GoogleMap,
  DrawingManager,
  useJsApiLoader,
} from "@react-google-maps/api";

const libraries = ["places", "drawing"];

export const Map = () => {
  const [polygon, setPolygon] = useState();
  const [polygonRef, setPolygonRef] = useRef();
  const [mapRef, setMapRef] = useRef();

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyD1l-rfRNdiTIUTN8YkmK96cbjqoeN48pc",
    libraries,
  });

  const defaultCenter = {
    lat: 42.87,
    lng: -112.47,
  };
  const [center, setCenter] = useState(defaultCenter);

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const polygonOptions = {
    fillOpacity: 0.2,
    fillColor: "#f47920",
    strokeColor: "#f47920",
    strokeWeight: 2,
    draggable: false,
    editable: false,
  };

  // Util to create a polygon with options
  const createPolygon = (path) => {
    const polygon = new window.google.maps.Polygon({
      path: path,
      polygonOptions,
    });

    return polygon;
  };

  // When first drawing is complete and edit has been made, this function is run
  const onPolygonComplete = (polygon, destroy = false) => {
    setPolygon(
      createPolygon(
        polygon
          .getPath()
          .getArray()
          .map((latLng) => ({ lat: latLng.lat(), lng: latLng.lng() }))
      )
    );

    // Destroys the polygon that has been drawn by the manager.
    if (destroy) {
      polygon.setMap(null);
    }
  };

  // Set the ref
  const onPolygonLoad = (polygon) => setPolygonRef(polygon);

  const onMapLoad = (map) => setMapRef(map);

  // Update the polygon
  const onPolygonMouseUp = () => onPolygonComplete(polygonRef);

  const polygonProps = polygon
    ? {
        path: polygon.latLng,
        editable: polygon.editable,
        clickable: polygon.clickable,
        options: {
          fillOpacity: polygon.fillOpacity,
          strokeWeight: polygon.strokeWeight,
        },
      }
    : null;

  return isLoaded ? (
    <div className="map-container" style={{ position: "relative" }}>
      {/* {drawingManagerRef.current && (
        <div
          onClick={onDeleteDrawing}
          title="Delete shape"
          style={deleteIconStyle}
        ></div>
      )} */}

      <GoogleMap
        zoom={15}
        center={center}
        onLoad={onMapLoad}
        mapContainerStyle={containerStyle}
        onTilesLoaded={() => setCenter(null)}
        // streetView={false}
        mapTypeId="terrain"
      >
        {polygon ? (
          <Polygon
            {...polygonProps}
            onLoad={onPolygonLoad}
            onMouseUp={onPolygonMouseUp}
          />
        ) : (
          <DrawingManager
            drawingMode={"polygon"}
            onPolygonComplete={(polygon) => onPolygonComplete(polygon, true)}
          />
        )}
      </GoogleMap>
    </div>
  ) : null;
};

export default Map;
