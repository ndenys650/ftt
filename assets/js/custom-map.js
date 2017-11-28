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