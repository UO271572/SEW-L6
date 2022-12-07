class Editor{
 
    constructor(){
        this.controlador = true;
    }

    ocultarP(){
        $("p:eq(0)").hide();
    }
    mostrarP(){
        $("p:eq(0)").show();
    }
    modificarP(){
        $("p:eq(0)").html("El texto se ha modificado");
    }
    modicicaLista(){
        if(this.controlador){
            var fila = "<tr><td>Nueva fila</td> <td><a href=\"https://laravel.com\" title=\"Enlace al sitio web oficial\">Sitio web oficial</a></td></tr>";
            $("table:last").append(fila);
        }
        this.controlador = false;
    }

    sumarFilasYColumnas(){
        var filas = $("table tr").length;
        var columnas = $("table tr").children("td").length;
        document.querySelector('input[type="text"]').value = "Filas:"+filas+" Columnas:"+columnas;
    }
    recorrerArbol(){
        var html = "<h2>Recorrido del arbol</h2>";
        html +=  "<ul>";
        var arbol = $("*",document.body);
        for(var i = 0 ; i < arbol.length ; i++){
            var etiquetaPadre = $(arbol[i]).parent().get(0).tagName;
            var elemento = $(arbol[i]).get(0).tagName;
            html +="<li> Elemento: "+elemento+" Etiqueta padre: "+etiquetaPadre+"</li>" ;
        }
        html +=  "</ul>";
        $("section:eq(1)").append(html);
    }
}