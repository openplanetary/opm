/*
In this script, the different legends of the app are defined. You can change the name, color or values of the legends.
The legends are called into the map in story.js file.
*/
// legend for the elevation


el.legendCLS = new cdb.geo.ui.Legend({
     type: "custom",
     data: [
       { name: "Recommended Landing Site", value: "#36db08" },
       { name: "Candidate Landing Sites", value: "#FF2900" },
       { name: "Proposed Landing Sites", value: "#FFFFFF" }
     ]
   });

el.legendElevation = new cdb.geo.ui.Legend({
     type: "custom",
     data: [
       { name: "Area higher than -2 km", value: "#000" },
     ]
   });

//legend for the geology
el.legendGeology = new cdb.geo.ui.Legend({
    type: "custom",
    data: [
        { name: "Age < 3.600.000.000 years ", value: "#000" },
      ]
    });
//legend for the ellipses
el.legendEllipses = new cdb.geo.ui.Legend({
     type: "custom",
     data: [
       { name: "Landing ellipses", value: "#FCDC3B" }
     ]
   });
el.legendLandingSite = new cdb.geo.ui.Legend({
    type: "custom",
    data: [
      { name: "Not valid area", value: "#000" },
      { name: "Geology of interest", value: "#4daf4a" },
      { name: "Area of work", value: "#377eb8" }

    ]
  });
// coropleth legend
el.lengendMOLA = new cdb.geo.ui.Legend({
     type: "choropleth",
     data: [
       { value: "-9 km&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MOLA altitudes" },
       { value: "          +14 km" },
       { value: "#070610" },//1 -9 km
       { value: "#2F2C4B" },//2
       { value: "#514C77" },//3
       { value: "#4E5FA3" },//4
       { value: "#4589CD" },//5
       { value: "#31D874" },//6
       { value: "#4EDC45" },//7
       { value: "#CBD61F" },//8 0 km
       { value: "#D9C31C" },//8.1
       { value: "#DE9E17" },//10
       { value: "#EA6632" },//11
       { value: "#E45E6B" },//12
       { value: "#A66457" },//13
       { value: "#857354" },//14
       { value: "#988384" },//15
       { value: "#D8D5D3" },//16
       { value: "#F2F5F0" },//17 +14 km
      ]
   });
