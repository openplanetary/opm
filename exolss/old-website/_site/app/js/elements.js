/*
 This script define the object named el. This object contains all the objects, basemaps or CartoDB layers used in the application.


*/
var el = {

  map: null, // map object, it is defined in the index.html file.
  story: null, // story object, is the main object in Odyssey.js. Define the storytelling
  hirise: null, // hirise object, used to call and add all the hirise layers called, through the SQL API from cartodb, into the map object.
  hrsc: null, // hrsc object, used to call and add all the hrsc layers called, through the SQL API from cartodb, into the map object.
  graticuleOptions: null, // define the options of the graticule
  graticule: null, // define the graticule (Leaflet plugin)
  // basemaps and coordinates

  basemapMOLAGray: null, // basemap MOLA gray, defined in raster_tiles.js file.
  basemapMOLANoShadedColor: null, // basemap MOLA shaded color, defined in raster_tiles.js file.
  basemapMOLAShadedColor: null, // basemap MOLA shaded color , defined in raster_tiles.js file.
  basemapCelestia: null, // basemap Celestia, is the basemap by default in the app. Defined in raster_tiles.js file.
  basemapViking: null, // basemap Viking, defined in raster_tiles.js file.
  Aram: null, // coordinates of the center of Aram Dorsum.
  Hypanis:null,  // coordinates of the center of Hypanis Vallis.
  Oxia: null,  // coordinates of the center of Oxia Planum.
  Mawrth: null,  // coordinates of the center of Mawrth Vallis.
  center: null,  // coordinates of the center of the overview.
  center: null,  // coordinates of the center of the 4 candidate view.

  // legends

  legendElevation: null, // legend of the "Elevation constraint" chapter.
  legendGeology: null, // legend of the "Geological constraint" chapter.
  lengendMOLA: null, // legend of the "Mars Orbiter Laser Altimeter (MOLA)" chapter.
  legendEllipses: null, // legend of the landing sites chapters (Aram Dorsum, Hypanis Vallis, Oxia Planum and Mawrth Vallis).
  legendLandingSite: null, // legend of the "Defining the landing sites" chapter.
  legendCLS: null, // legend of the candidate landing sites
  
  // CartoDB layers

  landingSite: null, // layer that contains the current four candidate landing sites.
  landingSite8: null, // layer that contains the first eight candidate landing sites.
  latConstraint: null, // layer that contains the latitude constraint.
  latAreaOk: null, // layer that contains the valid area inside the latitude constraint.
  elevationConstraint:null, // layer that contains the elevation constraint.
  geoConstraint: null, // layer that contains the geology area of interest inseide the latitude constraint.
  elevationConstraintNoOkLS: null, // layer that contains the elevation area that is higher than -2 km.
  duneConstraint: null, // layer that contains dunes of Mars.
  geoOkConstraint: null, // layer that contains the geological area with interest for the ExoMars 2020 mission.
  geoNoOkContraint: null, //  layer that contains the geological area with no interest for the ExoMars 2020 mission.
  nomenclatorGlobal: null, // layer that contains the nomenclator names of craters (for the overview)
  nomenclatorRegional: null, // layer that contains the nomenclator names of craters (for the landing sites view)

  marsls: null, // layer that contains other Mars landing sites

  // Landing ellipses
  ellipses1: null,
  ellipses2: null,
  ellipses3: null,
  ellipses4: null,
  ellipses5: null,
  ellipses6: null,
  ellipses7: null,
  ellipses8: null,
  // Landing ellipses with dash lines
  dashellipses1: null,
  dashellipses2: null,
  dashellipses3: null,
  dashellipses4: null,
  dashellipses5: null,
  dashellipses6: null,
  dashellipses7: null,
  dashellipses8: null,

};
