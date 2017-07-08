window.onload = function() {
  // Get buttons
  const btnAdd = document.querySelector('#new-data');
  const btnEdit = document.querySelector('#edit-data');
  const btnSave = document.querySelector('#save-data');
  const btnShare = document.querySelector('#share-data');
  const urlShare = document.querySelector('#share-url');
  const btnShareTwitter = document.querySelector('#share-twitter');
  const btnShareFacebook = document.querySelector('#share-facebook');
  const btnShareGoogle = document.querySelector('#share-google');

  var precision;
  var currentPos = window.location.href;
  var currentData, currentZoom, currentCenter;
  var twShare = 'https://twitter.com/intent/tweet?url=http%3A%2F%2Fopenplanetarymap.org%2F&text=OpenPlanetaryMap&via=opmteam&hashtags=mars,openplanetarymap';
  var fbShare = 'https://www.facebook.com/sharer.php?u=http%3A%2F%2Fopenplanetarymap.org%2F';
  var gpShare = 'https://plus.google.com/share?url=http%3A%2F%2Fopenplanetarymap.org%2F';

  // Initialise map
  var initMap = function () {

    var getData = document.getElementById("get-data");
    var getLatLng, getName, getDesc, getUrl;
    var map = new L.Map('test-map', {
      center: [0,0],
      zoom: 3,
      zoomControl: false
    });

    // Set basemap & view
    var baseUrl = 'https://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/';
    var shadedLayer = 'celestia_mars-shaded-16k_global/{z}/{x}/{y}.png';
    var basemapTexture = new L.tileLayer(baseUrl + shadedLayer, {
      minZoom: 1,
      maxZoom: 5,
      tms: true,
    }).addTo(map);

    // Reposition controls
    L.control.zoom({
      position: 'topright'
    }).addTo(map);

    // Add Leaflet-Hash plugin
    var hash = new L.Hash(map);

    // Create marker layer
    cartodb.createLayer(map, {
      https: true,
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
        getLatlng = 'Location: ' + data.long + ', ' + data.lat + ' (' + data.cartodb_id + ')';
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
        // Get current zoom level
        currentZoom = map.getZoom();
        // Get position of selected marker as url (rounded)
        precision = Math.max(0, Math.ceil(Math.log(currentZoom) / Math.LN2));
        // TODO: update temporary 'herokuapp' share url when redirect has been set up
        currentPos = 'https://openplanetarymap.herokuapp.com/sandbox/%23' + currentZoom + '/' + data.long.toFixed(precision) + '/' + data.lat.toFixed(precision);
        currentData = 'https://codemacabre.carto.com/api/v2/sql?format=geojson&q=SELECT+*+FROM+test_dataset+WHERE+cartodb_id+=+' + data.cartodb_id;
        btnSave.removeAttribute('disabled');
        btnSave.setAttribute('href', currentData);
        btnEdit.removeAttribute('disabled');
        updateShareURLs();
      });
      layer.on('mouseover', function() {
        $('#test-map').css('cursor', 'pointer');
      });
      layer.on('featureOut', function() {
        $('#test-map').css('cursor', 'grab');
      });
      map.on('dragend', function() {
        // Get current centered position as url (rounded)
        currentCenter = map.getCenter();
		    currentZoom = map.getZoom();
        precision = Math.max(0, Math.ceil(Math.log(currentZoom) / Math.LN2));
        currentPos = 'https://openplanetarymap.herokuapp.com/sandbox/%23' + currentCenter.lat.toFixed(precision) + '/' + currentCenter.lng.toFixed(precision);
        updateShareURLs();
      });
    });
  };

  function updateShareURLs() {
    twShare = 'https://twitter.com/intent/tweet?url=' + currentPos + '&text=OpenPlanetaryMap&via=opmteam&hashtags=mars,openplanetarymap';
    fbShare = 'https://www.facebook.com/sharer.php?u=' + currentPos;
    gpShare = 'https://plus.google.com/share?url=' + currentPos;

    urlShare.setAttribute('value', currentPos);
    btnShareTwitter.setAttribute('href', twShare);
    btnShareFacebook.setAttribute('href', fbShare);
    btnShareGoogle.setAttribute('href', gpShare);
  }
  initMap();
};
