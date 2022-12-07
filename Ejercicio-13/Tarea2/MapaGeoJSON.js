class Lector{
    constructor(){}

    leerArchivoKML(documento){
        //crear mapa para asignarle los marcadores.
        var map = new google.maps.Map(document.getElementsByTagName("main")[0], {center: new google.maps.LatLng( 43.36161107744105, -5.850487403195621), zoom: 12, mapTypeId: google.maps.MapTypeId.ROADMAP});

        var archivo = documento[0];
          var lector = new FileReader();
          lector.onload = function (evento) {
            var result = lector.result;
            var json = JSON.parse(result);
            for (var i=0;i<json.features.length;i++) { 
                var name=json.features[i].properties.name;
                var coordenadas = { lat: Number.parseFloat(json.features[i].geometry.coordinates.toString().split(",")[1]), 
                      lng: Number.parseFloat(json.features[i].geometry.coordinates.toString().split(",")[0]) };

                var marker = new google.maps.Marker({
                      position: coordenadas, map: map, label: {text: name,color: "#ff1212"}
                });
            }
        }      
        lector.readAsText(archivo);
    }

    initMap() {
        var map = new google.maps.Map(document.getElementsByTagName("main")[0], {
            center: new google.maps.LatLng( 43.36161107744105, -5.850487403195621),
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    }

}
var lector = new Lector();