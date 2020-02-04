class Controller {
    constructor(service){
        this.service = service;
    }
    


    async obtenerHeros(){
        for (let i = 1; i <= 12; i++) {
            var chap = this.service.readApi("",i)
            .then(
                function(data){
                    //this.vista.createDiv(data);
                    //console.log("data",data);
                    
                    return data;
                }
            )
            
        }
    }

}

export default Controller;