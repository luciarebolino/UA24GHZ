(function () {
  require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/MapImageLayer",
  ], function (Map, MapView, MapImageLayer) {
    
    // Create the NOAA satellite imagery layer
    const satelliteImageryLayer = new MapImageLayer({
      url: "https://nowcoast.ncep.noaa.gov/arcgis/rest/services/nowcoast/sat_meteo_imagery_time/MapServer?f=jsapi",
      title: "Satellite Imagery"
    });

    // Create the map with a satellite basemap
    const map = new Map({
      basemap: "satellite"
    });

    // Add the satellite imagery layer to the map
    map.add(satelliteImageryLayer);

    // Create the MapView
    const view = new MapView({
      container: "viewDiv2",
      map: map,
      zoom: 6,
      center: [-74.0060, 40.7128], // Set the center to New York City (Longitude, Latitude)
      constraints: {
        minZoom: 5,
        maxZoom: 20,
      },
      ui: {
        components: [],
      },
    });

  });
})();
