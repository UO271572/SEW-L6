class Trader{
    constructor(){
        this.endpoint = 'latest'
        this.access_key = '6r6yj8t720bmeh7o2jr34xlrw5s7h0h0f7bdvqew03bp81pjx8j2bq8tzav3';
        //6r6yj8t720bmeh7o2jr34xlrw5s7h0h0f7bdvqew03bp81pjx8j2bq8tzav3
        //kf04g0ueyek9klm1fv1hw10u9g83r2xy3gvd8m7gagx6g11s9exfx711u7k2
        //this.url = "https://commodities-api.com/api/latest?access_key="+this.access_key;
        
    }
    buscar(){
        var value = $("select").val();
        var amount = $("input").val();
        this.url ="https://commodities-api.com/api/convert?access_key="+this.access_key+"&from="+value+"&to=EUR&amount=" + amount;
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){
                var date = datos['data']['date'];
                var result = datos['data']['result'];
                $("article").html("<h2>Informacion adicional:</h2><p>Fecha: "+date+" Precio en euros: "+result+"</p>")
            },
            error:function(){
                $("section:last-child").append("<p>Tenemos problemas para obtener el JSON</p>");
            }
        });
    }
    cargarDatos(){
        this.url = "https://commodities-api.com/api/symbols?access_key=kf04g0ueyek9klm1fv1hw10u9g83r2xy3gvd8m7gagx6g11s9exfx711u7k2";
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){
                this.datos = datos;
                //var str = JSON.stringify(this.datos, null, 2);
                //document.write("<pre>" + str + "</pre>");
                var options="";
                for(var valor in this.datos){
                        options = "<option value=\""+valor +"\">"+valor+"</option>\n";
                        $("select:last").append(options);
                }
                
            },
            error:function(){
                $("section:last-child").append("<p>Tenemos problemas para obtener el JSON</p>");
            }
        });
    }

}