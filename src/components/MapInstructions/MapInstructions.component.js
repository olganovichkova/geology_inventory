import React from "react";

export const MapInstructions = () => {
  return (
    <>
      <label for="instructions">
        Instructions on drawing a Polygon to Select Location of Sample
        Collection
      </label>
      <div className="p-1">
        <small className="form-text text-muted">
          Step 1. Zoom into the area where the sample was collected from.
        </small>
      </div>
      <div className="p-1">
        <small className="form-text text-muted">
          Step 2. After the desired location is in the center of the
          map(approximately), select the polygon shape from the top center of
          the map.
        </small>
      </div>
      <div className="p-1">
        <small className="form-text text-muted">
          Step 3. Add the starting point for the polygon by clicking a spot on
          the map.(Goal is to draw a polygon around the region of where the
          sample was collected from)
        </small>
      </div>
      <div className="p-1">
        <small className="form-text text-muted">
          Step 4. Continue adding points on the map by clicking to draw around
          the area desired.
        </small>
      </div>
      <div className="p-1">
        <small className="form-text text-muted">
          Step 5. To complete the polygon, click on the first point or just
          double click another point and it will close the polygon.
        </small>
      </div>
      <div className="p-1">
        <small className="form-text text-muted">
          Step 6. If the polygon is not in the desired location, select the hand
          icon from the top center of the map and now drag and drop the polygon
          to the correct location.
        </small>
      </div>
      <div className="p-1">
        <small className="form-text text-muted">
          Alternatively, if you wish to redraw the polygon, select the hand icon
          from the top center of the map and click on the polygon and then click
          on the trashcan icon in the top center of the map. Then repeat steps
          2-6.
        </small>
      </div>
    </>
  );
};

export default MapInstructions;
