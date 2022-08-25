function getPreciseLocation() {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(function(position) {
            resolve([position.coords.latitude, position.coords.longitude]);
        });
    });
}
export { getPreciseLocation }