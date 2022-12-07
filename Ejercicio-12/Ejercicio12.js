class Lector{
    constructor(){}
leerArchivoTexto(files) 
  { 
        var nBytes = 0;
          var  archivos =   files;
            var nArchivos = files.length;
        for (var i = 0; i < nArchivos; i++) {
          nBytes += archivos[i].size;
        }
        document.getElementsByTagName("span")[0].innerText = nArchivos;
        document.getElementsByTagName("span")[1].innerText = nBytes;

    //   var nombre = document.getElementsByTagName("p")[4];
    //   var tamaño = document.getElementsByTagName("p")[5];
    //   var tipo = document.getElementsByTagName("p")[6];
    //   var ultima = document.getElementsByTagName("p")[7];
    //   var contenido = document.getElementsByTagName("p")[8];
    //   var areaVisualizacion = document.getElementsByTagName("p")[9];
    //   var errorArchivo = document.getElementsByTagName("p")[10];
    var datos ="";
      for(var i=0;i<files.length;i++){
        //Solamente toma un archivo
      var archivo = files[i];
      
      datos += "\nNombre del archivo: " + archivo.name;
      datos += "\nTamaño del archivo: " + archivo.size + " bytes"; 
      datos += "\nTipo del archivo: " + archivo.type;
      datos += "\nFecha de la última modificación: " + archivo.lastModifiedDate;
      datos += "\nContenido del archivo de texto:\n\n"
      //Solamente admite archivos de tipo texto
      var tipoTexto = /text.*/;
      document.getElementsByTagName("p")[4].innerText =  datos;
      if (archivo.type.match(tipoTexto)) 
        {
          var lector = new FileReader();
          lector.onload = function (evento) {
            //El evento "onload" se lleva a cabo cada vez que se completa con éxito una operación de lectura
            //La propiedad "result" es donde se almacena el contenido del archivo
            //Esta propiedad solamente es válida cuando se termina la operación de lectura
            document.getElementsByTagName("p")[5].innerText =  lector.result;
            }      
          lector.readAsText(archivo);
          }
      else {
        document.getElementsByTagName("p")[5].innerText =  "Error : ¡¡¡ Archivo no válido !!!";
          }  
      }     
  };

compruebaCompatibilidad(){
    // Version 1.1 23/10/2021 
if (window.File && window.FileReader && window.FileList && window.Blob) 
{  
    //El navegador soporta el API File
    document.write("<p>Este navegador soporta el API File </p>");
}
    else document.write("<p>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</p>");

}
}
var lector = new Lector();