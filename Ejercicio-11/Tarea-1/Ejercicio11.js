
class GeoLocalizacion {
    constructor (){
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this));
    }
    getPosicion(posicion){
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.precision        = posicion.coords.accuracy;
        this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo            = posicion.coords.heading;
        this.velocidad        = posicion.coords.speed;       
    }
    getLongitud(){
        return this.longitud;
    }
    getLatitud(){
        return this.latitud;
    }
    getAltitud(){
        return this.altitud;
    }
    buscarPosicion(){
        var resultado='<h2>Geolocalizar</h2>'; 
        resultado+='<p>Longitud: '+this.longitud +' grados</p>'; 
        resultado+='<p>Latitud: '+this.latitud +' grados</p>';
        resultado+='<p>Precision de la latitud y longitud: '+ this.precision +' metros</p>';
        resultado+='<p>Altitud: '+ this.altitude +' metros</p>';
        resultado+='<p>Precision de la altitud: '+ this.precisionAltitud +' metros</p>'; 
        resultado+='<p>Rumbo: '+ this.rumbo +' grados</p>'; 
        resultado+='<p>Velocidad: '+ this.velocidad +' metros/segundo</p>';
        $('section').html(resultado);
    }
}
var geolocalizador = new GeoLocalizacion();