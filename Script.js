// Creating map options
var mapOptions = {
    center: [17.385044, 78.486671],
    zoom: 10
}

// Creating a map object
var map = new L.map('map', mapOptions);

// Creating a Layer objectx
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

// Adding layer to the map
map.addLayer(layer);

function handleZoomChange(e) {
  console.log(`Zoom level changed to ${map.getZoom()}`);
}

// Add an event listener for the "zoom" event
map.fire('click', handleZoomChange);



const apiUrl = 'https://randomuser.me/api/';


// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

//  const inputElement = document.querySelector('input');

//  function handleChange() {  
//     console.log(map.getCenter().toString())
//     console.log(map.getZoom().toString())
//  }
 
//  document.getElementById('map',handleChange)






 