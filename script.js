// Initialize and add the map
function initMap() {

    const center = {
        lat: 38.570790, 
        lng: -84.754112
    }

    const location = {
        lexington: {
            lat: 38.040098,
            lng: -84.504511
        },
        louisville: {
            lat: 38.237248,
            lng: -85.733573
        },
        cincinnati: {
            lat: 39.103412, 
            lng: -84.517511
        }
    }
    
    // The map, centered between 
    const map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 8,
            center: center
        });

    for(key in location){
        new google.maps.Marker({
            position: location[key],
            map: map
        })
    }    
}



// Saying 'Message Sent' when submit is clicked
// setTimeout(function() { alert("my message"); }, time);