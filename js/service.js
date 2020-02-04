class Service {
    constructor(url){
        this.url=url;
    }

    async readApi(first,second){
        var response = await fetch(this.url+first+"/"+second)
        var data = await response.json()
      
        return data
        
        
    }

    

    
}
export default Service;