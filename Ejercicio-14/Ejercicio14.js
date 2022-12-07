class Lector{
    constructor(){}

    leerArchivoKML(documento){
        //crear mapa para asignarle los marcadores.
        var map = new google.maps.Map(document.getElementsByTagName("main")[0], {center: new google.maps.LatLng( 43.36161107744105, -5.850487403195621), zoom: 12, mapTypeId: google.maps.MapTypeId.ROADMAP});

        if(documento.length == 1){
            var archivo = documento[0];
        }else{
            var archivo = documento;
        }
          var lector = new FileReader();
          lector.onload = function (evento) {
            var xmlDoc = $.parseXML(lector.result),
				$xml = $(xmlDoc),//archivoxml
				$options = $xml.find("Placemark");//placemark
            $.each($options,function(){
                var name = $(this).children("name").text();
                //obtener coordenadas y convertir
                var coordenadas=$(this).children("Point").children("coordinates").text();
				var coordenadasParsed = { lat: Number.parseFloat(coordenadas.split(",")[1]), lng: Number.parseFloat(coordenadas.split(",")[0])};
				//creamos el marcador para el mapa
                var marker = new google.maps.Marker({
                    position: coordenadasParsed,map: map, label: {text: name,color: "#ff1212"}
              });
                console.log(marker);
            });
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

    dragover_handler(ev) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move";
    }
    drop_handler(ev) {
        ev.preventDefault();
        // Get the id of the target and add the moved element to the target's DOM
        //const data = ev.dataTransfer.getData("text/plain");
        //ev.target.appendChild(document.getElementById(data));
        this.leerArchivoKML(ev.dataTransfer.items[0].getAsFile());
      }

    listener(){
      document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          toggleFullScreen();
        }
      }, false);
    }
    toggleFullScreen(element) {
        if(element.requestFullscreen) {
            element.requestFullscreen();
          } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
          } else if(element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
          } else if(element.msRequestFullscreen) {
            element.msRequestFullscreen();
          }
      }

}
var lector = new Lector();