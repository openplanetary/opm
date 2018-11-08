/*
  In this script, the function initMap() define call all the raster tiles and define their properties.
  Also, this script call the different Leafelt elements that are used (scale, zoom control and graticule).
  The garticule is a Leaflet plugin called Leaflet.SimpleGraticule (maintainer: Andrew Blakey).
  The raster tiles called in this script are the basemaps, the HRSC images and HiRISE images.
  This script also define the coordinates of the center of each landing site.
*/

// 	define function that initiates the map element
var initMap = function(){
  // define map
  el.map =  new L.Map('map', {
        center: [15,-11],
        zoom: 3,
        minZoom: 2,
        zoomControl: false,
      });

  // control zoom and control scale
    new L.control.zoom({position : 'topright'}).addTo(el.map);
    new L.control.scale({metric: true,imperial: false, position: 'bottomright'}).addTo(el.map);

  // define graticule
    el.graticuleOptions = {interval: 20,
               showOriginLabel: false,
               redraw: 'move'};

    el.graticule = L.simpleGraticule(el.graticuleOptions).addTo(el.map);

    baseURL = 'https://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/';

    // define MOLA gray basemap
    el.basemapMOLAGray = new L.tileLayer(baseURL+'mola-gray/{z}/{x}/{y}.png', {
     tms:true,
     maxNativeZoom: 9,
    }).setZIndex(0);


    // define the no shaded color MOLA basemap
    el.basemapMOLANoShadedColor = new L.tileLayer(baseURL+'mola_color-noshade_global/{z}/{x}/{y}.png', {
     tms:true,
     maxNativeZoom: 6,
     opacity:0.5,
    });

    // define the color MOLA basemap
    el.basemapMOLAShadedColor = new L.tileLayer(baseURL+'mola-color/{z}/{x}/{y}.png', {
     tms: true,
     maxNativeZoom: 6,
     attribution: 'NASA/MOLA',
    }).setZIndex(0);

    // define the Celestia basemap
    el.basemapCelestia = new L.tileLayer(baseURL+'celestia_mars-shaded-16k_global/{z}/{x}/{y}.png', {
     tms:true,
     maxNativeZoom: 5,
   }).addTo(el.map).setZIndex(0);
   // define the Viking basemap
    el.basemapViking = new L.tileLayer(baseURL+'viking_mdim21_global/{z}/{x}/{y}.png', {
     tms:true,
     maxNativeZoom: 7,
     attribution: 'NASA/Viking MDIM2.1'
    }).setZIndex(0);

  // call the SQL API from cartodb
  var sql = new cartodb.SQL({ user: 'whereonmars'});
   sql.execute("SELECT * FROM exols_raster_tiles_HRSC ORDER BY cartodb_id ASC")
   .done(function(data){
     el.hrsc = {};
     // loop that read each row of cartodb table and add  hrsc layers
         for (i = 0; i < data.total_rows; i++){
            el.hrsc[i]= L.tileLayer(baseURL+data.rows[i].url,{
            tms:true,
            minZoom: 7,
            opacity: 1.0,
            attribution: 'ESA/HRSC',
            unloadInvisibleTiles: true, // If true, all the tiles that are not visible after panning are removed
            updateWhenIdle: false, // If false, new tiles are loaded during panning, otherwise only after it (when true)
            maxNativeZoom: 9
          }).addTo(el.map).setZIndex(1);
        } // finish the  raster_tiles_HRSC loop

        // the raster layers called with cartodb.js
        // are attach to the checkbox menu in the html file
        var checkbox = $('input.raster:checkbox'),
        $MOLA1 = $('#MOLA1')
        $MOLA1.change(function(){
            if ($MOLA1.is(':checked')){ // if checkbox is selected, then show layer
              el.map.addLayer(el.basemapMOLAGray);
            }else{ // else (not selected), hide layer
              el.map.removeLayer(el.basemapMOLAGray);
            };
        });
        $MOLA2 = $('#MOLA2')
        $MOLA2.change(function(){
              if ($MOLA2.is(':checked')){
                el.map.addLayer(el.basemapMOLAShadedColor);
              }else{
                el.map.removeLayer(el.basemapMOLAShadedColor);
              }
        });
        $MOLA3 = $('#MOLA3')
        $MOLA3.change(function(){
          if ($MOLA3.is(':checked')){
            el.map.addLayer(el.basemapMOLANoShadedColor);
          }else{
            el.map.removeLayer(el.basemapMOLANoShadedColor);
          }
        });
        $shaded = $('#shaded')
        $shaded.change(function(){
                if ($shaded.is(':checked')){
                  el.map.addLayer(el.basemapCelestia);
                }else{
                  el.map.removeLayer(el.basemapCelestia);
                }
              });
        $viking = $('#viking')
        $viking.change(function(){
                if ($viking.is(':checked')){
                  el.map.addLayer(el.basemapViking);
                }else{
                  el.map.removeLayer(el.basemapViking);
                }
              });
        $HRSC1 = $('#HRSC1')
        $HRSC1.change(function(){
                  if ($HRSC1.is(':checked')){
                    el.map.addLayer(el.hrsc[0]);
                  }else{
                    el.map.removeLayer(el.hrsc[0]);
                  }
                });
        $HRSC2 = $('#HRSC2')
        $HRSC2.change(function(){
                  if ($HRSC2.is(':checked')){
                    el.map.addLayer(el.hrsc[1]);
                  }else{
                    el.map.removeLayer(el.hrsc[1]);
                  }
                });
        $HRSC3 = $('#HRSC3')
        $HRSC3.change(function(){
                  if ($HRSC3.is(':checked')){
                    el.map.addLayer(el.hrsc[2]);
                  }else{
                    el.map.removeLayer(el.hrsc[2]);
                  }
                });
        $HRSC4 = $('#HRSC4')
        $HRSC4.change(function(){
                  if ($HRSC4.is(':checked')){
                    el.map.addLayer(el.hrsc[3]);
                  }else{
                    el.map.removeLayer(el.hrsc[3]);
                  }
                });
    }); // finish .done(function()) where all the layers are called

    /* Calls the SQL API of CartoDB to add the URL of the tile layers stored in the account */
    sql.execute("SELECT * FROM exols_raster_tiles_HIRISE ORDER BY cartodb_id ASC")
    .done(function(data){
      el.hirise = {};
      for (i = 0; i < data.total_rows; i++){
        el.hirise[i] = new L.tileLayer(baseURL+data.rows[i].url,{
          tms:true,
          opacity: 1.0,
          minZoom: 9,
          attribution: 'NASA/HIRISE',
          unloadInvisibleTiles: true, // If true, all the tiles that are not visible after panning are removed
          updateWhenIdle: true, // If false, new tiles are loaded during panning, otherwise only after it (when true)
          maxNativeZoom: 16
        }).addTo(el.map).setZIndex(2);
        } // finish the raster_tiles_HIRISE loop

        // attach HIRISE layers to th checkbox defined in the html file
        var checkbox = $('input.raster:checkbox'),
        $HIRISE1 = $('#HIRISE1') // call HiRISE layer of Aram Dorsum
        $HIRISE1.change(function(){
                  if ($HIRISE1.is(':checked')){
                    el.map.addLayer(el.hirise[0]);
                  }else{
                    el.map.removeLayer(el.hirise[0]);
                    }
        });
        $HIRISE2 = $('#HIRISE2') /// call HiRISE layer of Oxia Planum
        $HIRISE2.change(function(){
                  if ($HIRISE2.is(':checked')){
                    el.map.addLayer(el.hirise[1]);
                  }else{
                    el.map.removeLayer(el.hirise[1]);
                  }
        });
        $HIRISE3 = $('#HIRISE3') // call HiRISE layer of Mawrth Vallis
        $HIRISE3.change(function(){
                  if ($HIRISE3.is(':checked')){
                    el.map.addLayer(el.hirise[2]);
                  }else{
                    el.map.removeLayer(el.hirise[2]);
                  }
        });
        $HIRISE4 = $('#HIRISE4') // call HiRISE layer of Hypanis Vallis
        $HIRISE4.change(function(){
                  if ($HIRISE4.is(':checked')){
                    el.map.addLayer(el.hirise[3]);
                  }else{
                    el.map.removeLayer(el.hirise[3]);
                  }
        });
      });

  // define coordinates of the center of the different Landing Sites
  el.Aram = new L.LatLng(7.87, -11.2);
  el.Hypanis = new L.LatLng(11.97, -46.15);
  el.Oxia = new L.LatLng(18.4, -24.24);
  el.Mawrth = new L.LatLng(22.16, -17.95);
  el.center = new L.LatLng(15,-11);
  el.center4 = new L.LatLng(16,-32);

} // finish initMap function
