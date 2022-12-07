class Meteo{
    constructor(){
    this.apikey = "9712d273607ea601815d74865b93bad9";
    this.unidades = "&units=metric";
    this.idioma = "&lang=es";
    this.urlOviedo = "http://api.openweathermap.org/data/2.5/weather?q=Oviedo" +  this.unidades + this.idioma + "&APPID=" + this.apikey;
    this.urlParis = "http://api.openweathermap.org/data/2.5/weather?q=Paris" +  this.unidades + this.idioma + "&APPID=" + this.apikey;
    this.urlBarcelona = "http://api.openweathermap.org/data/2.5/weather?q=Barcelona" +  this.unidades + this.idioma + "&APPID=" + this.apikey;
    this.urlValladolid = "http://api.openweathermap.org/data/2.5/weather?q=Valladolid" +  this.unidades + this.idioma + "&APPID=" + this.apikey;
    this.urlLyon = "http://api.openweathermap.org/data/2.5/weather?q=Lyon" +  this.unidades + this.idioma + "&APPID=" + this.apikey;
    this.error = "<h2>¡problemas! No puedo obtener información de <a href='http://openweathermap.org'>OpenWeatherMap</a></h2>";
    }
    cargarOviedo(){
        $.ajax({
            dataType: "json",
            url: this.urlOviedo,
            method: 'GET',
            success: function(datos){   
                    $("pre").text(JSON.stringify(datos, null, 2)); //muestra el json en un elemento pre
                
                    //PresentaciÃ³n de los datos contenidos en JSON
                    
                    var stringDatos = "<ul><li>Ciudad: " + datos.name + "</li>";
                        stringDatos += "<li>Pai­s: " + datos.sys.country + "</li>";
                        stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                        stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
                        stringDatos += "<li>Temperatura: " + datos.main.temp + " grados Celsius</li>";
                        stringDatos += "<li>Temperatura maxima: " + datos.main.temp_max + " grados Celsius</li>";
                        stringDatos += "<li>Temperatura minima: " + datos.main.temp_min + " grados Celsius</li>";
                        stringDatos += "<li>Presionn: " + datos.main.pressure + " milibares</li>";
                        stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                        stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Direccion del viento: " + datos.wind.deg + " grados</li>";
                        stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                        stringDatos += "<li>Hora de la medida: " + new Date(datos.dt *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt *1000).toLocaleDateString() + "</li>";
                        stringDatos += "<li>Descripcion: " + datos.weather[0].description + "</li>";
                        stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                        stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li>";
                        stringDatos += "<li>Icono: "+ "<img alt=\"Icono tiempo\" src=\" http://openweathermap.org/img/w/"+datos.weather[0].icon+".png\">"+"</li>";
                        stringDatos += "</ul>";
                    
                    $("section:eq(0)").append(stringDatos);
                },
            error:function(){
                $("section:eq(0)").append("<p>¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a></p>");
                }
        });
    }
    cargarLyon(){
        $.ajax({
            dataType: "json",
            url: this.urlLyon,
            method: 'GET',
            success: function(datos){
                    $("pre").text(JSON.stringify(datos, null, 2)); //muestra el json en un elemento pre
                
                    //PresentaciÃ³n de los datos contenidos en JSON
                    
                    var stringDatos = "<ul><li>Ciudad: " + datos.name + "</li>";
                        stringDatos += "<li>Pai­s: " + datos.sys.country + "</li>";
                        stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                        stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
                        stringDatos += "<li>Temperatura: " + datos.main.temp + " grados Celsius</li>";
                        stringDatos += "<li>Temperatura maxima: " + datos.main.temp_max + " grados Celsius</li>";
                        stringDatos += "<li>Temperatura minima: " + datos.main.temp_min + " grados Celsius</li>";
                        stringDatos += "<li>PresiÃ³n: " + datos.main.pressure + " milibares</li>";
                        stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                        stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>DirecciÃ³n del viento: " + datos.wind.deg + " grados</li>";
                        stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                        stringDatos += "<li>Hora de la medida: " + new Date(datos.dt *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt *1000).toLocaleDateString() + "</li>";
                        stringDatos += "<li>DescripciÃ³n: " + datos.weather[0].description + "</li>";
                        stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                        stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li>";
                        stringDatos += "<li>Icono: "+ "<img alt=\"Icono tiempo\" src=\" http://openweathermap.org/img/w/"+datos.weather[0].icon+".png\">"+"</li>";
                        stringDatos += "</ul>";
                    
                    $("section:eq(1)").append(stringDatos);
                },
            error:function(){
                $("section:eq(1)").append("<p>¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a></p>");
                }
        });
    }
    cargarBarcelona(){
        $.ajax({
            dataType: "json",
            url: this.urlBarcelona,
            method: 'GET',
            success: function(datos){
                    $("pre").text(JSON.stringify(datos, null, 2)); //muestra el json en un elemento pre
                
                    //PresentaciÃ³n de los datos contenidos en JSON
                    
                    var stringDatos = "<ul><li>Ciudad: " + datos.name + "</li>";
                        stringDatos += "<li>Pai­s: " + datos.sys.country + "</li>";
                        stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                        stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
                        stringDatos += "<li>Temperatura: " + datos.main.temp + " grados Celsius</li>";
                        stringDatos += "<li>Temperatura maxima: " + datos.main.temp_max + " grados Celsius</li>";
                        stringDatos += "<li>Temperatura minima: " + datos.main.temp_min + " grados Celsius</li>";
                        stringDatos += "<li>PresiÃ³n: " + datos.main.pressure + " milibares</li>";
                        stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                        stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>DirecciÃ³n del viento: " + datos.wind.deg + " grados</li>";
                        stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                        stringDatos += "<li>Hora de la medida: " + new Date(datos.dt *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt *1000).toLocaleDateString() + "</li>";
                        stringDatos += "<li>DescripciÃ³n: " + datos.weather[0].description + "</li>";
                        stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                        stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li>";
                        stringDatos += "<li>Icono: "+ "<img alt=\"Icono tiempo\" src=\" http://openweathermap.org/img/w/"+datos.weather[0].icon+".png\">"+"</li>";
                        stringDatos += "</ul>";
                    
                    $("section:eq(3)").append(stringDatos);
                },
            error:function(){
                $("section:eq(3)").append("<p>¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a></p>");
                }
        });
    }
    cargarValladolid(){
        $.ajax({
            dataType: "json",
            url: this.urlValladolid,
            method: 'GET',
            success: function(datos){
                    $("pre").text(JSON.stringify(datos, null, 2)); //muestra el json en un elemento pre
                
                    //PresentaciÃ³n de los datos contenidos en JSON
                    
                    var stringDatos = "<ul><li>Ciudad: " + datos.name + "</li>";
                        stringDatos += "<li>Pai­s: " + datos.sys.country + "</li>";
                        stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                        stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
                        stringDatos += "<li>Temperatura: " + datos.main.temp + " grados Celsius</li>";
                        stringDatos += "<li>Temperatura maxima: " + datos.main.temp_max + " grados Celsius</li>";
                        stringDatos += "<li>Temperatura minima: " + datos.main.temp_min + " grados Celsius</li>";
                        stringDatos += "<li>PresiÃ³n: " + datos.main.pressure + " milibares</li>";
                        stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                        stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>DirecciÃ³n del viento: " + datos.wind.deg + " grados</li>";
                        stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                        stringDatos += "<li>Hora de la medida: " + new Date(datos.dt *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt *1000).toLocaleDateString() + "</li>";
                        stringDatos += "<li>DescripciÃ³n: " + datos.weather[0].description + "</li>";
                        stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                        stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li>";
                        stringDatos += "<li>Icono: "+ "<img alt=\"Icono tiempo\" src=\" http://openweathermap.org/img/w/"+datos.weather[0].icon+".png\">"+"</li>";
                        stringDatos += "</ul>";
                    
                    $("section:eq(2)").append(stringDatos);
                },
            error:function(){
                $("section:eq(2)").append("<p>¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a></p>");
                }
        });
    }
    cargarParis(){
        $.ajax({
            dataType: "json",
            url: this.urlParis,
            method: 'GET',
            success: function(datos){
                    $("pre").text(JSON.stringify(datos, null, 2)); //muestra el json en un elemento pre
                
                    //PresentaciÃ³n de los datos contenidos en JSON
                    
                    var stringDatos = "<ul><li>Ciudad: " + datos.name + "</li>";
                        stringDatos += "<li>Pai­s: " + datos.sys.country + "</li>";
                        stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                        stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
                        stringDatos += "<li>Temperatura: " + datos.main.temp + " grados Celsius</li>";
                        stringDatos += "<li>Temperatura maxima: " + datos.main.temp_max + " grados Celsius</li>";
                        stringDatos += "<li>Temperatura minima: " + datos.main.temp_min + " grados Celsius</li>";
                        stringDatos += "<li>PresiÃ³n: " + datos.main.pressure + " milibares</li>";
                        stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                        stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>DirecciÃ³n del viento: " + datos.wind.deg + " grados</li>";
                        stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                        stringDatos += "<li>Hora de la medida: " + new Date(datos.dt *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt *1000).toLocaleDateString() + "</li>";
                        stringDatos += "<li>DescripciÃ³n: " + datos.weather[0].description + "</li>";
                        stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                        stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li>";
                        stringDatos += "<li>Icono: "+ "<img alt=\"Icono tiempo\" src=\" http://openweathermap.org/img/w/"+datos.weather[0].icon+".png\">"+"</li>";
                        stringDatos += "</ul>";
                    
                    $("section:eq(4)").append(stringDatos);
                },
            error:function(){
                $("section:eq(4)").append("<p>¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a></p>");
                }
        });
    }

    

}