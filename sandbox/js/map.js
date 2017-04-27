// Initialise map
var initMap = function () {

  var getData = document.getElementById("get-data");
  var getLatLng, getName, getDesc, getUrl;
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
      sql: 'SELECT *, st_x(the_geom) as lat, st_y(the_geom) as long FROM test_dataset WHERE the_geom IS NOT null',
      cartocss: '#test_dataset {marker-fill: #F0F0F0;}',
      interactivity: 'cartodb_id, lat, long'
    }]
  })
  .addTo(map)
  .on('done', function(layer) {
    layer.setInteraction(true);
    layer.on('featureClick', function(e, latlng, pos, data) {
      getLatlng = 'Location: ' + data.lat + ', ' + data.long + ' (' + data.cartodb_id + ')';
      if(data.name) {
        getName = 'Name: ' + data.name;
      } else {
        getName = 'Name: no data';
      }
      if(data.desc) {
        getDesc = 'Description: ' + data.desc;
      } else {
        getDesc = 'Description: no data';
      }
      if(data.url) {
        getUrl = 'Url: ' + data.url;
      } else {
        getUrl = 'Url: no data';
      }
      getData.value = getLatlng + '\n' + getName + '\n' + getDesc + '\n' + getUrl;
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
