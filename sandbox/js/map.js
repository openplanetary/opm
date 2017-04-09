// Initialise map
var initMap = function () {
  var map = new L.Map('test-map', {
    center: [0,0],
    zoom: 3
  });

  // Set basemap & view
  var baseUrl = 'http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/';
  var shadedLayer = 'celestia_mars-shaded-16k_global/{z}/{x}/{y}.png';
  var basemapTexture = new L.tileLayer(baseUrl + shadedLayer, {
    minZoom: 1,
    maxZoom: 5,
    tms: true,
  }).addTo(map);

  // create a layer with 1 sublayer
  cartodb.createLayer(map, {
    user_name: 'codemacabre',
    type: 'cartodb',
    sublayers: [{
      sql: "SELECT * FROM hydrous_sites_geo_map",
      cartocss: '#hydrous_sites_geo_map {marker-fill: #F0F0F0;}'
    }]
  })
  .addTo(map) // add the layer to our map which already contains 1 sublayer
  .done(function(layer) {

    // create and add a new sublayer
    layer.createSubLayer({
      sql: "SELECT * FROM hydrous_sites_geo_map limit 200",
      cartocss: '#hydrous_sites_geo_map {marker-fill: #F0F0F0;}'
    });

    // change the query for the first layer
    layer.getSubLayer(0).setSQL("SELECT * FROM hydrous_sites_geo_map limit 10");
  });
};
initMap();
