
let singapore = [1.29, 103.85];
const map = L.map('map');
map.setView(singapore, 13);

const tileLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
});

tileLayer.addTo(map);   

loadCycle();
loadParks();
// loadData function for cycling path
async function loadCycle(){
  const response = await axios.get('cycling-path.geojson');

  const cyclingLayer = L.geoJson(response.data, {
    onEachFeature:(feature, layer) => {         
        let e = document.createElement('div');
        e.innerHTML = feature.properties.Description;
        let tds = e.querySelectorAll('td');
        let region = tds[0].innerHTML;
        let department = tds[1].innerHTML;
        layer.bindPopup(`<div>
             <p>
                  Region: ${region}
             </p>
             <p>
                  Department: ${department}
             </p>
          </div>`);            
     }
}).addTo(map);

  cyclingLayer.setStyle({
    color: 'brown'
  });

} 
// loadParks function for nparks
async function loadParks() {
  const response = await axios.get("nparks.geojson");
  const parksLayer = L.geoJson(response.data, {
    onEachFeature:(feature, layer) => {         
        let e = document.createElement('div');
        e.innerHTML = feature.properties.Description;
        let tds = e.querySelectorAll('td');
        let region = tds[0].innerHTML;
        let type = tds[1].innerHTML;
        layer.bindPopup(`<div>
             <p>
                  Name: ${region}
             </p>
             <p>
                  Park type: ${type}
             </p>
          </div>`);            
     }
}).addTo(map);
  parksLayer.setStyle({
    color:'green'
  })
}
