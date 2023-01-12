async function main() {

    loadLayers()
    async function loadLayers() {
        let map = initMap();
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
                              Park type: ${type}
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

            // remove all existing markers from search
            resultLayer.clearLayers();

            const searchTerms = document.querySelector("#search-terms").value;
            const center = map.getBounds().getCenter();
            const ll = center.lat + "," + center.lng;
            const results = await loadData(searchTerms, ll, 2000);
            displaySearchResults(results.results, resultLayer, map);

        });

        document.querySelector("#toggle-search-btn").addEventListener("click", function () {
            toggle_search();
        })

        const baseLayers = { resultLayer };
        const overlays = {
            "Cycling": cyclingLayer,
            "Park": parksLayer
        }
        L.control.layers(baseLayers, overlays).addTo(map)


    }



}

main();

