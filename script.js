// Initialize and add the map
function initMap() {
    // The location of Uluru
    var lexington = {
        lat: 38.040098,
        lng: -84.504511
    };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 9,
            center: lexington
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: lexington,
        map: map
    });
}