document.addEventListener('DOMContentLoaded', () => {
  // Define global variables
  let csvData = {
    'data.csv': [],
    'data2.csv': [],
    'data3.csv': []
  };
  let gridContainer, infoDiv;

// Define grid dimensions
const containerWidth = 900;
const containerHeight = 900;
const numColumns = 10;
const numRows = 10;
const gridItemWidth = containerWidth / numColumns;
const gridItemHeight = (containerHeight / 2) / numRows;

// Add mobileGifs and passiveGifs arrays
const mobileGifs = ['mobile_gif1.gif', 'mobile_gif2.gif', 'mobile_gif3.gif'];
const passiveGifs = ['passive_gif1.gif', 'passive_gif2.gif', 'passive_gif3.gif'];



const zoom = d3.zoom()
.scaleExtent([1, Infinity])
.on("zoom", zoomed)
.on("start", () => {
  gridContainer.style("cursor", "move");
})
.on("end", () => {
  gridContainer.style("cursor", "default");
});

function zoomed() {
  const transform = d3.event.transform;
  const maxPanX = Infinity;
  const maxPanY = Infinity;

  transform.x = Math.min(Math.max(transform.x, -maxPanX), maxPanX);
  transform.y = Math.min(Math.max(transform.y, -maxPanY), maxPanY);

  gridContainer.attr("transform", transform);
}

    

  // Set the default zoom level
  let currentZoomLevel = 1;

  let bigImageSvg = null;



  function updateGrid(data) {
      gridContainer.selectAll('.grid-item').remove();
    
      // Apply the zoom behavior to the gridContainer element
      gridContainer.call(zoom);
    
      const gridItems = gridContainer.selectAll('.grid-item')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'grid-item')
      .attr('transform', (d, i) => `translate(${(i % numColumns) * gridItemWidth}, ${Math.floor(i / numColumns) * gridItemHeight})`);
    
    gridItems.append('rect')
      .attr('width', gridItemWidth)
      .attr('height', gridItemHeight)
      .style('fill', 'black')
      .style('stroke', 'black')
      .style('stroke-width', '0');
    
    gridItems.append('image')
      .attr('width', gridItemWidth)
      .attr('height', gridItemHeight)
      .attr('preserveAspectRatio', 'xMidYMid slice')
      .attr('xlink:href', d => {
        for (let i = 1; i <= 8; i++) {
          const column = `Primary Allocations UPPER (${i})`;
          if (d[column] && d[column].includes('PASSIVE')) {
            const randomIndex = Math.floor(Math.random() * passiveGifs.length);
            return `./passive_gif/${passiveGifs[randomIndex]}`;
          } else if (d[column] && d[column].trim() === 'MOBILE') {
            const randomIndex = Math.floor(Math.random() * mobileGifs.length);
            return `./mobile_gif/${mobileGifs[randomIndex]}`;
          }
        }
        return '';
      })
      .on('mouseover', function(d) {
        infoDiv.html(`${d["Min (MHz)"]} - ${d["Max (MHz)"]} MHz`)
          .style('opacity', 1);
      })
      .on('mouseout', function() {
        infoDiv.style('opacity', 0);
      })
      .on('click', function(d) {
        const bigImageContainer = d3.select('.big-image-container')
          .style('display', 'block')
      
        if (bigImageSvg) {
          bigImageSvg.remove();
        }
      
        bigImageSvg = bigImageContainer.append('svg')
          .attr('width', '100%')
          .attr('height', '100%');
      
        const imageType = d3.select(this).attr('xlink:href').includes('mobile_gif') ? 'MOBILE' : 'PASSIVE';
        const xPos = imageType === 'MOBILE' ? '50%' : '50%';
        const yPos = imageType === 'MOBILE' ? '52%' : '100%';
      
        bigImageSvg.append('image')
          .attr('x', xPos)
          .attr('y', yPos)
          .attr('width', 870)
          .attr('height', 450)
          .attr('preserveAspectRatio', 'xMidYMid slice')
          .attr('xlink:href', d3.select(this).attr('xlink:href'))
          .style('transform', 'translate(-50%, -50%)')
          .on('click', () => {
            bigImageSvg.remove();
            bigImageContainer.style('display', 'none');
            bigImageSvg = null;
          });
      })
      
    
      // Update the SVG container's dimensions
      const svg = d3.select('.grid-container').select('svg');
      svg.attr('width', containerWidth)
      .attr('height', containerHeight); // Changed from containerHeight / 2 to containerHeight
   
  }
  
  
  
  
  

  

  function loadCSVs() {
      gridContainer = d3.select('.grid-container').append('svg').attr('width', containerWidth).attr('height', containerHeight / 2).append('g');
      infoDiv = d3.select('.info');

    return Promise.all([
      d3.csv('data.csv'),
      d3.csv('data2.csv'),
      d3.csv('data3.csv')
    ]).then(function (data) {
      csvData['data.csv'] = data[0];
      csvData['data2.csv'] = data[1];
      csvData['data3.csv'] = data[2];
      updateGrid(csvData['data.csv']);
    });
  }

  function filterByKeyword(region, keyword) {
    const filteredData = csvData[region].filter(d => {
      for (let i = 1; i <= 8; i++) {
        if (d[`Primary Allocations UPPER (${i})`] && d[`Primary Allocations UPPER (${i})`].trim() === keyword) {
          return true;
        }
      }
      return false;
    });
    updateGrid(filteredData);
  }


  //Define the zoomToFrequencyRange function. 
  function zoomToFrequencyRange(minFreq, maxFreq) {
    const region = d3.select('#region-select').property('value');
    const data = csvData[region];
    
    const minItem = data.find(d => parseFloat(d["Min (MHz)"]) >= minFreq);
    const maxItem = data.find(d => parseFloat(d["Max (MHz)"]) <= maxFreq);
    
    if (!minItem || !maxItem) {
      console.log('Frequency range not found.');
      return;
    }
    
    const minIndex = data.indexOf(minItem);
    const maxIndex = data.indexOf(maxItem);
    
    const x1 = (minIndex % 10) * 11;
    const y1 = Math.floor(minIndex / 10) * 11;
    const x2 = (maxIndex % 10) * 11;
    const y2 = Math.floor(maxIndex / 10) * 11;
  
    const centerX = (x1 + x2) / 2;
    const centerY = (y1 + y2) / 2;
  
    const svg = d3.select("svg");
  
    svg.transition().duration(750).call(
      zoom.transform,
      d3.zoomIdentity.translate(svg.attr("width") / 2, svg.attr("height") / 2).scale(40).translate(-centerX, -centerY),
      [centerX, centerY]
    );

    
  }

  

 

// Update event listeners for buttons and dropdown
d3.select("#region-select").on("change", function () {
  const region = this.value;
  updateGrid(csvData[region]);
});

// Add event listener for the new drop-down menu
d3.select('#spectrum-select').on('change', function () {
  const region = d3.select('#region-select').property('value');
  const filterValue = this.value;

  if (filterValue === 'showAll') {
    updateGrid(csvData[region]);
  } else {
    filterByKeyword(region, filterValue);
  }
});

  // Add event listeners for the zoom buttons
  d3.select('#zoomIn').on('click', function () {
    currentZoomLevel = Math.min(currentZoomLevel + 1, 40);
    const svg = d3.select("svg");
    svg.transition().duration(750).call(zoom.scaleTo, currentZoomLevel);
  });

  d3.select('#zoomOut').on('click', function () {
    currentZoomLevel = Math.max(currentZoomLevel - 1, 1);
    const svg = d3.select("svg");
    svg.transition().duration(750).call(zoom.scaleTo, currentZoomLevel);
  });

  d3.select('#randomZoom').on('click', function () {
    // Generate random x and y coordinates within the viewBox
    const x = Math.random() * 100;
    const y = Math.random() * 80;

    const svg = d3.select("svg");

    // Zoom to the random area
    svg.transition().duration(750).call(
      zoom.transform,
      d3.zoomIdentity.translate(svg.attr("width") / 2, svg.attr("height") / 2).scale(40).translate(-x, -y),
      [x, y]
    );
  });


  //add a new event listener for the custom zoom button
  d3.select('#customZoom').on('click', function () {
    zoomToFrequencyRange(235000, 240000);
  });
  

  // Load data and initialize
  loadCSVs();
});