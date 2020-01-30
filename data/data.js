const URL = "https://www.superheroapi.com/api.php/3421198451228918/"

/* function readApi()
    los parametros para llamar a la funcion pueden ser :
    
    -para buscar por  nombre("search","*nombre*")
        -*una vez devuelto se trabaja con el ID*
    
    -para buscar las distintas caracteriscas ("id","*caracteristica*")
        -caracteristicas disponibles :
            -powerstats
            -biography
            -appearance
            -work
            -connections
            -image
    


    */

    async function readApi(first,second){
        var response = await fetch(URL+first+"/"+second)
        var data = await response.json()
        return data
    }


//----------------------------------------///
    
/*
    Pasandole como parametro la data que devuelve readApi crea dinamicamente
    la lista en html con todos los datos, si alguno tiene sub lista, la crea a travez
    de la function crearSubLista y la agrega
*/
      
    function createList(obj){

        var arr = Object.keys(obj)
        var val = Object.values(obj)
        var list = document.createElement("ul")
            
            for(var i = 2 ;i<arr.length-1;i++){
                  
                    var line = document.createElement("li")
                    var valor = typeof val[i]
                    
                    if(valor =="object"){
                       var text = document.createTextNode(arr[i]+": ")
                       var sub =  crearSubLista(val[i])
                       line.appendChild(text)
                       list.appendChild(line)
                       list.appendChild(sub)

                    }
                    else{
                    var text = document.createTextNode(arr[i]+": "+ val[i])
                    line.appendChild(text)
                    list.appendChild(line)
                    }
                    
                }
           
           var body = document.getElementById(1)
           body.appendChild(list)
            
        
       
       }


       function crearSubLista(obj){
        onsole.log(res);
            var arr = Object.keys(obj)
            var val = Object.values(obj)
            var lista = document.createElement("ul")

        
            
            for(var i = 0 ;i<arr.length;i++){
                    
                var line = document.createElement("li")
                
                var valor = typeof val[i]
                if(valor == "object"){
                    var text = document.createTextNode(arr[i]+": ")
                }
                
                else{
                var text = document.createTextNode(arr[i]+": "+ val[i])
                    }
                line.appendChild(text)
                lista.appendChild(line)
                

                }

                return lista

       }

       function buscar(nombre){
            
                readApi("search",nombre)
                .then(
                    function(data){
                
                        results = data.results
                        results.forEach(element => {
                            createDiv(element)                            
                        });
                }
           )  
       }

       
  
      
   
   
     

    

    
//----------------------------------------///






//----------------------------------------///






//----------------------------------------///






//----------------------------------------///






//----------------------------------------///