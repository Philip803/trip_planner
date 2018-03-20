const mapboxgl = require("mapbox-gl");

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function (type, coords) {
  // Your Code Here

  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  markerDomEl.style.backgroundImage = `url(${iconURLs[type]})`;
  const marker = new mapboxgl.Marker(markerDomEl).setLngLat(coords); // [-87.6354, 41.8885] for Chicago
  return marker;
};




module.exports = {
  buildMarker
}
