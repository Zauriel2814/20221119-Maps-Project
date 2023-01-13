function initMap() {
    const centerPoint = [1.3521, 103.8198];
    const map = L.map("map");
    map.setView(centerPoint, 14);

    // create the tile layer
    const tileLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
    });
    tileLayer.addTo(map);
    return map;
}
const foodIcon = L.icon({
    iconUrl: "images/restaurant-marker.png",
    iconAnchor: [32,64],
    popupAnchor: [0,-64]
});
function displaySearchResults(results, resultLayer, map) {

    for (let r of results) {
        const lat = r.geocodes.main.latitude;
        const lng = r.geocodes.main.longitude;
        const marker = L.marker([lat, lng],{icon: foodIcon});
        marker.addTo(resultLayer);
        marker.bindPopup(function () {
            let div = document.createElement('div');
            div.innerHTML = `<h1>${r.name}</h1>
                        <button class="btn">Click me</button>`;
            div.querySelector(".btn").addEventListener("click", function () {
                alert(r.name);
            })

            return div;
        });

        // display the search result under the search box

        // create a new element to store the result
        let resultElement = document.createElement('div');
        resultElement.innerHTML = r.name;

        document.querySelector("#search-results").appendChild(resultElement);
        resultElement.addEventListener("click", function () {
            map.flyTo([lat, lng]);
            marker.openPopup();
        })

    }
}


