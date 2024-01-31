import React from "react";

// initMap is now async
async function initMap() {
  // Request libraries when needed, not in the script tag.
  const { Map } = await google.maps.importLibrary("maps");
  // Short namespaces can be used.
  const map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();
