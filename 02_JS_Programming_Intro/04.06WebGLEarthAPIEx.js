var earth;

function initialize() {
    var options = {
        atmosphere: true,
        center: [0, 0],
        zoom: 0
    };
    earth = new WE.map('earth_div', options);
  
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(earth);

}

function goHome() {
    earth.setView([60.29966,25.06526]);
        earth.setZoom(16);
    
       
         // todo
}

function showCoords() {
     var center = earth.getCenter();
        alert("Latitude: " + center[0] +  "\nLongitude: " + center[1]);
    
        
     
   // todo

}