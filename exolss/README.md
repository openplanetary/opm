# ExoMars LLS (formerly "Where On Mars?")

Welcome to the *ExoMars LSS* interactive map project repository.

ExoMars LSS (Landing Site Selection) is an interactive visualisation of the ESA's ExoMars Rover candidate landing sites, available [here](http://openplanetarymap.org/exolss). It results from the *"Where On Mars?"* project, and changed name and repository when it moved into the new **OpenPlanetaryMap** framework in [September 2016](http://openplanetary.co/blog/community/whereonmars-opm.html) and March 2017.

* [The "Where On Mars?" Project](#the-where-on-mars-project)
* [The Interactive Map](#the-interactive-map)
* [Basemaps and Datasets](#basemaps-and-datasets)
* [How to Contribute?](#how-to-contribute)
* [Acknowledgment](#acknowledgment)

~~~~
Web App: http://openplanetarymap.org/exolss
GitHub: https://github.com/openplanetary/opm/exolss
CARTO: https://whereonmars.cartodb.com
Twitter: https://twitter.com/opmteam
Website: http://openplanetarymap.org/exolss/whereonmars (archive)
~~~~

## The "Where On Mars?" Project

*"Where on Mars should the first European rover land?*

The project started off early 2015 at the European Space Astronomy Centre (ESAC) in Madrid (Spain) as a [trainee project](https://www.cosmos.esa.int/web/esac-trainees) in collaboration with CartoDB (now [CARTO](https://carto.com)).

### Objectives

The original objective and idea for this project was twofold:
* *Technological*: To experiment with the use of modern open-source web mapping technologies applied to planetary science data and geospatial information.

* *Educational*: To increase public awareness of the ExoMars 2020 mission and, more generally, of the scientific and robotic exploration of Mars in Europe.

### The Team

This project was made possible because of a collaboration of people from ESA's European Space Astronomy Centre (ESAC) and CartoDB, and the support of Mars scientists (see [Acknowledgment](#acknowledgment)).

* [Nicolas Manaud](https://twitter.com/nmanaud) (ESAC Trainee Project Lead)
* [Oriol Boix](https://twitter.com/oriolbx) (Geospatial Data & Front-End Developer) - Project Trainee
* [Carla Iriberri](https://twitter.com/iriberri1) (CartoDB Support)
* [Andrew Hill](https://twitter.com/andrewxhill) (Project Co-supervisor)


### The ExoMars 2020 Mission
_Searching for Life on Mars_

The 2020 mission of the [ESA's ExoMars programme](http://exploration.esa.int/) will deliver a European rover and a Russian surface platform to the surface of Mars. While the platform will study the martian environment, the rover will travel across the surface to search for signs of past and present life. It will collect samples with a drill and analyse them with next-generation instruments. ExoMars will be the first mission to combine the capability to move across the surface and to study Mars at depth. [Learn more](http://exploration.esa.int/mars/48088-mission-overview/).

### The Landing Site Selection Process
_How to find a suitable landing site for the rover?_

In October 2013, a [Landing Site Selection Working Group (LSSWG)](http://exploration.esa.int/mars/53454-exomars-2018-landing-site-selection-working-group/) was appointed to make recommendations to the European Space Agency (ESA) and the Russian Federal Space Agency (Roscosmos). After a call to the scientific community for landing sites, four candidate landing sites were shortlisted for further investigation, both in term of scientific interest and engineering safety.

In October 2015, Oxia Planum was recommended be considered as one of the two candidate landing sites for the launch opportunity in 2020, with a second to be selected from Aram Dorsum and Mawrth Vallis.

In March 2017, *Oxia Planum* and *Mawrth Vallis* were selected as final candidates. The year before launch, ESA will make the final decision. [Learn more](http://exploration.esa.int/mars/53845-landing-site/)



# The Interactive Map

The "Where On Mars?" [interactive map](http://openplanetarymap.org/exolss) was designed as a *storymap* guide people through the main scientific and engineering constraints for the selection of the ExoMars 2020 landing site. It allows  to explore Mars and each candidate landing site using a selection of the same ESA and NASA planetary images, and additional geospatial information used by the scientists involved in the selection process. It relies on CartoDB and other open-source mapping technologies for processing, storing, and visualising data on the web.

The source code of the front-end web interface is now available [here](https://github.com/openplanetary/opm/tree/gh-pages/exolss).

# Basemaps and Datasets

Several new Mars basemaps and geospatial datasets have been created for this project. They are all available to anyone for use in CartoDB Editor, or web mapping applications. Check the following links for more info:

* https://github.com/openplanetary/opm/wiki/Basemaps
* https://github.com/openplanetary/opm/wiki/Datasets

# How to contribute?

The project has ended and the source code is longer maintained, basemaps and datasets are being used as building block for the OpenPlanetaryMap project. The spirit of "Where On Mars?" continues with OpenPlanetaryMap!

If you're interested in contributing, see the OpenPlanetaryMap [CONTRIBUTING.md](https://github.com/openplanetary/opm/blob/master/CONTRIBUTING.md) file.

# Acknowledgment

We acknowledge the **ESAC** HR Service and the Science Operations Department for having organised and funded this [ESAC Trainee Project](https://www.cosmos.esa.int/web/esac-trainees), part of the ESA Student Placement.

We would like to particularly thank **Javier de la Torre**, **Andrew Hill** and the [CARTO team](https://carto.com/team) in Madrid for collaborating on this project. Thank you **Carla Iriberri**, **Dani Carrión**, **Javi Santana**, **Alejandro Martínez**, and **Carlos Matallín** for your enthusiasm, hospitality, and amazing support!

We acknowledge advice and data provided by the [UK NASA RPIF](https://www.ucl.ac.uk/earth-sciences/research/rpif) at UCL: especially **Peter Grindrod** ([blog](http://www.petergrindrod.net/stuff/blog)) and **Elliot Sefton-Nash**.

We also thank the [Landing Site Selection Working Group](http://exploration.esa.int/mars/53454-exomars-2018-landing-site-selection-working-group/) (LSSWG) for supporting this project, in particular: **Jorge Vago** (ExoMars Project Scientist), and **Ernst Hauber** (Planetary Geologist at DLR/Berlin).
