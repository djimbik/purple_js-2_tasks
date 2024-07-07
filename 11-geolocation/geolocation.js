const table = {
    longitude: document.querySelector('.longitude'),
    latitude: document.querySelector('.latitude'),
    errorBlock: document.querySelector('.error-block'),
}

const coordinates = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        },
        (error) => {
            reject(error);
        }
    );
});
coordinates
    .then(data => {
        const { latitude, longitude } = data;
        table.errorBlock.setAttribute('hidden', '');
        table.longitude.textContent = longitude;
        table.latitude.textContent = latitude;
    })
    .catch(error => {
        table.errorBlock.removeAttribute('hidden');
        table.errorBlock.textContent = `Error getting location: ${error}`;
    });