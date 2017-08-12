window.onload = function() {
  // Get buttons
  const btnNew = document.querySelector('#new-data');
  const btnEdit = document.querySelector('#edit-data');
  const btnSave = document.querySelector('#save-data');
  const btnShare = document.querySelector('#share-data');
  const urlShare = document.querySelector('#share-url');
  const btnShareTwitter = document.querySelector('#share-twitter');
  const btnShareFacebook = document.querySelector('#share-facebook');
  const btnShareGoogle = document.querySelector('#share-google');
  // const btnSubmitNew = document.querySelector('#new-submit');
  // btnSubmitNew.addEventListener('click', submitNewData);
  const btnSubmitEdit = document.querySelector('#edit-submit');
  btnSubmitEdit.addEventListener('click', submitEditedData);

  // Get input fields
  const getData = document.querySelector('#get-data');
  const editLoc = document.querySelector('#txt-loc');
  const editName = document.querySelector('#txt-name');
  const editDesc = document.querySelector('#txt-desc');
  const editUrl = document.querySelector('#txt-url');

  // Url templates
  var currentPos = window.location.href;
  var baseOPMUrl = 'https://openplanetarymap.herokuapp.com/sandbox/%23';
  var baseOPMUrlHash = 'https://openplanetarymap.herokuapp.com/sandbox/#';
  var twShare = 'https://twitter.com/intent/tweet?url=http%3A%2F%2Fopenplanetarymap.org%2F&text=OpenPlanetaryMap&via=opmteam&hashtags=mars,openplanetarymap';
  var fbShare = 'https://www.facebook.com/sharer.php?u=http%3A%2F%2Fopenplanetarymap.org%2F';
  var gpShare = 'https://plus.google.com/share?url=http%3A%2F%2Fopenplanetarymap.org%2F';

  var getLat, getLng, getSelectedID, getName, getDesc, getUrl;
  var editedData = '';
  var builtSQLQuery;
  var currentData, currentZoom, currentCenter;
  var precision;
  var userAPI = process.env.CARTO_API_CM;

  // Initialise map
  var initMap = function () {
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
      user_name: 'codemacabre',
      type: 'cartodb',
      sublayers: [{
        sql: 'SELECT *, st_x(the_geom) as lat, st_y(the_geom) as long FROM test_dataset WHERE the_geom IS NOT null',
        cartocss: '#test_dataset {marker-fill: #F0F0F0;}',
        interactivity: 'cartodb_id, lat, long'
      }]
    }, {
      https: true
    })
    .addTo(map)
    .on('done', function(layer) {
      layer.setInteraction(true);
      layer.on('featureClick', function(e, latlng, pos, data) {
        getSelectedID = data.cartodb_id;
        getLat = data.lat;
        getLng = data.long;
        if(data.name) {
          getName = data.name;
        } else {
          getName = 'no data';
        }
        if(data.desc) {
          getDesc = data.desc;
        } else {
          getDesc = 'no data';
        }
        if(data.url) {
          getUrl = data.url;
        } else {
          getUrl = 'no data';
        }
        // Set data txt inputs
        getData.value = 'Location: ' + getLng + ', ' + getLat + ' (' + getSelectedID + ')\nName: '  + getName + '\nDescription: ' + getDesc + '\nUrl: ' + getUrl;
        editLoc.value = getLat + ', ' + getLng;
        editName.value = getName;
        editDesc.value = getDesc;
        editUrl.value = getUrl

        // Get current zoom level
        currentZoom = map.getZoom();

        // Get position of selected marker as url (rounded)
        precision = Math.max(0, Math.ceil(Math.log(currentZoom) / Math.LN2));

        // Set Urls
        currentPos = baseOPMUrl + currentZoom + '/' + data.long.toFixed(precision) + '/' + data.lat.toFixed(precision);
        currentPosHash = baseOPMUrlHash + currentZoom + '/' + data.long.toFixed(precision) + '/' + data.lat.toFixed(precision);
        currentData = 'https://codemacabre.carto.com/api/v2/sql?format=geojson&q=SELECT+*+FROM+test_dataset+WHERE+cartodb_id+=+' + getSelectedID;
        btnSave.removeAttribute('disabled');
        btnSave.setAttribute('href', currentData);
        btnEdit.removeAttribute('disabled');
        updateShareUrls();
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
        currentPos = baseOPMUrl + currentCenter.lat.toFixed(precision) + '/' + currentCenter.lng.toFixed(precision);
        currentPosHash = baseOPMUrlHash + currentCenter.lat.toFixed(precision) + '/' + currentCenter.lng.toFixed(precision);
        updateShareUrls();
      });
    });
  };

  function updateShareUrls() {
    twShare = 'https://twitter.com/intent/tweet?url=' + currentPos + '&text=OpenPlanetaryMap&via=opmteam&hashtags=mars,openplanetarymap';
    fbShare = 'https://www.facebook.com/sharer.php?u=' + currentPos;
    gpShare = 'https://plus.google.com/share?url=' + currentPos;

    urlShare.setAttribute('value', currentPosHash);
    btnShareTwitter.setAttribute('href', twShare);
    btnShareFacebook.setAttribute('href', fbShare);
    btnShareGoogle.setAttribute('href', gpShare);
  }

  function submitEditedData() {
    // Compare old values with edits (Name, Desc, etc.)
    if(editName.value === getName && editDesc.value === getDesc && editUrl.value === getUrl) {
      alert('No edits detected!');
      return;
    } else {
      editedData += 'name=\'' + editName.value + '\',description=\'' + editDesc.value + '\',url=\'' + editUrl.value + '\'+';
    }
    // Submit SQL query
    builtSQLQuery = 'https://codemacabre.carto.com/api/v2/sql?q=UPDATE+test_dataset+SET+' + editedData + 'WHERE+cartodb_id+=+' + getSelectedID + '&api_key=' + userAPI;
    location.href = builtSQLQuery;
    alert('Edited data submitted! Refresh page to update or make another edit.');
  }
  initMap();
};
