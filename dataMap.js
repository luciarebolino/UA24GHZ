(function () {
  require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/MapImageLayer",
    "esri/widgets/Home",
    "esri/widgets/LayerList",
    "esri/PopupTemplate",
    "esri/renderers/UniqueValueRenderer",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/layers/CSVLayer"
  ], function (Map, MapView, MapImageLayer, Home, LayerList, PopupTemplate, UniqueValueRenderer, SimpleMarkerSymbol, CSVLayer) {

    // Create the NOAA satellite imagery layer
    const satelliteImageryLayer = new MapImageLayer({
      url: "https://nowcoast.ncep.noaa.gov/arcgis/rest/services/nowcoast/sat_meteo_imagery_time/MapServer?f=jsapi",
      title: "Satellite Imagery"
    });

    // Create the CSVLayer for hurricane data
    const url = "hurricanesdata.csv"; // Replace with the URL of your CSV file
    const csvLayer = new CSVLayer({
      url: url,
      title: "Historic Hurricanes",
      outFields: ["*"],
      popupTemplate: {
        title: "{Name}",
        content: "Category: {Category}<br>Date: {ISO_time}"
      },
      renderer: getHurricaneRenderer()
    });

    // Create the map with a basemap
    const map = new Map({
      basemap: "satellite", // Use the original "satellite" basemap
      layers: [satelliteImageryLayer, csvLayer] // Add the satellite imagery and CSV layers
    });

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

    // Add a Home button to the view
    const homeBtn = new Home({
      view: view
    });
    view.ui.add(homeBtn, "top-left");

    // Add a LayerList widget to the view
    const layerList = new LayerList({
      view: view
    });
    view.ui.add(layerList, "top-right");

    // Initialize the year selector and set up the change event handler
    const yearSelector = document.getElementById("yearSelector");
    yearSelector.addEventListener("change", function () {
      const selectedYears = Array.from(yearSelector.selectedOptions).map(option => option.value);
      updateHurricaneLayer(selectedYears);
    });

    // Function to update the hurricane layer based on the selected years
    function updateHurricaneLayer(years) {
      const yearExpressions = years.map(year => `DatePart('yyyy', ISO_time) = ${year}`);
      csvLayer.definitionExpression = yearExpressions.join(" OR ");
    }

    // Update the hurricane layer with the initial year selection
    const initialSelectedYears = Array.from(yearSelector.selectedOptions).map(option => option.value);
    updateHurricaneLayer(initialSelectedYears);

    // Function to get dot opacity based on category
    function getCategoryOpacity(category) {
      switch (category) {
        case 1:
          return 0.8;
        case 2:
          return 0.7;
        case 3:
          return 0.6;
        case 4:
          return 0.5;
        case 5:
          return 0.4;
        default:
          return 1;
        }
      }
  
      // Function to create UniqueValueRenderer for hurricane data
      function getHurricaneRenderer() {
        return new UniqueValueRenderer({
          field: "Category",
          uniqueValueInfos: [
            {
              value: "TS",
              symbol: new SimpleMarkerSymbol({
                color: [0, 255, 255, getCategoryOpacity("TS")],
                size: 4,
                outline: {
                  color: [255, 255, 255],
                  width: 1
                }
              })
            },
            {
              value: "1",
              symbol: new SimpleMarkerSymbol({
                color: [0, 255, 255, getCategoryOpacity(1)],
                size: 4,
                outline: {
                  color: [255, 255, 255],
                  width: 1
                }
              })
            },
            {
              value: "2",
              symbol: new SimpleMarkerSymbol({
                color: [0, 255, 255, getCategoryOpacity(2)],
                size: 4,
                outline: {
                  color: [255, 255, 255],
                  width: 1
                }
              })
            },
            {
              value: "3",
              symbol: new SimpleMarkerSymbol({
                color: [0, 255, 255, getCategoryOpacity(3)],
                size: 4,
                outline: {
                  color: [255, 255, 255],
                  width: 1
                }
              })
            },
            {
              value: "4",
              symbol: new SimpleMarkerSymbol({
                color: [0, 255, 255, getCategoryOpacity(4)],
                size: 4,
                outline: {
                  color: [255, 255, 255],
                  width: 1
                }
              })
            },
            {
              value: "5",
              symbol: new SimpleMarkerSymbol({
                color: [0, 255, 255, getCategoryOpacity(5)],
                size: 4,
                outline: {
                  color: [255, 255, 255],
                  width: 1
                }
              })
            }
          ]
        });
      }
  
    });
  })();
  