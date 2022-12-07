class Loader{
    constructor(){
        //this.key = "+YNS3YB6r7AoO73Ebz8Cbg==2ij4mXBDq36kB5PW";
    }


    consultarCiudad(){
        var ciudad = document.getElementsByTagName("input")[0].value;
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/city?name=' + ciudad,
            headers: { 'X-Api-Key': '+YNS3YB6r7AoO73Ebz8Cbg==2ij4mXBDq36kB5PW'},
            contentType: 'application/json',
            success: function(result) {
                var datos = result[0];
                console.log(result);
                loader.instance.panTo(new google.maps.LatLng(datos.latitude, datos.longitude));
                var html = "";
                html += "<h3>" + datos.name + "</h3>";
                html += "<p>Capital: " + datos.is_capital + "</p>";
                html += "<p>Longitud: " + datos.longitude + "</p>";
                html += "<p>Latitud: " + datos.latitude + "</p>";
                html += "<p>Poblacion: " + datos.population + "</p>";
                $("section").empty();
                $("section").append(html);
                loader.muestraDatosCovid(datos);
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    }
    
    muestraDatosCovid(datosCiudad){
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/weather?city=' + datosCiudad.name,
            headers: { 'X-Api-Key': '+YNS3YB6r7AoO73Ebz8Cbg==2ij4mXBDq36kB5PW'},
            contentType: 'application/json',
            success: function(result) {
                var html="<h2>Informacion</h2>";
                console.log(result);
                html += "<p>Temperatura maxima: "+result.max_temp+"<p/>"
                html += "<p>Temperatura minima: "+result.min_temp+"<p/>"
                html += "<p>Temperatura real: "+result.temp+"<p/>"
                html += "<p>Nuboso: "+result.cloud_pct+"%<p/>"
                $("section").append(html);
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    }



}
var loader = new Loader();
function initMap() {
        loader.instance = new google.maps.Map(document.getElementsByTagName("main")[0], {
            center: new google.maps.LatLng( 43.358433 ,-5.847976),
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
}