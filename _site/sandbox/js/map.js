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

  // Create marker layer
  cartodb.createLayer(map, {
    user_name: 'codemacabre',
    type: 'cartodb',
    sublayers: [{
      sql: 'SELECT * FROM hydrous_sites_geo_map',
      cartocss: '#hydrous_sites_geo_map {marker-fill: #F0F0F0;}',
      interactivity: 'the_geom'
    }]
  })
  .addTo(map)
  .on('done', function(layer) {
    layer.setInteraction(true);
    layer.on('featureClick', function(e, latlng, pos, data) {
      console.log('data.the_geom: ' + data.the_geom);
      console.log('pos: ' + pos.x + ', ' + pos.y);
      console.log('latlng: ' + latlng[0] + ', ' + latlng[1]);

    });
    layer.on('mouseover', function() {
      $('#test-map').css('cursor', 'pointer');
    });
    layer.on('featureOut', function() {
      $('#test-map').css('cursor', 'grab');
    });
  });
};
initMap();
