function initMap() {
    var uluru = { lat: 37.465162, lng: -122.429405 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        scrollwheel: false,
        draggable: true,
        zoomControl: true,
        streetViewControl: false,
        center: uluru,
        styles: [{
                "featureType": "administrative",
                "elementType": "labels.text",
                "stylers": [{
                    "color": "#ff8c00"
                }]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#fc6919"
                }]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.stroke",
                "stylers": [{
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text",
                "stylers": [{
                    "color": "#000000"
                }]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#212121"
                }]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                    "color": "#f2f2f2"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                        "color": "#2aaee4"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}





// // When the window has finished loading create our google map below
// google.maps.event.addDomListener(window, 'load', init);

// function init() {
//     // The latitude and longitude to center the map
//     var myLatlng = new google.maps.LatLng(37.465162, -122.429405);

//     // Basic options for a simple Google Map
//     var mapOptions = {
//         zoom: 11,
//         scrollwheel: false,
//         draggable: true,
//         zoomControl: true,
//         streetViewControl: false,


//         center: myLatlng, // FogTownToys

//         styles: [{
//                 "featureType": "administrative",
//                 "elementType": "labels.text",
//                 "stylers": [{
//                     "color": "#ff8c00"
//                 }]
//             },
//             {
//                 "featureType": "administrative",
//                 "elementType": "labels.text.fill",
//                 "stylers": [{
//                     "color": "#fc6919"
//                 }]
//             },
//             {
//                 "featureType": "administrative",
//                 "elementType": "labels.text.stroke",
//                 "stylers": [{
//                         "visibility": "on"
//                     },
//                     {
//                         "color": "#ffffff"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "administrative.country",
//                 "elementType": "labels.text",
//                 "stylers": [{
//                     "color": "#000000"
//                 }]
//             },
//             {
//                 "featureType": "administrative.country",
//                 "elementType": "labels.text.fill",
//                 "stylers": [{
//                     "color": "#212121"
//                 }]
//             },
//             {
//                 "featureType": "administrative.country",
//                 "elementType": "labels.text.stroke",
//                 "stylers": [{
//                     "color": "#ffffff"
//                 }]
//             },
//             {
//                 "featureType": "landscape",
//                 "elementType": "all",
//                 "stylers": [{
//                     "color": "#f2f2f2"
//                 }]
//             },
//             {
//                 "featureType": "poi",
//                 "elementType": "all",
//                 "stylers": [{
//                     "visibility": "off"
//                 }]
//             },
//             {
//                 "featureType": "road",
//                 "elementType": "all",
//                 "stylers": [{
//                         "saturation": -100
//                     },
//                     {
//                         "lightness": 45
//                     }
//                 ]
//             },
//             {
//                 "featureType": "road.highway",
//                 "elementType": "all",
//                 "stylers": [{
//                     "visibility": "simplified"
//                 }]
//             },
//             {
//                 "featureType": "road.arterial",
//                 "elementType": "labels.icon",
//                 "stylers": [{
//                     "visibility": "off"
//                 }]
//             },
//             {
//                 "featureType": "transit",
//                 "elementType": "all",
//                 "stylers": [{
//                     "visibility": "off"
//                 }]
//             },
//             {
//                 "featureType": "water",
//                 "elementType": "all",
//                 "stylers": [{
//                         "color": "#2aaee4"
//                     },
//                     {
//                         "visibility": "on"
//                     }
//                 ]
//             }
//         ]
//     };

//     // Get the HTML DOM element that will contain your map 
//     var mapElement = document.getElementById('map-canvas');

//     // Create the Google Map using out element and options defined above
//     var map = new google.maps.Map(mapElement, mapOptions);

//     var marker = new google.maps.Marker({
//         position: myLatlng,
//         map: map,
//         title: "FogTownToys"
//     });

// }


// var infoWindow

// infoWindow = new google.maps.InfoWindow

// // Try HTML5 geolocation.
// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     var pos = {
//       lat: position.coords.latitude,
//       lng: position.coords.longitude
//     };

//     infoWindow.setPosition(pos);
//     infoWindow.setContent('Location found.');
//     infoWindow.open(map);
//     map.setCenter(pos);
//   }, function() {
//     handleLocationError(true, infoWindow, map.getCenter());
//   });
// } else {
//   // Browser doesn't support Geolocation
//   handleLocationError(false, infoWindow, map.getCenter());
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(browserHasGeolocation ?
//                         'Error: The Geolocation service failed.' :
//                         'Error: Your browser doesn\'t support geolocation.');
//   infoWindow.open(map);
// }

// var directionsService = new google.maps.DirectionsService;
//         var directionsDisplay = new google.maps.DirectionsRenderer;

//         directionsDisplay.setMap(myLatlng);

//         var onChangeHandler = function() {
//           calculateAndDisplayRoute(directionsService, directionsDisplay);
//         };
//         document.getElementById('start').addEventListener('change', onChangeHandler);
//         document.getElementById('end').addEventListener('change', onChangeHandler);
//       }

//       function calculateAndDisplayRoute(directionsService, directionsDisplay) {
//         directionsService.route({
//           origin: document.getElementById('start').value,
//           destination: document.getElementById('end').value,
//           travelMode: 'DRIVING'
//         }, function(response, status) {
//           if (status === 'OK') {
//             directionsDisplay.setDirections(response);
//           } else {
//             window.alert('Directions request failed due to ' + status);
//           }
//         });