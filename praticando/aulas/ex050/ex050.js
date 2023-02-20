const long = document.querySelector('#long');
const lati = document.querySelector('#lati');

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(local, () => {
        long.innerHTML = 'no get localizations';
        lati.innerHTML = 'no get localizations';
    });
}

function local(pos) {
    console.log(pos);
    long.innerHTML = pos.coords.longitude;
    lati.innerHTML = pos.coords.latitude;
}                                           
local();
