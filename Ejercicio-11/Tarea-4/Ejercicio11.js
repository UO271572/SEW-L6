// Ejercicio11.js

var mapaDinamicoGoogle = new Object();
function initMap(){
    var escuelaIngenieria = {lat: 43.3672702, lng: -5.8502461};
    var mapaOviedo = new google.maps.Map(document.getElementsByTagName('main')[0],{zoom: 20,center:escuelaIngenieria,mapTypeId: "satellite"});
    var marcador = new google.maps.Marker({position:escuelaIngenieria,map:mapaOviedo});
}
mapaDinamicoGoogle.initMap = initMap;