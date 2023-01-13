# Parks and Makan (Map Theme Project 01)
## - Project Summary (User Story)

## - UI/UX

## - Features
- App uses cycling track, park tracks and nature reserve geojson files to draw linestring and multipolygon on Map.
- Leaflet layer control is used to toggle the drawings overlays on the Map.
- Leaflet popup to show the park/nature reserve name and track type.
- Eating places search function integrated using foursquare API with custom markers.
- User can click on the individual search result to fly to the location on the map. 
- Interface coded using bootstrap HTML/CSS for mobile responsiveness.
- In future, form can be implemented for users to share about current or future events such as outdoor activities, ongoing construction works or nature sightings located at the parks, nature reserves or along the cycling tracks.

## - Technologies Used
### - Leaflet :
- Tilelayer Map
- Linestring Drawing
- Multipolygon Drawing
- Popup to extract name and track type information
- Map overlay control

### - Foursquare :
- Places search API to enable user to closest eating places around their vicinity

### - Bootstrap :
- Offcanvas NavBar UI

## - Improvements to be made
- do up a format for users to share info regarding :
##### - Nature Sightings 
##### - Park activities
##### - construction works/Accidents 
- App to include routing(trek, cycle) function to help direct user to selected/desired place
- App should be able to center map at User current location