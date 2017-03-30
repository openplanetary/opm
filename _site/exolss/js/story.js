/*
  This file define the functions click(el), emitSlideChange(),listenSlideChange() and trackCurrentSlide().

  The function checkIndex(index) contains a switch(index) operation that calls a different slide everytime the user click
  on a navigation button or a navigation dot.
  Also, still inside the checkIndex() function, the legeds of the layers are added.

  After the checkIndex() function, several functions have been created (this functions are called inside the checkIndex() function) in order
  to define which layers are shown or hide in each slide.

  The function initOdyssey(O) is defined at the end of the script. This function allows the storytelling with the map, define the order
  and the zoom level of each slides, activate the slides and define the hash of each slide.

  If you want to modify the story you have to follow the next steps:

                1 - In the file "index.html", add or remove the <div class = "slides">
                    And add or remove <p>, <img>, <h3> elements as you wish.
                2 - Once you have modified the "index.html" you must go to the story.js file.
                    In the story.js you must change the next functions:

                      2.1 - checkIndex(index): You must add or remove a "case" in the switch(index) operation.
                            If you modify a "case", you must modify all the cases (if you don't, the order and functionality of the story won't work),
                            Modify the case implies:
                                      1- modify the slide"Number"() function.
                                      2- modify the title"Number"() function.
                                      3- Add or remove class "active" depending on the number of the slide.

                      2.2 - slide"Number"() functions: define which layers (raster or vector) are shown in each slide. If you modify
                            the story and the switch(index) operator, you must add, remove or update the function"Number"().
                            The "number" of the function make reference to the number of the slide. For example, the slide 0 has SlideZero(),
                            the slide number one has the function SlideOne() and so on.

                      2.3 - function initOdyssey(O) : once you have modified the previous functions, you must update the .addState() functions
                            to activate the slide,define the view and the zoom level of the center of the slide and
                            define hash of the slides.

                3 - To finish, you must update the different elements that are related to the value of the index variable.
                    Like the title"Number"() functions (inside the slide_title.js file), the way that the legends are added to the map (story.js),
                    the "Navigation dots" block of code (from the menus_and_buttons.js file), the #carousel element (index.html).
                    This changes will synchronize the story of the slides with the dots form de navigation dots menu.
*/

// global variables
var seq;
var slides;

function click(el) {
    var element = O.Core.getElement(el);
    var t = O.Trigger();
    function click() {
  t.trigger();
    }
   if (element) element.onclick = click;
    return t;
 }

// trigger a custom event called SlideChange
  var emitSlideChange = O.Action( function() {
   $(document).trigger('slideChange', function(){
      trackCurrentSlide();
   });
});

// listen for the slideChange event to be triggered
  function listenSlideChange() {
    $(document).on('slideChange', function() {
  trackCurrentSlide();
    });
}

  // fire "this" each time the user changes a slide
  function trackCurrentSlide(){
  slides = $('#slides').children(); // creates an array of slides
  slides.each(function(i){
    if ($(this).hasClass('selected')){
        checkIndex(i);
    }
  });
  }
  // check the index being returned by trackCurrentSlide()
  var checkIndex = function(index) {
    switch(index){
      case 0: slideZero(),hide(),titleZero(),console.log(index),$("#0").addClass("active"),$("#1").removeClass("active"),$("#8").removeClass("active");
      break;
      case 1: slideOne(),hide(),titleOne(),console.log(index),$("#0").removeClass("active") ,$("#1").addClass("active"),$("#2").removeClass("active");
      break;
      case 2: slideTwo(),hide(),titleTwo(),console.log(index),$("#1").removeClass("active") ,$("#2").addClass("active"),$("#3").removeClass("active");
      break;
      case 3: slideThree(),hide(),titleThree(),console.log(index),$("#2").removeClass("active") ,$("#3").addClass("active"),$("#4").removeClass("active");
      break;
      case 4: slideFour(),hide(),titleFour(),console.log(index),$("#3").removeClass("active") ,$("#4").addClass("active"),$("#5").removeClass("active");
      break;
      case 5: slideFive(),hide(),titleFive(),console.log(index),$("#4").removeClass("active") ,$("#5").addClass("active"),$("#6").removeClass("active");
      break
      case 6: slideSix(),hide(),titleSix(),console.log(index),$("#5").removeClass("active") ,$("#6").addClass("active"),$("#7").removeClass("active");
      break;
      case 7: slideSeven(),hide(),titleSeven(),console.log(index), $("#6").removeClass("active") ,$("#7").addClass("active"),$("#8").removeClass("active");
      break;
      case 8: slideEight(),show(),titleEight(),console.log(index), $("#7").removeClass("active") ,$("#8").addClass("active"),$("#0").removeClass("active");
      break;
    };

    /* Block legend */
    // The legends are added to the map depending on the slide. Are added in this way to avoid to load them everytime that the user change
    // the slides of the story.

    if (index == 0){
      $('#map').append(el.legendCLS.render().el);
    } else {
      $('#map:last-child').remove(el.legendCLS.render().el);
    }
    if (index == 1){
      $('#map').append(el.lengendMOLA.render().el);
    } else {
      $('#map:last-child').remove(el.lengendMOLA.render().el);
    }
    if (index == 2){
      $('#map').append(el.legendElevation.render().el);
    } else {
      $('#map:last-child').remove(el.legendElevation.render().el);
    }
    if (index == 4){
      $('#map').append(el.legendGeology.render().el);
    } else {
      $('#map:last-child').remove(el.legendGeology.render().el);
    }
    if (index == 5){
      $('#map').append(el.legendLandingSite.render().el);
    } else {
      $('#map:last-child').remove(el.legendLandingSite.render().el);
    }
    if (index == 4 || index == 5 || index == 6 || index == 7){
      $('#map').append(el.legendEllipses.render().el);
    } else {
      $('#map:last-child').remove(el.legendEllipses.render().el);
      }
}

// Overview
function slideZero() {
  if (el.map.hasLayer(el.basemapViking) || el.map.hasLayer(el.basemapMOLAShadedColor)){
    el.map.removeLayer(el.basemapViking);
    el.map.removeLayer(el.basemapMOLAShadedColor);
    el.map.addLayer(el.basemapCelestia);
  }
  el.marsls.show();
  el.landingSite.hide();
  el.dashellipses4.hide();
  el.nomenclatorGlobal.show();
  el.nomenclatorRegional.hide();
  el.geoNoOkContraint.hide();
// layers to hide when clicking buttons (not following the story order)
  el.landingSite8.show();
  el.latConstraint.hide();
  el.geoConstraint.hide();
  el.latAreaOk.hide();
  el.duneConstraint.hide();
  el.elevationConstraint.hide();
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
  el.dashellipses5.hide();
  el.dashellipses6.hide();
  el.dashellipses7.hide();
  el.dashellipses8.hide();
  //legends
  el.lengendMOLA.hide();
  el.legendElevation.hide();
  el.legendGeology.hide();
  el.legendEllipses.hide();
  el.legendLandingSite.hide();
  el.legendCLS.show();
};

// Altitude constrain
function slideOne() {
  if (el.map.hasLayer(el.basemapViking) || el.map.hasLayer(el.basemapCelestia)){
    el.map.removeLayer(el.basemapViking);
    el.map.removeLayer(el.basemapCelestia);
    el.map.addLayer(el.basemapMOLAShadedColor);
  }
  el.marsls.show();
  el.landingSite.hide();
  el.elevationConstraint.show();
  el.latConstraint.hide();
  el.latAreaOk.hide();
  el.geoConstraint.hide();
  el.geoNoOkContraint.hide();
  el.landingSite8.show();
  el.duneConstraint.hide();
  el.nomenclatorRegional.hide();
  // layers to hide when clicking buttons (not following the story order)
  el.nomenclatorGlobal.show();
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
  //legends
  el.lengendMOLA.show();
  el.legendElevation.hide();
  el.legendGeology.hide();
  el.legendEllipses.hide();
  el.legendLandingSite.hide();
  el.legendCLS.hide();
};

// Latitude constraint landing sites
function slideTwo() {
  if (el.map.hasLayer(el.basemapViking) || el.map.hasLayer(el.basemapCelestia)){
    el.map.removeLayer(el.basemapViking);
    el.map.removeLayer(el.basemapCelestia);
    el.map.addLayer(el.basemapMOLAShadedColor);
  }
  el.marsls.show();
  el.latConstraint.show();
  el.latAreaOk.hide();
  el.geoConstraint.hide();
  el.geoNoOkContraint.hide();
  el.elevationConstraint.show();
  el.landingSite8.show();
  el.landingSite.hide();
  el.duneConstraint.hide();
  el.nomenclatorRegional.hide();
  el.elevationConstraintNoOkLS.hide();
  // layers to hide when clicking buttons (not following the story order)
  el.nomenclatorGlobal.show();
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
  //legends
  el.lengendMOLA.show();
  el.legendElevation.hide();
  el.legendGeology.hide();
  el.legendEllipses.hide();
  el.legendLandingSite.hide();
  el.legendCLS.hide();
};

// Geological constraint
function slideThree() {
  if (el.map.hasLayer(el.basemapViking) || el.map.hasLayer(el.basemapMOLAShadedColor)){
    el.map.removeLayer(el.basemapViking);
    el.map.removeLayer(el.basemapMOLAShadedColor);
    el.map.addLayer(el.basemapCelestia);
  }
  el.marsls.show();
  el.landingSite8.show();
  el.latConstraint.show();
  el.latAreaOk.hide();
  el.geoConstraint.hide();
  el.duneConstraint.hide();
  el.geoNoOkContraint.show();
  // layers to hide when clicking buttons (not following the story order)
  el.nomenclatorGlobal.show();
  el.nomenclatorRegional.hide();
  el.elevationConstraint.hide();
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
  //legends
  el.lengendMOLA.hide();
  el.legendElevation.hide();
  el.legendGeology.hide();
  el.legendEllipses.hide();
  el.legendLandingSite.hide();
  el.legendCLS.hide();
};

// Mawrth Vallis
function slideFour() {
  if (el.map.hasLayer(el.basemapMOLAShadedColor) || el.map.hasLayer(el.basemapCelestia)){
    el.map.removeLayer(el.basemapCelestia);
    el.map.removeLayer(el.basemapMOLAShadedColor);
    el.map.addLayer(el.basemapViking);
  }
  el.marsls.show();
  el.ellipses4.show();
  el.ellipses8.hide();
  el.ellipses3.hide();
  el.ellipses7.hide();
  el.dashellipses4.show();
  el.dashellipses8.hide();
  el.dashellipses3.hide();
  el.dashellipses7.hide();
  // layers to hide when clicking buttons (not following the story order)
  el.nomenclatorGlobal.show();
  el.landingSite8.hide();
  el.landingSite.hide();
  el.latConstraint.hide();
  el.latAreaOk.hide();
  el.geoConstraint.hide();
  el.duneConstraint.hide();
  el.elevationConstraint.hide();
  el.geoNoOkContraint.hide();
  el.elevationConstraintNoOkLS.hide();
  el.ellipses1.hide();
  el.ellipses2.hide();
  el.ellipses5.hide();
  el.ellipses6.hide();
  el.dashellipses1.hide();
  el.dashellipses2.hide();
  el.dashellipses5.hide();
  el.dashellipses6.hide();
  //legends
  el.lengendMOLA.hide();
  el.legendElevation.hide();
  el.legendGeology.hide();
  el.legendEllipses.show();
  el.legendLandingSite.hide();
  el.legendCLS.hide();
};

// Oxia Planum
function slideFive() {
if (el.map.hasLayer(el.basemapMOLAShadedColor) || el.map.hasLayer(el.basemapCelestia)){
  el.map.removeLayer(el.basemapCelestia);
  el.map.removeLayer(el.basemapMOLAShadedColor);
  el.map.addLayer(el.basemapViking);
}
el.marsls.show();
el.ellipses2.hide();
el.ellipses3.show();
el.ellipses6.hide();
el.ellipses7.hide();
el.dashellipses3.show();
el.dashellipses7.hide();
el.dashellipses2.hide();
el.dashellipses6.hide();
// layers to hide when clicking buttons (not following the story order)
el.nomenclatorGlobal.show();
el.landingSite8.hide();
el.landingSite.hide();
el.latConstraint.hide();
el.latAreaOk.hide();
el.geoConstraint.hide();
el.duneConstraint.hide();
el.elevationConstraint.hide();
el.geoNoOkContraint.hide();
el.elevationConstraintNoOkLS.hide();
el.ellipses1.hide();
el.ellipses4.hide();
el.ellipses5.hide();
el.ellipses8.hide();
el.dashellipses1.hide();
el.dashellipses4.hide();
el.dashellipses5.hide();
el.dashellipses8.hide();
//legends
el.lengendMOLA.hide();
el.legendElevation.hide();
el.legendGeology.hide();
el.legendEllipses.show();
el.legendLandingSite.hide();
el.legendCLS.hide();
};

// Hypanis Vallis
function slideSix() {
  if (el.map.hasLayer(el.basemapMOLAShadedColor) || el.map.hasLayer(el.basemapCelestia)){
    el.map.removeLayer(el.basemapCelestia);
    el.map.removeLayer(el.basemapMOLAShadedColor);
    el.map.addLayer(el.basemapViking);
  }
  el.marsls.show();
  el.ellipses1.hide();
  el.ellipses2.show();
  el.ellipses5.hide();
  el.ellipses6.hide();
  el.dashellipses2.show();
  el.dashellipses5.hide();
  el.dashellipses6.hide();

  // layers to hide when clicking buttons (not following the story order)
  el.nomenclatorGlobal.show();
  el.landingSite8.hide();
  el.landingSite.hide();
  el.latConstraint.hide();
  el.latAreaOk.hide();
  el.geoConstraint.hide();
  el.duneConstraint.hide();
  el.elevationConstraint.hide();
  el.geoNoOkContraint.hide();
  el.ellipses3.hide();
  el.ellipses4.hide();
  el.ellipses7.hide();
  el.ellipses8.hide();
  el.dashellipses1.hide();
  el.dashellipses3.hide();
  el.dashellipses4.hide();
  el.dashellipses6.hide();
  el.dashellipses7.hide();
  el.dashellipses8.hide();
  //legends
  el.lengendMOLA.hide();
  el.legendElevation.hide();
  el.legendGeology.hide();
  el.legendEllipses.show();
  el.legendLandingSite.hide();
  el.legendCLS.hide();
};

// Aram Dorsum
function slideSeven(){
  if (el.map.hasLayer(el.basemapMOLAShadedColor) || el.map.hasLayer(el.basemapCelestia)){
    el.map.removeLayer(el.basemapCelestia);
    el.map.removeLayer(el.basemapMOLAShadedColor);
    el.map.addLayer(el.basemapViking);
  }
  el.marsls.show();
  el.landingSite.hide();
  el.landingSite8.hide();
  el.latConstraint.hide();
  el.latAreaOk.hide();
  el.geoConstraint.hide();
  el.duneConstraint.hide();
  el.ellipses1.show();
  el.ellipses5.hide();
  el.dashellipses1.show();
  el.dashellipses5.hide();
  el.nomenclatorRegional.hide();
  el.elevationConstraintNoOkLS.hide();
  // layers to hide when clicking buttons (not following the story order)
  el.nomenclatorGlobal.show();
  el.elevationConstraint.hide();
  el.geoNoOkContraint.hide();
  el.ellipses2.hide();
  el.ellipses3.hide();
  el.ellipses4.hide();
  el.ellipses6.hide();
  el.ellipses7.hide();
  el.ellipses8.hide();
  el.dashellipses2.hide();
  el.dashellipses3.hide();
  el.dashellipses4.hide();
  el.dashellipses6.hide();
  el.dashellipses7.hide();
  el.dashellipses8.hide();
  //legends
  el.lengendMOLA.hide();
  el.legendElevation.hide();
  el.legendGeology.hide();
  el.legendEllipses.show();
  el.legendLandingSite.hide();
  el.legendCLS.hide();
};


  // End of the story/overview
function slideEight() {
  if (el.map.hasLayer(el.basemapViking) || el.map.hasLayer(el.basemapMOLAShadedColor) ){
    el.map.removeLayer(el.basemapViking);
    el.map.removeLayer(el.basemapMOLAShadedColor);
    el.map.addLayer(el.basemapCelestia);
  }
  el.marsls.show();
  el.nomenclatorGlobal.show();
  el.nomenclatorRegional.hide();
  el.ellipses4.hide();
  el.ellipses8.hide();
  el.landingSite.hide();
  el.dashellipses4.hide();
  el.dashellipses8.hide();
  // layers to hide when clicking buttons (not following the story order)
  el.elevationConstraintNoOkLS.hide(); // <-
  el.landingSite8.show();
  el.latConstraint.hide();
  el.latAreaOk.hide();
  el.geoConstraint.hide(); // <-
  el.duneConstraint.hide();
  el.elevationConstraint.hide();
  el.geoNoOkContraint.hide();
  el.ellipses1.hide();
  el.ellipses2.hide();
  el.ellipses3.hide();
  el.ellipses5.hide();
  el.ellipses6.hide();
  el.ellipses7.hide();
  el.dashellipses1.hide();
  el.dashellipses2.hide();
  el.dashellipses3.hide();
  el.dashellipses5.hide();
  el.dashellipses6.hide();
  el.dashellipses7.hide();
  //legends
  el.lengendMOLA.hide();
  el.legendElevation.hide();
  el.legendGeology.hide();
  el.legendEllipses.hide();
  el.legendLandingSite.hide();
  el.legendCLS.hide();
};


// // Mix of constraints --- May be reused for last slide...
// function slideFive() {
//   if (el.map.hasLayer(el.basemapViking) || el.map.hasLayer(el.basemapMOLAShadedColor)){
//     el.map.removeLayer(el.basemapViking);
//     el.map.removeLayer(el.basemapMOLAShadedColor);
//     el.map.addLayer(el.basemapCelestia);
//   }
//   el.elevationConstraint.hide();
//   el.latConstraint.show();
//   el.latAreaOk.show();
//   el.geoConstraint.show();
//   el.geoNoOkContraint.hide();
//   el.elevationConstraintNoOkLS.show();
//   el.landingSite8.show();
//   el.duneConstraint.hide();
//   el.nomenclatorRegional.hide();
//   el.landingSite.hide();
//   // layers to hide when clicking buttons (not following the story order)
//   el.nomenclatorGlobal.hide();
//   el.ellipses1.hide();
//   el.ellipses2.hide();
//   el.ellipses3.hide();
//   el.ellipses4.hide();
//   el.ellipses5.hide();
//   el.ellipses6.hide();
//   el.ellipses7.hide();
//   el.ellipses8.hide();
//   el.dashellipses1.hide();
//   el.dashellipses2.hide();
//   el.dashellipses3.hide();
//   el.dashellipses4.hide();
//   el.dashellipses5.hide();
//   el.dashellipses6.hide();
//   el.dashellipses7.hide();
//   el.dashellipses8.hide();
//   //legends
//   el.lengendMOLA.hide();
//   el.legendElevation.hide();
//   el.legendGeology.hide();
//   el.legendEllipses.hide();
//   el.legendLandingSite.show();
// };


// start initOdyssey fucntion (it is called in the main.js)
function initOdyssey(O) {

    // O is for Odyssey
    var map = el.map;
    seq = O.Triggers.Sequential();
    // enable keys to move slides
    O.Keys().on('map').left().then(seq.prev, seq)
    O.Keys().on('map').right().then(seq.next, seq)
    // set up triggers for slide arrows
    click(document.querySelectorAll('.next')).then(seq.next, seq)
    click(document.querySelectorAll('.prev')).then(seq.prev, seq)
    slides = O.Actions.Slides('slides');
    el.story =  O.Story()
    .addState(
        seq.step(0),
          O.Parallel(
            el.map.actions.setView(el.center,3),
            slides.activate(0),
            O.Location.changeHash('0'),
            emitSlideChange
          )
    )
    .addState(
        seq.step(1),
          O.Parallel(
            el.map.actions.setView(el.center,3),
            slides.activate(1),
            O.Location.changeHash('1'),
            emitSlideChange
          )
    )
    .addState(
        seq.step(2),
          O.Parallel(
            el.map.actions.setView(el.center,3),
            slides.activate(2),
            O.Location.changeHash('2'),
            emitSlideChange
          )
    )
    .addState(
        seq.step(3),
          O.Parallel(
            el.map.actions.setView(el.center,3),
            slides.activate(3),
            O.Location.changeHash('3'),
            emitSlideChange
          )
    )
    .addState(
        seq.step(4),
          O.Parallel(
            el.map.actions.setView(el.Mawrth,9),
            slides.activate(4),
            O.Location.changeHash('4'),
            emitSlideChange
          )
    )
    .addState(
        seq.step(5),
          O.Parallel(
            el.map.actions.setView(el.Oxia,9),
            slides.activate(5),
            O.Location.changeHash('5'),
            emitSlideChange
          )
    )
    .addState(
        seq.step(6),
          O.Parallel(
            el.map.actions.setView(el.Hypanis,9),
            slides.activate(6),
            O.Location.changeHash('6'),
            emitSlideChange
          )
    )
    .addState(
        seq.step(7),
          O.Parallel(
            el.map.actions.setView(el.Aram,9),
            slides.activate(7),
            O.Location.changeHash('7'),
            emitSlideChange
          )
    )

    .addState(
        seq.step(8),
          O.Parallel(
            el.map.actions.setView(el.center4,5,true),
            slides.activate(8),
            O.Location.changeHash('8'),
            emitSlideChange
          )
    )


// anchor permanent link to each slide

  if (location.hash != "") {
    var chapter = parseInt(location.hash.replace('#', ''), 10);
    el.story.go(chapter, seq.step(chapter),O.Parallel(slides.activate(chapter)));
  } else {
    el.story.go(0,seq.step(0));
  }


}
