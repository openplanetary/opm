/*
This file has two main functions, the startStory() and cartodbData() functions.
startStory() allows to load the app in a specific slide.
cartodbData() call and give style to all the layers that are stored in cartoDB.
At the last part of the cartodbData() function, there are defined the infowindow and tooltip interactivity of some layers.
*/


// function that allows to load the app in a specific slide / hash. It is called in the end of the cartodbData function
  var startStory = function() {
      if (location.hash != "") {
        var chapter = parseInt(location.hash.replace('#', ''), 10);
        //el.story.go(chapter);
        checkIndex(chapter);
        window.onhashchange = function(){
          var chapter1 = parseInt(location.hash.replace('#', ''), 10);
          el.story.go(chapter1,seq.step(chapter1));
          //checkIndex(chapter);
          $("li").removeClass("active");
          $("li#" + chapter1).addClass("active");
        }
        $("li").removeClass("active");
        $("li#" + chapter).addClass("active");
      } else {
        el.story.go(0,seq.step(0));
      }

    }


// call data from cartoDB account
  var cartodbData = function(){

  var layerURL = 'http://whereonmars.cartodb.com/api/v2/viz/03ec7c7c-bc6a-11e4-b600-0e4fddd5de28/viz.json';

  // create cartoDB layer from the previous URL
  cartodb.createLayer(el.map, layerURL)
  .on('done', function(layer) {
      layer.setZIndex(100); // all cartoDB layer will be above all the baselayers
      var sublayer = layer.getSubLayer(0);

      //sublayer.infowindow.set('template', $('#infowindow_template').html());

    // The variables style1, style2, style3 and style4 define the styles of the layers  landingSite, landingSite8,nomenclatorGlobal
    // and nomenclatorRegional. They have been defined in this way to define better the labels of the layers.

    var style1 = [
      '#exols_exomars_landing_sites_four{',
        '	 marker-placement: point;',
        '	 marker-width: 10;',
        '	 marker-line-width: 1;',
        '	 marker-type: ellipse;',
        '	 marker-fill: #f11810;',
        '	 marker-fill-opacity: 1;',
        '	 text-name: [name];',
        '  text-face-name: "DejaVu Sans Book";',
        '  text-size: 9;',
        '  text-label-position-tolerance: 0;',
        '  text-fill: #FFF;',
        '  text-halo-fill: #000;',
        '  text-halo-radius: 8;',
        '  text-dx: 20;',
        '  text-allow-overlap: true;',
        '  text-placement: point;',
        '	[cartodb_id = 3]{',
            '  text-dx: -20;',
          '}',
          '	[cartodb_id = 6]{',
              '  text-dx: 20;',
            '}',
      '}'
    ].join('\n');

    // var style2 = [
    // "#exols_exomars_landing_sites_eight{",
    //   'marker-fill-opacity: 0.9;',
    //   'marker-line-color: #FFF;',
    //   'marker-line-width: 1.5;',
    //   '[selected = 0]{',
    //   '  marker-line-opacity: 0;',
    //   '}',
    //   '[selected = 1]{',
    //   '  marker-line-opacity: 1;',
    //   '}  ',
    //   'marker-placement: point;',
    //   'marker-type: ellipse;',
    //   'marker-width: 10;',
    //   'marker-fill: #FF5C00;',
    //   '[name = "Oxia Planum"]{',
    //   '  marker-fill: #FFF;',
    //   '}',
    //   'marker-allow-overlap: true;',
    // '}',
    // '#exols_exomars_landing_sites_eight::labels {',
    // '  text-name: [name];',
    // '  text-face-name: "Lato Bold";',
    // '  text-size: 14;',
    // '  text-label-position-tolerance: 10;',
    // '  text-fill: #FFFFFF;',
    // '  text-halo-fill: #FFF;',
    // '  text-halo-radius: 0;',
    // '  text-dy: -10;',
    // '  text-allow-overlap: true;',
    // '  text-placement: point;',
    // '  text-placement-type: simple;',
    // '}'
    // ].join('\n');

    // Candidate landing Sites
    var style2 = [
    '@selected: #FF2900;',
    '@discarded: #4c1010;',
    '#exols_exomars_landing_sites_eight{',
    '  [zoom<5][name!="Oxia Planum 2"]{',
    '    marker-line-width: 0;',
    '    marker-fill: @selected;',
    '    [selected = 0]{',
    '      marker-fill-opacity: 0;',
    '      marker-line-width: 1;',
    '      marker-line-color: #fff;',
    '    }',
    '    [name = "Oxia Planum"]{',
    '      marker-fill: #36db08;',
    '      text-dx: 0;',
    '    }',
    '    [name = "Mawrth Vallis"]{',
    '      marker-fill: #36db08;',
    '    }',
    '    [name = "Schiaparelli"]{',
    '      marker-file: url(http://com.cartodb.users-assets.production.s3.amazonaws.com/maki-icons/square-18.svg);',
    '      marker-fill: #ffffff;',
    '      marker-allow-overlap: true;',
    '      marker-fill-opacity: 1;',
    '    }',
    '    marker-placement: point;',
    '    marker-type: ellipse;',
    '    marker-width: 10;',
    '    marker-allow-overlap: false;',
    '    [zoom<3]{marker-width: 8;}',
    '  }',
    '  [zoom>=5]{',
    '    marker-line-width: 0;',
    '    marker-fill: @selected;',
    '    [selected = 0]{',
    '      marker-fill-opacity: 0;',
    '      marker-line-width: 1;',
    '      marker-line-color: #fff;',
    '    }',
    '    [name = "Oxia Planum"]{',
    '      marker-fill: #36db08;',
    '    }',
    '    [name = "Mawrth Vallis"]{',
    '      marker-fill: #36db08;',
    '    }',
    '    [name = "Schiaparelli"]{',
    '      marker-file: url(http://com.cartodb.users-assets.production.s3.amazonaws.com/maki-icons/square-18.svg);',
    '      marker-fill: #ffffff;',
    '      marker-allow-overlap: true;',
    '      marker-fill-opacity: 1;',
    '    }',
    '    marker-placement: point;',
    '    marker-type: ellipse;',
    '    marker-width: 10;',
    '    marker-allow-overlap: false;',
    '  }',
    '}',
    '#exols_exomars_landing_sites_eight {',
    '  [zoom<5][name!="Oxia Planum 2"]{',
    '    text-name: [name];',
    '    text-face-name: "Lato Bold";',
    '    text-size: 14;',
    '    text-fill: #fff;',
    '    [selected = 0]{',
    '      text-face-name: "Lato Bold Italic";',
    '      text-opacity: 0.8;',
    '    }',
    '    text-dy: -10;',
    '    text-min-padding: 0;',
    '    text-allow-overlap: true;',
    '    text-placement: point;',
    '    text-placement-type: simple;',
    '    [name="Coogoon Valles"]{text-dy: 10;}',
    '    [name="Schiaparelli"]{text-dy: 10;}',
    '    [zoom<=3]{text-size: 12;}',
    '  }',
    '  [zoom>=5]{',
    '    text-name: [name];',
    '    text-face-name: "Lato Bold";',
    '    text-size: 14;',
    '    text-fill: #fff;',
    '    [selected = 0]{',
    '      text-face-name: "Lato Bold Italic";',
    '      text-opacity: 0.8;',
    '    }   ',
    '    text-dy: -10;',
    '    text-min-padding: 0;',
    '    text-allow-overlap: true;',
    '    text-placement: point;',
    '    text-placement-type: simple;',
    '    [name="Coogoon Valles"]{text-dy: 10;} ',
    '    [name="Schiaparelli"]{text-dy: 10;}',
    '  }',
    '}'
    ].join('\n');





    var style3 = [
      '#exols_mars_nomenclature_webmercator_ls{',
        '	 marker-placement: point;',
        '	 marker-line-color: #31a354;',
        '	 marker-width: 1;',
        '	 marker-line-opacity: 1;',
        '	 marker-line-width: 3;',
        '	 marker-type: ellipse;',
        '	 marker-fill: #fff;',
        '	 marker-fill-opacity: 0;',
        '	 text-name: [name];',
        '  text-face-name: "DejaVu Sans Book";',
        '  text-size: 10;',
        '  text-label-position-tolerance: 0;',
        '  text-fill: #FFF;',
        '  text-halo-fill: #000;',
        '  text-halo-radius: 1;',
        '  text-dx: 0;',
        '  text-allow-overlap: true;',
        '  text-placement: point;',
        '	[cartodb_id = 84]{',
            '  text-dy: 10;',

          '}',
          '	[cartodb_id = 62]{',
              '  text-dy: -5;',
            '}',
        '}'
      ].join('\n');

// style fot the layer el.nomenclatorGlobal
  var style4 = [
    '@feature: #f2c474;',
    '#exols_mars_nomenclature{',
    '  [zoom=1]{',
    '    [diameter>=3000]{',
    '      text-name: [feature_name];',
    '      text-face-name: "Lato Bold";',
    '      text-fill: @feature;',
    '      text-dy: 0;',
    '      text-size: 12;',
    '      text-allow-overlap: true;',
    '      text-placement: point;',
    '      text-placement-type: simple;',
    '      text-transform: uppercase;',
    '      text-wrap-width: 10;',
    '    }',
    '  }',
    '  [zoom=2]{',
    '    [diameter>=3000]{',
    '      text-name: [feature_name];',
    '      text-face-name: "Lato Bold";',
    '      text-fill: @feature;',
    '      text-dy: 0;',
    '      text-size: 14;',
    '      text-allow-overlap: true;',
    '      text-placement: point;',
    '      text-placement-type: simple;',
    '      text-transform: uppercase;',
    '      text-wrap-width: 10;',
    '    }',
    '    [diameter>=2000][diameter<3000]{',
    '      text-name: [feature_name];',
    '      text-face-name: "Lato Bold";',
    '      text-fill: @feature;',
    '      text-dy: 0;',
    '      text-size: 10;',
    '      text-allow-overlap: true;',
    '      text-placement: point;',
    '      text-placement-type: simple;',
    '      text-transform: uppercase;',
    '      text-wrap-width: 10;',
    '    }',
    '  }',
    '  [zoom=3]{',
    '    [diameter>=2500]{',
    '      text-name: [feature_name];',
    '      text-face-name: "Lato Bold";',
    '      text-fill: @feature;',
    '      text-dy: 0;',
    '      text-size: 14;',
    '      text-allow-overlap: false;',
    '      text-placement: point;',
    '      text-placement-type: simple;',
    '      text-transform: uppercase;',
    '      text-wrap-width: 10;',
    '      [feature_name="Valles Marineris"]{',
    '        text-wrap-width: 100;',
    '      }',
    '    }',
    '    [diameter>=2000][diameter<2500]{',
    '      text-name: [feature_name];',
    '      text-face-name: "Lato Regular";',
    '      text-fill: @feature;',
    '      text-dy: 0;',
    '      text-size: 12;',
    '      text-allow-overlap: false;',
    '      text-placement: point;',
    '      text-placement-type: simple;',
    '      text-transform: uppercase;',
    '      text-wrap-width: 10;',
    '      text-opacity: 1;',
    '    }',
    '  }',
    '  [zoom=4],[zoom=5]{',
    '    [diameter>=3000]{',
    '      text-name: [feature_name];',
    '      text-face-name: "Lato Bold";',
    '      text-fill: @feature;',
    '      text-dy: 0;',
    '      text-size: 14;',
    '      text-allow-overlap: true;',
    '      text-placement: point;',
    '      text-placement-type: simple;',
    '      text-transform: uppercase;',
    '      text-wrap-width: 10;',
    '      [feature_name="Valles Marineris"]{',
    '        text-wrap-width: 100;',
    '      }',
    '    }',
    '    [diameter>=2000][diameter<3000]{',
    '      text-name: [feature_name];',
    '      text-face-name: "Lato Bold";',
    '      text-fill: @feature;',
    '      text-dy: 0;',
    '      text-size: 10;',
    '      text-allow-overlap: true;',
    '      text-placement: point;',
    '      text-placement-type: simple;',
    '      text-transform: uppercase;',
    '      text-wrap-width: 10;',
    '    }',
    '    [diameter>=1500][diameter<2000]{',
    '      text-name: [feature_name];',
    '      text-face-name: "Lato Bold";',
    '      text-fill: @feature;',
    '      text-dy: 0;',
    '      text-size: 10;',
    '      text-allow-overlap: true;',
    '      text-placement: point;',
    '      text-placement-type: simple;',
    '      text-wrap-width: 10;',
    '    }',
    '  }',
    '  [zoom>=6]{',
    '    [diameter>=50][diameter<=500][feature_name!="Aram Dorsum"]{',
    '      text-name: [feature_name];',
    '      text-face-name: "Lato Bold";',
    '      text-fill: @feature;',
    '      text-size: 10;',
    '      text-allow-overlap: true;',
    '      text-placement: point;',
    '      text-placement-type: simple;',
    '      text-wrap-width: 10;',
    '      [diameter>=250]{',
    '        text-size: 14;',
    '      }',
    '    }',
    '  }',
    '}'
    ].join("\n");

    style_mls = [
    '#mars_landing_sites{',
    '  marker-file: url(https://s3.amazonaws.com/com.cartodb.users-assets.production/production/whereonmars/assets/201508201448051440100065_basics-15.svg);',
    '  marker-fill-opacity: 0.9;',
    '  marker-line-color: #FFF;',
    '  marker-line-width: 0;',
    '  marker-line-opacity: 1;',
    '  marker-placement: point;',
    '  marker-type: ellipse;',
    '  marker-width: 12;',
    '  marker-fill: #D7A582;',
    '  marker-allow-overlap: true;',
    '}',
    '#mars_landing_sites::labels {',
    '  text-name: [name];',
    '  text-face-name: "Lato Italic";',
    '  text-size: 12;',
    '  text-label-position-tolerance: 0;',
    '  text-fill: #D7A582;',
    '  text-halo-fill: #FFF;',
    '  text-halo-radius: 0;',
    '  text-dy: -12;',
    '  text-allow-overlap: true;',
    '  text-placement: point;',
    '  text-placement-type: dummy;',
    '}'
    ].join("\n");


    // define all the CartoDB layers as a sublayers

        el.marsls = layer.createSubLayer({
          sql: "SELECT * FROM mars_landing_sites",
          cartocss: style_mls,
         });

        el.landingSite = layer.createSubLayer({
          sql: "SELECT * FROM exols_exomars_landing_sites_four",
          cartocss: style1,
          interactivity: ['description']
         });
        el.latConstraint = layer.createSubLayer({
          sql: "SELECT * FROM exols_lat_constraints",
          cartocss: '#exols_lat_constraints{polygon-fill: #000000;polygon-opacity: 0.4;line-color: #f40202;line-width: 1;line-opacity: 1;}',
          interactivity: ['description']
        });
        el.latAreaOk = layer.createSubLayer({
         sql: "SELECT * FROM exols_lat_area_ok",
         cartocss: '#exols_lat_constraints{polygon-fill: #377eb8;polygon-opacity: 0.2;line-opacity: 0;}',
         interactivity: ['description']
        });
        el.geoConstraint = layer.createSubLayer({
            sql: "SELECT * FROM exols_restricted_geology_latitude_webmercator",
            // cartocss: "#exols_restricted_geology_latitude_webmercator{polygon-fill: #4daf4a;polygon-opacity: 0.4;line-color: #f40202;line-width: 1;line-opacity: 0;}"
            cartocss: "#exols_restricted_geology_latitude_webmercator{polygon-fill: #000000;polygon-opacity: 0.5;line-color: #FFF;line-width: 0;line-opacity: 1;}"
        });
        el.elevationConstraintNoOkLS = layer.createSubLayer({
          sql: "SELECT * FROM exols_elevation_constraint_landing_sites",
            cartocss: "#exols_elevation_constraint_landing_sites{polygon-fill: #000;polygon-opacity: 0.5;line-color: #f40202;line-width: 1;line-opacity: 0;}"
        });
        el.duneConstraint = layer.createSubLayer({
          sql: "SELECT * FROM exols_dune_field_usgs",
          cartocss: '#exols_dune_field_usgs{polygon-fill: #c3834c;polygon-opacity: 0.7;line-color: #F11810;line-width: 1;line-opacity: 0;}'
        });
        el.elevationConstraint = layer.createSubLayer({
          sql: "SELECT * FROM exols_elevation_constraint",
          cartocss: "#exols_elevation_constraint{polygon-fill: #000000;polygon-opacity: 0.4;line-color: #FFF;line-width: 0;line-opacity: 1;}",
          interactivity: ['description']
        });
        el.geoOkConstraint = layer.createSubLayer({
          sql: "SELECT * FROM exols_geological_age_ok",
          cartocss: "#exols_geological_age_ok{polygon-fill: #229A00;polygon-opacity: 0.7;line-color: #FFF;line-width: 0.5;line-opacity: 1;}"
        });
        el.geoNoOkContraint = layer.createSubLayer({
          sql: "SELECT * FROM exols_geological_age_not_ok",
          cartocss: "#exols_geological_age_not_ok{ polygon-fill: #000000;polygon-opacity: 0.4;line-color: #FFF;line-width: 0;line-opacity: 1;}",
          interactivity: ['description']
        });
        el.nomenclatorGlobal = layer.createSubLayer({
          // sql: "SELECT * FROM exols_mars_nomenclature_webmercator_ls WHERE cartodb_id IN(84,56,7,6,43,11,3,67)",
          sql: "SELECT * FROM exols_mars_nomenclature",
          cartocss:  style4
        });
        el.nomenclatorRegional = layer.createSubLayer({
          sql: "SELECT * FROM exols_mars_nomenclature_webmercator_ls",
          cartocss:  style3
        });
        el.dashellipses1 = layer.createSubLayer({
          sql: "SELECT * FROM exols_exomars_landing_sites_ellipses_2018 WHERE id IN (1,6)",
          cartocss: "#exols_exomars_landing_sites_ellipses_2018{line-color: #FCDC3B; line-width: 2;line-opacity: 0.3; line-dasharray: 10, 4;}"
        });

        // Hypanis Vallis IN (10,11)",
        el.dashellipses2 = layer.createSubLayer({
          sql: "SELECT * FROM exols_exomars_landing_sites_ellipses_2018 WHERE id IN (14,15)",
          cartocss: "#exols_exomars_landing_sites_ellipses_2018{line-color: #FCDC3B; line-width: 2;line-opacity:  0.3; line-dasharray: 10, 4;}"
        });
        el.landingSite8 = layer.createSubLayer({
          sql: "SELECT * FROM exols_exomars_landing_sites_eight",
          cartocss: style2,
          interactivity: ['description']
        });

        // Oxia Planum IN (12,13)",
        el.dashellipses3 = layer.createSubLayer({
          sql: "SELECT * FROM exols_exomars_landing_sites_ellipses_2018 WHERE id IN (16,17)",
          cartocss: "#exols_exomars_landing_sites_ellipses_2018{line-color: #FCDC3B; line-width: 2;line-opacity:  0.3; line-dasharray: 10, 4;}"
        });
        el.dashellipses4 = layer.createSubLayer({
          sql: "SELECT * FROM exols_exomars_landing_sites_ellipses_2018 WHERE id IN (5,9)",
          cartocss: "#exols_exomars_landing_sites_ellipses_2018{line-color: #FCDC3B; line-width: 2;line-opacity:  0.3; line-dasharray: 10, 4;}"
        });
        el.dashellipses5 = layer.createSubLayer({
          sql: "SELECT * FROM exols_exomars_landing_sites_ellipses_2020 WHERE id IN (10,15,19,23)",
          cartocss: "#exols_exomars_landing_sites_ellipses_2020{line-color: #00B2EE; line-width: 2;line-opacity:  0.3; line-dasharray: 10, 4;}"
        });
        el.dashellipses6 = layer.createSubLayer({
          sql: "SELECT * FROM exols_exomars_landing_sites_ellipses_2020 WHERE id IN (11,16,20,24)",
          cartocss: "#exols_exomars_landing_sites_ellipses_2020{line-color: #00B2EE; line-width: 2;line-opacity:  0.3; line-dasharray: 10, 4;}"
        });
        el.dashellipses7 = layer.createSubLayer({
          sql: "SELECT * FROM exols_exomars_landing_sites_ellipses_2020 WHERE id IN (13,17,21,25)",
          cartocss: "#exols_exomars_landing_sites_ellipses_2020{line-color: #00B2EE; line-width: 2;line-opacity:  0.3; line-dasharray: 10, 4;}"
        });
        el.dashellipses8 = layer.createSubLayer({
          sql: "SELECT * FROM exols_exomars_landing_sites_ellipses_2020 WHERE id IN (14,18,22,26)",
          cartocss: "#exols_exomars_landing_sites_ellipses_2020{line-color: #00B2EE; line-width: 2;line-opacity:  0.3; line-dasharray: 10, 4;}"
        });

         el.ellipses1 = layer.createSubLayer({
          sql: "SELECT * FROM exols_exomars_landing_sites_ellipses_union WHERE id =1 ",
          cartocss: '#exols_exomars_landing_sites_ellipses_union{line-color: #FCDC3B; line-width: 2;line-opacity: 1;}',
          interactivity: ['description']
         });

         //Hypanis Vallis id=10
         el.ellipses2 = layer.createSubLayer({
          sql: "SELECT * FROM exols_exomars_landing_sites_ellipses_union WHERE id = 12",
          cartocss: '#exols_exomars_landing_sites_ellipses_union{line-color: #FCDC3B; line-width: 2;line-opacity: 1;}',
          interactivity: ['description']
          });

         // Oxia Planum id=12
         el.ellipses3 = layer.createSubLayer({
          sql: "SELECT * FROM exols_exomars_landing_sites_ellipses_union WHERE id =13",
          cartocss: '#exols_exomars_landing_sites_ellipses_corrected{line-color: #FCDC3B; line-width: 2;line-opacity: 1;}',
          interactivity: ['description']
         });
         el.ellipses4 = layer.createSubLayer({
          sql: "SELECT * FROM exols_exomars_landing_sites_ellipses_union WHERE  id = 4",
          cartocss: '#exols_exomars_landing_sites_ellipses_union{line-color: #FCDC3B; line-width: 2;line-opacity: 1;}',
          interactivity: ['description']
         });
         el.ellipses5 = layer.createSubLayer({
          sql: "SELECT * FROM exols_exomars_landing_sites_ellipses_union WHERE  id = 5",
          cartocss: '#exols_exomars_landing_sites_ellipses_union{line-color: #00B2EE; line-width: 2;line-opacity: 1;}',
          interactivity: ['description']
         });
         el.ellipses6 = layer.createSubLayer({
          sql: "SELECT * FROM exols_exomars_landing_sites_ellipses_union WHERE  id = 6",
          cartocss: '#exols_exomars_landing_sites_ellipses_union{line-color: #00B2EE; line-width: 2;line-opacity: 1;}',
          interactivity: ['description']
         });
         el.ellipses7 = layer.createSubLayer({
          sql: "SELECT * FROM exols_exomars_landing_sites_ellipses_union WHERE  id = 7",
          cartocss: '#exols_exomars_landing_sites_ellipses_union{line-color: #00B2EE; line-width: 2;line-opacity: 1;}',
          interactivity: ['description']
         });
         el.ellipses8 = layer.createSubLayer({
          sql: "SELECT * FROM exols_exomars_landing_sites_ellipses_union WHERE  id = 8",
          cartocss: '#exols_exomars_landing_sites_ellipses_union{line-color: #00B2EE; line-width: 2;line-opacity: 1;}',
          interactivity: ['description']
         });


        // Attach the CartoDB sublayers to  checkboxes.
        // Activate checkboxes for all the layers that have the name LS
        var checkbox = $('input.vector:checkbox'),
          $landingSite4 = $('#landingSite4') // calls the checkbox with the id = landingSite4
          $landingSite4.change(function(){
            if ($landingSite4.is(':checked')){ // if checkbox is selected, then show layer
              el.landingSite.show();
            }else{ // else (not selected), hide layer
              el.landingSite.hide();
            }
        });
        var $landingSite8 = $('#landingSiteEight') // calls the checkbox with the id = landingSite4
          $landingSite8.change(function(){
            if ($landingSite8.is(':checked')){ // if checkbox is selected, then show layer
              el.landingSite8.show();
            }else{ // else (not selected), hide layer
              el.landingSite8.hide();
            }
        });
        var $ellipsesAram1 = $('#ellipsesAram1')
          $ellipsesAram1.change(function(){
          if ($ellipsesAram1.is(':checked')){
            el.ellipses1.show();
            el.dashellipses1.show();
          }else{
            el.ellipses1.hide();
            el.dashellipses1.hide();
          }
        });
        var $ellipsesHypanis1 = $('#ellipsesHypanis1')
        $ellipsesHypanis1.change(function(){
          if ($ellipsesHypanis1.is(':checked')){
            el.ellipses2.show();
            el.dashellipses2.show();
          }else{
            el.ellipses2.hide();
            el.dashellipses2.hide();
          }
        });
        var $ellipsesOxia1 = $('#ellipsesOxia1')
        $ellipsesOxia1.change(function(){
          if ($ellipsesOxia1.is(':checked')){
            el.ellipses3.show();
            el.dashellipses3.show();
          }else{
            el.ellipses3.hide();
            el.dashellipses3.hide();
          }
        });
        var $ellipsesMawrth1 = $('#ellipsesMawrth1')
          $ellipsesMawrth1.change(function(){
            if ($ellipsesMawrth1 .is(':checked')){
              el.ellipses4.show();
              el.dashellipses4.show();
            }else{
              el.ellipses4.hide();
              el.dashellipses4.hide();
            }
        });
        var $ellipsesAram2 = $('#ellipsesAram2')
          $ellipsesAram2.change(function(){
            if ($ellipsesAram2.is(':checked')){
              el.ellipses5.show();
              el.dashellipses5.show();
            }else{
              el.ellipses5.hide();
              el.dashellipses5.hide();
            }
        });
        var $ellipsesHypanis2 = $('#ellipsesHypanis2')
          $ellipsesHypanis2.change(function(){
            if ($ellipsesHypanis2.is(':checked')){
              el.ellipses6.show();
              el.dashellipses6.show();
            }else{
              el.ellipses6.hide();
              el.dashellipses6.hide();
            }
        });
        var $ellipsesOxia2 = $('#ellipsesOxia2')
          $ellipsesOxia2.change(function(){
            if ($ellipsesOxia2.is(':checked')){
              el.ellipses7.show();
              el.dashellipses7.show();
            }else{
              el.ellipses7.hide();
              el.dashellipses7.hide();
            }
        });
        var $ellipsesMawrth2 = $('#ellipsesMawrth2')
          $ellipsesMawrth2.change(function(){
            if ($ellipsesMawrth2 .is(':checked')){
              el.ellipses8.show();
              el.dashellipses8.show();
            }else{
              el.ellipses8.hide();
              el.dashellipses8.hide();
            }
        });

        var $constraint1 = $('#constraint1')
          $constraint1.change(function(){
            if ($constraint1.is(':checked')){
              el.latConstraint.show();
            }else{
              el.latConstraint.hide();
            }
        });
        var $constraint2 = $('#constraint2')
          $constraint2.change(function(){
            if ($constraint2.is(':checked')){
              el.geoConstraint.show();
            }else{
              el.geoConstraint.hide();
            }
        });
        var $constraint3 = $('#constraint3')
          $constraint3.change(function(){
            if ($constraint3.is(':checked')){
              el.geoNoOkContraint.show();
            }else{
              el.geoNoOkContraint.hide();
            }
        });
        var $constraint4 = $('#constraint4')
          $constraint4.change(function(){
          if ($constraint4.is(':checked')){
            el.elevationConstraint.show();
          }else{
            el.elevationConstraint.hide();
          }
        });
        var $marsls = $('#marsls')
          $marsls.change(function(){
          if ($marsls.is(':checked')){
            el.marsls.show();
          }else{
            el.marsls.hide();
          }
        });
        var $nomenclature = $('#nomenclature')
          $nomenclature.change(function(){
          if ($nomenclature.is(':checked')){
            el.nomenclatorGlobal.show();
          }else{
            el.nomenclatorGlobal.hide();
          }
        });

    // set the interactivity of the CartoDB sublayers.It allows to add infowindows and tooltips.
        el.landingSite.setInteraction(true);
        el.landingSite8.setInteraction(true);
        el.geoNoOkContraint.setInteraction(true);
        el.latConstraint.setInteraction(true);
        el.latAreaOk.setInteraction(true);
        el.elevationConstraint.setInteraction(true);
        el.ellipses1.setInteraction(true);
        el.ellipses2.setInteraction(true);
        el.ellipses3.setInteraction(true);
        el.ellipses4.setInteraction(true);
        el.ellipses5.setInteraction(true);
        el.ellipses6.setInteraction(true);
        el.ellipses7.setInteraction(true);
        el.ellipses8.setInteraction(true);




      // A tooltip with text will appear in the layers when mouse hover
      var a = new cdb.geo.ui.Tooltip({
                layer: el.geoNoOkContraint,
                template: '<div class="cartodb-tooltip-content-wrapper"> <div class="cartodb-tooltip-content"><p>{{description}}</p></div></div>',
                width: 200,
                position: 'top|right'
            });
            $('body').append(a.render().el);
      var b = new cdb.geo.ui.Tooltip({
                layer: el.latConstraint,
                template: '<div class="cartodb-tooltip-content-wrapper"> <div class="cartodb-tooltip-content"><p>{{description}}</p></div></div>',
                width: 200,
                position: 'top|right'
            });
            $('body').append(b.render().el);
      var c = new cdb.geo.ui.Tooltip({
                layer: el.elevationConstraint,
                template: '<div class="cartodb-tooltip-content-wrapper"> <div class="cartodb-tooltip-content"><p>{{description}}</p></div></div>',
                width: 200,
                position: 'top|right'
            });
            $('body').append(c.render().el);
      var d1 = new cdb.geo.ui.Tooltip({
                layer: el.ellipses1,
                template: '<div class="cartodb-tooltip-content-wrapper"> <div class="cartodb-tooltip-content"><p>{{description}}</p></div></div>',
                width: 200,
                position: 'top|right'
            });
            $('body').append(d1.render().el);
      var d2 = new cdb.geo.ui.Tooltip({
              layer: el.ellipses2,
              template: '<div class="cartodb-tooltip-content-wrapper"> <div class="cartodb-tooltip-content"><p>{{description}}</p></div></div>',
              width: 200,
              position: 'top|right'
          });
          $('body').append(d2.render().el);
      var d3 = new cdb.geo.ui.Tooltip({
                layer: el.ellipses3,
                template: '<div class="cartodb-tooltip-content-wrapper"> <div class="cartodb-tooltip-content"><p>{{description}}</p></div></div>',
                width: 200,
                position: 'top|right'
            });
            $('body').append(d3.render().el);
      var d4 = new cdb.geo.ui.Tooltip({
              layer: el.ellipses4,
              template: '<div class="cartodb-tooltip-content-wrapper"> <div class="cartodb-tooltip-content"><p>{{description}}</p></div></div>',
              width: 200,
              position: 'top|right'
          });
          $('body').append(d4.render().el);
      var d5 = new cdb.geo.ui.Tooltip({
                layer: el.ellipses5,
                template: '<div class="cartodb-tooltip-content-wrapper"> <div class="cartodb-tooltip-content"><p>{{description}}</p></div></div>',
                width: 200,
                position: 'top|right'
            });
            $('body').append(d5.render().el);
     var d6 = new cdb.geo.ui.Tooltip({
              layer: el.ellipses6,
              template: '<div class="cartodb-tooltip-content-wrapper"> <div class="cartodb-tooltip-content"><p>{{description}}</p></div></div>',
              width: 200,
              position: 'top|right'
          });
          $('body').append(d6.render().el);
      var d7 = new cdb.geo.ui.Tooltip({
                layer: el.ellipses7,
                template: '<div class="cartodb-tooltip-content-wrapper"> <div class="cartodb-tooltip-content"><p>{{description}}</p></div></div>',
                width: 200,
                position: 'top|right'
            });
            $('body').append(d7.render().el);
      var d8 = new cdb.geo.ui.Tooltip({
                layer: el.ellipses8,
                template: '<div class="cartodb-tooltip-content-wrapper"> <div class="cartodb-tooltip-content"><p>{{description}}</p></div></div>',
                width: 200,
                position: 'top|right'
            });
            $('body').append(d8.render().el);
      var e = new cdb.geo.ui.Tooltip({
                layer: el.latAreaOk,
                template: '<div class="cartodb-tooltip-content-wrapper"> <div class="cartodb-tooltip-content"><p>{{description}}</p></div></div>',
                width: 200,
                position: 'top|right'
            });
            $('body').append(e.render().el);



      // hide the tooltips when click the navigation buttons
      $("#navButtons").click(function(){
        $(".cartodb-tooltip-content-wrapper").css({
          "display" : "none"
        })
      })
      .hover(function(){
        $(".cartodb-tooltip-content-wrapper").css({
          "display" : "none"
        })
      });
      // hide the tooltips when click the dots
      $("#carousel").click(function(){
        $(".cartodb-tooltip-content-wrapper").css({
          "display" : "none"
        })
      })
      .hover(function(){
        $(".cartodb-tooltip-content-wrapper").css({
          "display" : "none"
        })
      });

      // add infowindow with the name and the description of the landing site. The description is inside the "description"
      // column of the exols_exomars_landing_sites_four table
      //cdb.vis.Vis.addInfowindow(el.map, el.landingSite, ['description']);
      cdb.vis.Vis.addInfowindow(el.map, el.landingSite8, ['description']);

      // hide all cartodb layers when the map element is loaded
      el.landingSite8.hide();
      el.landingSite.hide();
      el.latConstraint.hide();
      el.latAreaOk.hide();
      el.elevationConstraint.hide();
      el.geoConstraint.hide();
      el.duneConstraint.hide();
      el.nomenclatorGlobal.hide();
      el.nomenclatorRegional.hide();
      el.geoOkConstraint.hide();
      el.geoNoOkContraint.hide();
      el.elevationConstraintNoOkLS.hide();
      el.ellipses1.hide();
      el.ellipses2.hide();
      el.ellipses3.hide();
      el.ellipses4.hide();
      el.ellipses5.hide();
      el.ellipses6.hide();
      el.ellipses7.hide();
      el.ellipses8.hide();
      el.dashellipses1.hide();
      el.dashellipses2.hide();
      el.dashellipses3.hide();
      el.dashellipses4.hide();
      el.dashellipses5.hide();
      el.dashellipses6.hide();
      el.dashellipses7.hide();
      el.dashellipses8.hide();
      el.lengendMOLA.hide();
      el.legendGeology.hide();
      el.legendElevation.hide();
      el.legendEllipses.hide();

      // add all cartoDB subLayers into the map
      el.map.addLayer(layer, false);
      startStory();


    });

   }
