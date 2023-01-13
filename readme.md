# Parks and Makan (Map Theme Project 01)
## - Project Summary (User Story)

The project is aimed for Outdoor enthusiast(trekkers, cyclist) and nature lovers. The app provides a platform for these users to check the location of nature parks and tracks and also search for food options around the vicinity. The ultimate aim of the project is to also be a platform for these Users to share nature sightings and events happening along these nature parks and tracks. It can also serve as a guide for the users to visit areas with higher density of nature sightings in order to get a glimpse of the flora and fauna around singapore. This may also aid researchers to record the variety of ecosystems of the connected nature reserves around singapore.
## - UI/UX
- UIUX of the app is done with a mobile mindset in mind.
- The map controls are done on the bottom right and left of the screen to ease User experience.

![Image Link](https://github.com/Zauriel2814/20221119-Maps-Project/blob/main/images/Homepage.png)

- App elements are stored in an OffCanvas Navbar to ease User experience

![Image Link](https://github.com/Zauriel2814/20221119-Maps-Project/blob/main/images/OffCanvas.png)

## - Features
- App uses cycling track, park tracks and nature reserve geojson files to draw linestring and multipolygon on Map.
- Leaflet layer control is used to toggle the drawings overlays on the Map.
- Leaflet popup to show the park/nature reserve name and track type.
- Eating places search function integrated using foursquare API with custom markers.
- User can click on the individual search result to fly to the location on the map. 
- Interface coded using bootstrap HTML/CSS for mobile responsiveness.
- Modal form to be implemented for users to share about current or future events such as outdoor activities, ongoing construction works or nature sightings located at the parks, nature reserves or along the cycling tracks.

## - Technologies Used
The App interface is coded in Bootstrap HTML/CSS and the functions are coded in Javascript. External Plugins are as follows:

### - Leaflet :
- Tilelayer Map
- Linestring Drawing
- Multipolygon Drawing
- Popup to extract name and track type information
- Map overlay control

### - Foursquare :
- Places search API to enable user to closest eating places around their vicinity

## - Improvements to be made
- do up a better format for the "observe and Report" modal users to share info regarding :
##### - Nature Sightings 
##### - Park activities
##### - construction works/Accidents 
- App to include routing(trek, cycle) function to help direct user to selected/desired place
- App should be able to center map at User current location