const body = document.querySelector('#landing-page');
const bodyText = document.querySelector('#body-text');
const btnShowHide = document.querySelector('#show-hide-btn');
var textVisible = true;

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
function initMap() {
  var map = L.map('map', {
    zoomControl: false,
    scrollWheelZoom: false, // possibly re-enable
    center: [0, 0],
    maxBounds: [
      [-90, -Infinity],
      [90, Infinity],
    ],
    maxBoundsViscosity: 1.0
  }).setView([11.8, -45.04], 3);

  var hash = new L.Hash(map);
  var baseUrl = 'http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/';
  var opmAttribution = '<a href="https://github.com/openplanetary/opm/wiki/OPM-Basemaps" target="blank">OpenPlanetaryMap</a>'

  // Set basemaps
<<<<<<< HEAD
  var OPM_MarsBasemap_noLabels = new L.tileLayer('https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-1/0,1,2,3,4/{z}/{x}/{y}.png', {
=======
  var OPM_MarsBasemap_noLabels = new L.tileLayer('https://cartocdn-ashbu.global.ssl.fastly.net/nmanaud/api/v1/map/named/opm-mars-basemap-v0-1/0,1,2,3,4/{z}/{x}/{y}.png', {
>>>>>>> master
    maxNativeZoom: 9,
    zoom: 3,
    tms: false,
    attribution: opmAttribution
  }).addTo(map).setZIndex(0);

  var basemapTexture = new L.tileLayer(baseUrl + 'celestia_mars-shaded-16k_global/{z}/{x}/{y}.png', {
    maxNativeZoom: 9,
    zoom: 3,
    tms: true,
    attribution: 'Celestia/praesepe | ' + opmAttribution
  });

  var basemapMOLAGrey = new L.tileLayer(baseUrl + 'mola-gray/{z}/{x}/{y}.png', {
    attribution: 'NASA/MOLA | ' + opmAttribution,
    tms:true,
    maxNativeZoom: 9,
  });

  var basemapMOLAColor = new L.tileLayer(baseUrl + 'mola-color/{z}/{x}/{y}.png', {
    attribution: 'NASA/MOLA | ' + opmAttribution,
    tms: true,
    maxNativeZoom: 6,
  });

  var basemapViking = new L.tileLayer(baseUrl + 'viking_mdim21_global/{z}/{x}/{y}.png', {
    attribution: 'NASA/Viking/USGS | ' + opmAttribution,
    tms:true,
    maxNativeZoom: 7,
  });

  var basemapHillshade = new L.tileLayer('https://s3.us-east-2.amazonaws.com/opmmarstiles/hillshade-tiles/{z}/{x}/{y}.png', {
    attribution: 'NASA/MOLA | ' + opmAttribution,
    tms:true,
    maxNativeZoom: 7,
  });

<<<<<<< HEAD
  var overlay = new L.tileLayer('https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-1/5/{z}/{x}/{y}.png', {
=======
  var overlay = new L.tileLayer('https://cartocdn-ashbu.global.ssl.fastly.net/nmanaud/api/v1/map/named/opm-mars-basemap-v0-1/5/{z}/{x}/{y}.png', {
>>>>>>> master
    tms: false,
    opacity: 1,
    attribution: 'USGS'
  });

  var baseMaps = {
    // "OPM Mars Basemap v0.1": OPM_MarsBasemap,
    "OPM Mars Basemap (no labels) v0.1": OPM_MarsBasemap_noLabels,
    "OPM Shaded Mars Surface Texture Map": basemapTexture,
    "OPM Shaded Grayscale MOLA Elevation": basemapMOLAGrey,
    "OPM Shaded Colour MOLA Elevation": basemapMOLAColor,
    "OPM Global Viking MDIM2.1 Colorized Mosaic": basemapViking,
    "OPM Global Hillshade Map": basemapHillshade
  };

  var overlayMaps = {
    "OPM Mars Basemap (v0.1) Labels": overlay
  };

  L.control.layers(baseMaps, overlayMaps,{position: 'topright'}).addTo(map);
  L.control.zoom({position: 'bottomright'}).addTo(map);

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

    markerArray = [
      ["marker1", marker1Y, marker1X],
      ["marker2", marker2Y, marker2X],
      ["marker3", marker3Y, marker3X],
      ["marker4", marker4Y, marker4X],
      ["marker5", marker5Y, marker5X],
      ["marker6", marker6Y, marker6X]
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
  }
<<<<<<< HEAD

=======
    
>>>>>>> master
  btnShowHide.addEventListener('click', function() {
    if (textVisible) {
      console.log('Hiding text...');
      body.style.overflowY = 'hidden';
      bodyText.style.transform = 'translateY(200%)';
      btnShowHide.innerHTML = '<i class="fa fa-chevron-circle-up" aria-hidden="true" title="Show"></i>';
      textVisible = false;
      bodyText.addEventListener('transitionend', function(event) {
        body.style.overflowY = 'hidden';
      }, false);
      map.addLayer(overlay);
    } else {
      console.log('Showing text...');
      map.removeLayer(overlay);
      bodyText.style.transform = 'translateY(0%)';
      btnShowHide.innerHTML = '<i class="fa fa-chevron-circle-down" aria-hidden="true" title="Hide"></i>';
      textVisible = true;
      bodyText.addEventListener('transitionend', function(event) {
        body.style.overflowY = 'auto';
      }, false);
    }
    return false;
  });
}

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

<<<<<<< HEAD
initMap();
=======
initMap();
>>>>>>> master
