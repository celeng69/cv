function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -6.8760029, lng: 109.1449860};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Tegal, INA' // Title Location
    });
}
