function holePosition() {
    alert("Hallo");
    if (navigator.geolocation) {
        document.getElementById("geoSupported").innerText = "OK - Geolocation wird unterstützt!";
        var options = {
            enableHighAccuracy: true
        }
        navigator.geolocation.getCurrentPosition(showPosition, showError, options);
    } else {
        document.getElementById("geoSupported").innerText = "Geolocation nicht unterstützt!";
    }
}

function showPosition(position) {
    document.getElementById("breite").innerHTML = 'Breitengrad: ' + position.coords.latitude;
    document.getElementById("laenge").innerHTML = 'Längengrad: ' + position.coords.longitude;
    document.getElementById("genau").innerHTML = 'Genauigkeit: ' + position.coords.accuracy + 'm';
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert('Abfrage der Geoposition untersagt.');
            break;
        case error.POSITION_UNAVAILABLE:
            alert('Es sind keine Geopositionsdaten verfügbar.');
            break;
        case error.TIMEOUT:
            alert('Timeout überschritten.');
            break;
        default:
            alert('Unbekannter Fehler');
            break;
    }

}