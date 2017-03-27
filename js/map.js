var minX, maxX, minY, maxY;
var markerArray = [];
var markerGroup = [];
var markers = [];

// Define CSS icon
var cssIcon = L.divIcon({
  className: 'marker-blip',
  html: '<div class="innerblip"><div class="outerblip"></div</div>',
  iconSize: [10, 10],
});

// Initialise map
var initMap = function () {
  var map = L.map('map', {
    zoomControl: false,
    scrollWheelZoom: false,
    center: [0, 0],
    maxBounds: [
      [-90, -Infinity],
      [90, Infinity],
    ],
    maxBoundsViscosity: 1.0
  }).setView([11.8, -45.04], 3);

  // Set basemap & view
  var baseUrl = 'http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/';
  var shadedLayer = 'celestia_mars-shaded-16k_global/{z}/{x}/{y}.png';
  var basemapTexture = new L.tileLayer(baseUrl + shadedLayer, {
    minZoom: 3,
    maxZoom: 3,
    tms: true,
    attribution: 'Celestia/praesepe'
  }).addTo(map).setZIndex(-99);

  // Get initial bounds
  minX = map.getBounds().getWest();
  maxX = map.getBounds().getEast();
  minY = map.getBounds().getSouth();
  maxY = map.getBounds().getNorth();
  randomPos();

  // Update bounds on map drag
  map.on('dragend', function onDragEnd() {
    markers = [];
    map.removeLayer(markerGroup);

    minX = map.getBounds().getWest();
    maxX = map.getBounds().getEast();
    minY = map.getBounds().getSouth();
    maxY = map.getBounds().getNorth();
    randomPos();
    });

    // Get random postions within current view
    function randomPos () {

      var marker1X = Math.random() * (maxX - minX + 1) + minX;
      var marker1Y = Math.random() * (maxY - minY + 1) + minY;
      var marker2X = Math.random() * (maxX - minX + 1) + minX;
      var marker2Y = Math.random() * (maxY - minY + 1) + minY;
      var marker3X = Math.random() * (maxX - minX + 1) + minX;
      var marker3Y = Math.random() * (maxY - minY + 1) + minY;
      var marker3X = Math.random() * (maxX - minX + 1) + minX;
      var marker3Y = Math.random() * (maxY - minY + 1) + minY;
      var marker4X = Math.random() * (maxX - minX + 1) + minX;
      var marker4Y = Math.random() * (maxY - minY + 1) + minY;
      var marker5X = Math.random() * (maxX - minX + 1) + minX;
      var marker5Y = Math.random() * (maxY - minY + 1) + minY;
      var marker6X = Math.random() * (maxX - minX + 1) + minX;
      var marker6Y = Math.random() * (maxY - minY + 1) + minY;
      // var marker7X = Math.random() * (maxX - minX + 1) + minX;
      // var marker7Y = Math.random() * (maxY - minY + 1) + minY;
      // var marker8X = Math.random() * (maxX - minX + 1) + minX;
      // var marker8Y = Math.random() * (maxY - minY + 1) + minY;

      markerArray = [
    		["marker1", marker1Y, marker1X],
    		["marker2", marker2Y, marker2X],
        ["marker3", marker3Y, marker3X],
        ["marker4", marker4Y, marker4X],
        ["marker5", marker5Y, marker5X],
    		["marker6", marker6Y, marker6X],
        // ["marker7", marker7Y, marker7X],
        // ["marker8", marker8Y, marker8X]
  		];

      for (var i = 0; i < markerArray.length; i++) {
		    var tempMarker = new L.marker(
          [markerArray[i][1], markerArray[i][2]], {
            icon: cssIcon,
            clickable: false
          });
        markers.push(tempMarker);
      }
      markerGroup = new L.layerGroup(markers);
      map.addLayer(markerGroup);
      animDelay();
    };
};

function animDelay() {
  var outerAnims = document.querySelectorAll('.outerblip');
  var innerAnims = document.querySelectorAll('.innerblip');
  var maxDelay = 2000;

  for (var i = 0; i < outerAnims.length; i++) {
    var randomDuration = Math.floor(Math.random() * maxDelay);
    outerAnims[i].style.animationDelay = randomDuration + 'ms';
    innerAnims[i].style.animationDelay = (randomDuration - 50) + 'ms';
  }
}

initMap();
