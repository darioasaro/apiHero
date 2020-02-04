class Controller {
    constructor(service){
        this.service = service;
    }
    


    async obtenerHeros(){
        var arr = []
        for (let i = 1; i <= 12; i++) {
           
            
            var chap = await this.service.readApi("",i)
            .then(function(data){
            
            //console.log(data);
            arr.push (data)
            }
            )}
    return arr
     
    }
    

}

export default Controller;