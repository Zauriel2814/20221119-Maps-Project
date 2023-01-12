async function loadData(query, latLng, radius) {
    // the second parameter of axios.get is a configuration object
    // in the configuration object we can set the query string parameters
    // via the 'params' key
    const response = await axios.get("https://api.foursquare.com/v3/places/search", {
        params: {
            query: query,
            ll: latLng,
            v: '20210903',  // indicate which version of FourSquare to use
            radius: radius,
            limit: 50
        },
        headers: {
            Accept: 'application/json',
            Authorization: 'fsq34xgPWba4ftR9zvuBMK9l86wGFmmxdb5FclU4c0jroHk='
        }
    });
    return response.data;
}
