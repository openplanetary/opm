var initMap = function () {
  // var bounds = new L.LatLngBounds(new L.LatLng(90, -Infinity), new L.LatLng(-90, Infinity));

  var map = L.map('map', {
    zoomControl: false,
    center: [0, 0],
    maxBounds: [
      [-90, -Infinity],
      [90, Infinity],
    ],
    maxBoundsViscosity: 1.0
  }).setView([11.8, -45.04], 3);
  map.scrollWheelZoom.disable();

  var hash = new L.Hash(map);
  var baseUrl = 'http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/';
  var shadedLayer = 'celestia_mars-shaded-16k_global/{z}/{x}/{y}.png';

  var basemapTexture = new L.tileLayer(baseUrl + shadedLayer, {
    minZoom: 3,
    maxZoom: 3,
    tms: true,
    attribution: 'Celestia/praesepe'
  }).addTo(map).setZIndex(-99);
};
initMap();
