# OpenPlanetaryMap (OPM)

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg)](https://gitmoji.carloscuesta.me)

This `develop` branch is an MVP sprint of OPM for the [Planetary Data Workshop 2019](https://www.hou.usra.edu/meetings/planetdata2019/). For the older 'announcement' release, head to the `gh-pages` branch.

## Getting Started
### Prerequisites
Ensure you have Node.js v10.0.0 or later installed (visit [nodejs.org](https://nodejs.org) for instructions).

### Install & Run

+ Clone or download this repository. If cloning, checkout this `develop` branch.
+ From the cloned directory, run `yarn install` (if using [Yarn](https://www.yarnpkg.com/)) or `npm install` to install all dependencies.
+ Run `yarn start` or `npm run start` to begin a local server.
+ Open a browser to http://localhost:8080.

## MVP Roadmap
The MVP roadmap includes the following milestones with primary features:
+ [ ] Release 1 (basemaps viewer)
  + [x] Map controls
  + [x] Layers button
  + [x] Scale bar
  + [ ] `LatLng` hash in URL ([leaflet-hash](https://www.npmjs.com/package/leaflet-hash)?)
  + [ ] `LatLng` on mouse position ([leaflet-mouse-position](https://www.npmjs.com/package/leaflet-mouse-position)?)
+ [ ] Release 2 (search: IAU nomenclature)
  + [x] `GET` from CARTO db (`opmbuilder.opm_499_mars_nomenclature_polygons`)
  + [x] Display text results
  + [x] Display marker results
  + [ ] Display polygon results
  + [ ] Add `LatLng` links
+ [ ] Release 3 (search: additional datasets)
  + [ ] `GET` to CARTO db (`?`)
+ [ ] Release 4 (add places)
  + [ ] `PUT` to CARTO db (`?`)