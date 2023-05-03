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

  //Color

  
  // Add mobileGifs and passiveGifs arrays
  const mobileGifs = ['mobile_gif1.gif', 'mobile_gif2.gif', 'mobile_gif3.gif', 'mobile_gif4.gif', 'mobile_gif5.gif', 'mobile_gif6.gif', 'mobile_gif7.gif', 'mobile_gif8.gif', 'mobile_gif9.gif', 'mobile_gif10.gif', 'mobile_gif11.gif', 'mobile_gif12.gif', 'mobile_gif13.gif', 'mobile_gif14.gif', 'mobile_gif15.gif', 'mobile_gif16.gif', 'mobile_gif17.gif', 'mobile_gif18.gif', 'mobile_gif19.gif', 'mobile_gif20.gif', 'mobile_gif21.gif', 'mobile_gif22.gif', 'mobile_gif23.gif'];
  const passiveGifs = ['passive_gif1.gif', 'passive_gif2.gif', 'passive_gif3.gif','passive_gif4.gif', 'passive_gif5.gif', 'passive_gif6.gif',  'passive_gif7.gif','passive_gif8.gif', 'passive_gif9.gif'];
  
  
  
  const zoom = d3.zoom()
  .scaleExtent([1, Infinity])
  .on("zoom", zoomed)
  .on("start", () => {
    gridContainer.style("cursor", "move");
  })
  .on("end", () => {
    gridContainer.style("cursor", "default");
  });
  
  function getColorForKeyword(keyword) {
    const colors = {
        'AERONAUTICAL MOBILE': 'rgb(0, 153, 216)', // red
        'AERONAUTICAL MOBILE SATELLITE': 'rgb(151, 201, 236)', // red
        'AERONAUTICAL RADIONAVIGATION': 'rgb(192, 80, 24)', // blue
        'AMATEUR': 'rgb(0, 147, 112)', // green
        'AMATEUR SATELLITE': 'rgb(174, 216, 197)', // red
        'BROADCASTING': 'rgb(51, 151, 185)', // red
        'BROADCASTING SATELLITE': 'rgb(98, 187, 70)', // blue
        'EARTH EXPLORATION SATELLITE': 'rgb(247, 146, 57)', // green
        'FIXED': 'rgb(223, 6, 140)', // red
        'FIXED SATELLITE': 'rgb(193, 131, 185)', // red
        'INTER-SATELLITE': 'rgb(225, 226, 118)', // blue
        'LAND MOBILE': 'rgb(0, 162, 178)', // green
        'LAND MOBILE SATELLITE': 'rgb(116, 204, 212)', // red
        'MARITIME MOBILE': 'rgb(233, 229, 195)', // red
        'MARITIME MOBILE SATELLITE': 'rgb(154, 201, 189)', // blue
        'MARITIME RADIONAVIGATION': 'rgb(0, 147, 112)', // green
        'METEOROLOGICAL': 'rgb(239, 215, 194)', // red
        'METEOROLOGICAL SATELLITE': 'rgb(150, 92, 15)', // red
        'MOBILE': 'rgb(233, 211, 231)', // blue
        'MOBILE SATELLITE': 'rgb(155, 91, 165)', // green
        'RADIO ASTRONOMY': 'rgb(255, 242, 0)', // red
        'RADIODETERMINATION SATELLITE': 'rgb(250, 171, 84)', // red
        'RADIOLOCATION': 'rgb(243, 207, 30)', // blue
        'RADIOLOCATION SATELLITE': 'rgb(196, 160, 6)', // green
        'RADIONAVIGATION': 'rgb(171, 189, 38)', // green
        'RADIONAVIGATION SATELLITE': 'rgb(232, 234, 124)', // red
        'SPACE OPERATION': 'rgb(164, 65, 56)', // red
        'SPACE RESEARCH': 'rgb(230, 141, 150)', // blue
        'STANDARD FREQUENCY AND TIME SIGNAL': 'rgb(142, 151, 157)', // green
        'STANDARD FREQUENCY AND TIME SIGNAL SATELLITE': 'rgb(179, 181, 184)', // red

    };
    return colors[keyword] || "black";
  }


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
          
            // Create color legend
            let legendHtml = "";
            const keywords = [
                "AERONAUTICAL MOBILE",
                "AERONAUTICAL MOBILE SATELLITE",
                "AERONAUTICAL RADIONAVIGATION",
                "AMATEUR",
                "AMATEUR SATELLITE",
                "BROADCASTING",
                "BROADCASTING SATELLITE",
                "EARTH EXPLORATION SATELLITE",
                "FIXED",
                "FIXED SATELLITE",
                "INTER-SATELLITE",
                "LAND MOBILE",
                "LAND MOBILE SATELLITE",
                "MARITIME MOBILE",
                "MARITIME MOBILE SATELLITE",
                "MARITIME RADIONAVIGATION",
                "METEOROLOGICAL",
                "METEOROLOGICAL SATELLITE",
                "MOBILE",
                "MOBILE SATELLITE",
                "RADIO ASTRONOMY",
                "RADIODETERMINATION SATELLITE",
                "RADIOLOCATION",
                "RADIOLOCATION SATELLITE",
                "RADIONAVIGATION",
                "RADIONAVIGATION SATELLITE",
                "SPACE OPERATION",
                "SPACE RESEARCH",
                "STANDARD FREQUENCY AND TIME SIGNAL",
                "STANDARD FREQUENCY AND TIME SIGNAL SATELLITE"
              ];
              

            keywords.forEach(keyword => {
              if (Object.values(d).some(val => val && val.trim() === keyword)) {
                legendHtml += `<span class="color-box" style="background-color: ${getColorForKeyword(keyword)};"></span>`;
              }
            });
          
            d3.select('.color-legend').html(legendHtml);
          })

          .on('mouseout', function() {
    infoDiv.style('opacity', 0);
    d3.select('.color-legend').html(''); // Clear the color legend
  })
        .on('click', function(d) {
          const bigImageContainer = d3.select('.big-image-container')
            .style('display', 'block');
    
        
          if (bigImageSvg) {
            bigImageSvg.remove();
          }
        
          bigImageSvg = bigImageContainer.append('svg')
            .attr('width', '100%')
            .attr('height', '100%');
        
          const imageType = d3.select(this).attr('xlink:href').includes('mobile_gif') ? 'MOBILE' : 'PASSIVE';
        //   const xPos = imageType === 'MOBILE' ? '50%' : '50%';
        //   const yPos = imageType === 'MOBILE' ? '52%' : '100%';
        console.log(imageType);
        if (imageType=="PASSIVE"){
            bigImageContainer.style('top', '53.3%')
        } else {
            bigImageContainer.style('top', '0')
        }
        
          bigImageSvg.append('image')
            // .attr('x', xPos)
            // .attr('y', yPos)
            .attr('top',0)
            .attr('left',0)
            .attr('width', "100%")
            .attr('height', "100%")
            .attr('preserveAspectRatio', 'xMidYMid slice')
            .attr('xlink:href', d3.select(this).attr('xlink:href'))
            // .style('transform', 'translate(-50%, -50%)')
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