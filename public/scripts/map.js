function initMap() {
    let locality = {lat:33.988800, lng: -83.898480};
    let map = new google.maps.Map(document.getElementById("map"), {
            zoom: 1,
            center: locality
        });
    let marker = new google.maps.Marker({position: locality, map: map, title: "googleApi"})
}