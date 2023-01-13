async function main() {

    loadLayers()
    async function loadLayers() {
        let map = initMap();
        const natureResponse = await axios.get('nature.geojson');
        const natureLayer = L.geoJson(natureResponse.data, {
            onEachFeature:function (feature, layer) {
                layer.bindPopup(feature.properties.Name);
            }
        }).addTo(map);
        natureLayer.setStyle({
            color: 'blue'
        });
        //cycling tracks overlay 
        const cycleResponse = await axios.get('cycling-path.geojson');
        const cyclingLayer = L.geoJson(cycleResponse.data, {
            onEachFeature: (feature, layer) => {
                //extracting only the region and department in the popup info
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
        //nparks track overlay
        const parksResponse = await axios.get("nparks.geojson");
        const parksLayer = L.geoJson(parksResponse.data, {
            onEachFeature: (feature, layer) => {
                //extracting only the region and department in the popup info      
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
                              Track type: ${type}
                         </p>
                      </div>`);
            }
        }).addTo(map);
        parksLayer.setStyle({
            color: 'green'
        })
        //search results base layer
        const resultLayer = L.layerGroup();
        resultLayer.addTo(map);

        document.querySelector("#search-btn").addEventListener("click", async function () {

            // remove all existing markers and search elements
            resultLayer.clearLayers();
            const searchContainer = document.querySelector("#search-results");
            searchContainer.innerHTML = '';

            const searchTerms = document.querySelector("#search-terms").value;
            const center = map.getBounds().getCenter();
            const ll = center.lat + "," + center.lng;
            const results = await loadData(searchTerms, ll, 2000);
            displaySearchResults(results.results, resultLayer, map);

        });

        document.querySelector("#clear-search-btn").addEventListener("click", function () {
            clear_search();
        })
        function clear_search() {
            resultLayer.clearLayers();
            const clearContainer = document.querySelector("#search-results");
            clearContainer.innerHTML = ''; 
        }

        const baseLayers = {}
        const overlays = {
            "Cycling Track": cyclingLayer,
            "Park Track": parksLayer, 
            "Nature Reserve": natureLayer
        }
        L.control.layers(baseLayers, overlays).setPosition('bottomleft').addTo(map)
        map.zoomControl.setPosition('bottomright');


    }



}

main();

