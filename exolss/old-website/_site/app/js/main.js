/*
This script call the initMap(), cartodbData(), initOdyssey(O) and the listenSlideChange() functions and define when are loaded.
*/
var app =  {};
	app.exomars = (function(w,d,$,O){

	  		function init() {
      			initMap(); // in raster_tiles.js
      			cartodbData(); // in cartodbLayers.js
      			initOdyssey(O); // in story.js
      			listenSlideChange(); // in story.js

      		}
      		return {
      			init : init,
      		}
  	})(window, document, jQuery,O);
	//  when the document has been completely loaded and parsed it applies the function to the window element
	window.addEventListener("DOMContentLoaded", function(){
    	app.exomars.init();
  });
