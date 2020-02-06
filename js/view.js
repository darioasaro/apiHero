class View{
     constructor(controlador){
      this.controlador = controlador
        
        //this.init();
        this.rowCont=1;
        this.hero;
    } 
    
    init(){
      
        let contex = this.controlador
        let vw = this
        

        let cual = this.controlador.obtenerHeros()
        
        
        .then(function(data){
            let rowCont = 1
            data.forEach(hero => {
                let row = (rowCont % 3 === 0)?"row":"";
        let divContainer = document.getElementById("divContenedor")
            let div = document.createElement("div");
            div.classList.add("card","mb-6", "m-2", "bg-dark","rounded");

                let divPanel = document.createElement("div");
                divPanel.classList.add("card-header");

                    let img = document.createElement("img");
                    let imagen =hero.image.url;
                    img.setAttribute("src",imagen);
                    img.classList.add("img-responsive", "img-thumbnail");				
                    img.setAttribute("border","0");
                    img.setAttribute("height","200px");
                    img.setAttribute("data-toggle","tooltip");
                    img.setAttribute("title","Comprar");

                divPanel.appendChild(img);
            div.appendChild(divPanel);
            
                let divPanelBody = document.createElement("div");
                divPanelBody.classList.add("card-body","text-white");

                    let nameHero = document.createElement("h3");
                    nameHero.innerHTML=hero.name;
                divPanelBody.appendChild(nameHero);

                    let occupation = document.createElement("h6");
                    occupation.innerHTML=hero.work.occupation;
                divPanelBody.appendChild(occupation);

                    let biography = document.createElement("h2");
                    biography.classList.add("text-warning");
                    biography.innerHTML= hero.biography.aliases[0];
                divPanelBody.appendChild(biography);
            div.appendChild(divPanelBody);

            let divFooter = document.createElement("div");
                    divFooter.classList.add("card-footer");

                        let button = document.createElement("button");					
                        button.classList.add("btn", "btn-primary");
                        button.setAttribute("type","button");					
                        button.setAttribute("id",hero.id);
                        //button.setAttribute("onClick", "seeMore("+hero.id+")");
                        
                        button.addEventListener("click",(e)=>{
                            vw.seeMore(hero.id)
                        })
                        

                        button.setAttribute("data-target","#"+(hero.name).replace(/ /g, ""));
                        button.innerHTML="See More";
                    divFooter.appendChild(button);
                div.appendChild(divFooter);

                

        divContainer.appendChild(div);
        rowCont++;  
                
                
            });
            
             
            }
            )
        
        }

        
        
        
        //     function (hero) {
        //         console.log(hero);
                
        //         let rowCont=1;
        //         let row = (rowCont % 3 === 0)?"row":"";
        // let divContainer = document.getElementById("divContenedor")
        //     let div = document.createElement("div");
        //     div.classList.add("card","mb-6", "m-2", "bg-dark","rounded");

        //         let divPanel = document.createElement("div");
        //         divPanel.classList.add("card-header");

        //             let img = document.createElement("img");
        //             let imagen =hero.image.url;
        //             img.setAttribute("src",imagen);
        //             img.classList.add("img-responsive", "img-thumbnail");				
        //             img.setAttribute("border","0");
        //             img.setAttribute("height","200px");
        //             img.setAttribute("data-toggle","tooltip");
        //             img.setAttribute("title","Comprar");

        //         divPanel.appendChild(img);
        //     div.appendChild(divPanel);
            
        //         let divPanelBody = document.createElement("div");
        //         divPanelBody.classList.add("card-body","text-white");

        //             let nameHero = document.createElement("h3");
        //             nameHero.innerHTML=hero.name;
        //         divPanelBody.appendChild(nameHero);

        //             let occupation = document.createElement("h6");
        //             occupation.innerHTML=hero.work.occupation;
        //         divPanelBody.appendChild(occupation);

        //             let biography = document.createElement("h2");
        //             biography.classList.add("text-warning");
        //             biography.innerHTML= hero.biography.aliases[0];
        //         divPanelBody.appendChild(biography);
        //     div.appendChild(divPanelBody);

        //     let divFooter = document.createElement("div");
        //             divFooter.classList.add("card-footer");

        //                 let button = document.createElement("button");					
        //                 button.classList.add("btn", "btn-primary");
        //                 button.setAttribute("type","button");					
        //                 button.setAttribute("id",hero.id);
        //                 button.setAttribute("onClick", "seeMore("+hero.id+")");
        //                 button.setAttribute("data-target","#"+(hero.name).replace(/ /g, ""));
        //                 button.innerHTML="See More";
        //             divFooter.appendChild(button);
        //         div.appendChild(divFooter);

                

        // divContainer.appendChild(div);
        // rowCont++;  
                
        //     }
         
        //console.log(cualquiera);
        
    
    createDiv(hero){
        
        
        let row = (this.rowCont % 3 === 0)?"row":"";
        let divContainer = document.getElementById("divContenedor")
            let div = document.createElement("div");
            div.classList.add("card","mb-6", "m-2", "bg-dark","rounded");

                let divPanel = document.createElement("div");
                divPanel.classList.add("card-header");

                    let img = document.createElement("img");
                    let imagen =this.hero.image.url;
                    img.setAttribute("src",imagen);
                    img.classList.add("img-responsive", "img-thumbnail");				
                    img.setAttribute("border","0");
                    img.setAttribute("height","200px");
                    img.setAttribute("data-toggle","tooltip");
                    img.setAttribute("title","Comprar");

                divPanel.appendChild(img);
            div.appendChild(divPanel);
            
                let divPanelBody = document.createElement("div");
                divPanelBody.classList.add("card-body","text-white");

                    let nameHero = document.createElement("h3");
                    nameHero.innerHTML=hero.name;
                divPanelBody.appendChild(nameHero);

                    let occupation = document.createElement("h6");
                    occupation.innerHTML=hero.work.occupation;
                divPanelBody.appendChild(occupation);

                    let biography = document.createElement("h2");
                    biography.classList.add("text-warning");
                    biography.innerHTML= hero.biography.aliases[0];
                divPanelBody.appendChild(biography);
            div.appendChild(divPanelBody);

            let divFooter = document.createElement("div");
                    divFooter.classList.add("card-footer");

                        let button = document.createElement("button");					
                        button.classList.add("btn", "btn-primary");
                        button.setAttribute("type","button");					
                        button.setAttribute("id",hero.id);
                        //button.setAttribute("onClick", "seeMore("+hero.id+")");
                        button.addEventListener("click",(e)=>{
                            this.seeMore(hero.id)
                        })
                        button.setAttribute("data-target","#"+(hero.name).replace(/ /g, ""));
                        button.innerHTML="See More";
                    divFooter.appendChild(button);
                div.appendChild(divFooter);

                

        divContainer.appendChild(div);
        rowCont++;  
    }

    seeMore(idHero) {
    
        let contex = this.controlador.service
        
        
         
    document.getElementById("divContenedor").innerHTML = " ";
 
    contex.readApi("",idHero)
    .then(
        
        
        function(data){
            console.log(data);

            var html= `
                    <div class="media" style="margin-top: 5%; margin-bottom: 1%; color: aliceblue;">
                        <img class="d-flex align-self-start mr-3" src="${data.image.url}" alt="Generic placeholder image" style="width: 40%;">
                        <div class="media-body" style="text-align: unset;">
                            <h2 class="mt-0 font-weight-bold">${data.name}</h2>
                            <h5>Power Stats</h5>
                            <div> 
                                <ul class="list-group list-group-horizontal" style="text-align: unset;">
                                    <li class="list-group" style="padding: 2%;" >Intelligence: ${data.powerstats.intelligence}</li>
                                    <li class="list-group" style="padding: 2%;">Strength: ${data.powerstats.strength}</li>
                                    <li class="list-group" style="padding: 2%;">Speed: ${data.powerstats.speed}</li>
                                    <li class="list-group" style="padding: 2%;">Durability: ${data.powerstats.durability}</li>
                                    <li class="list-group" style="padding: 2%;">Power: ${data.powerstats.power}</li>
                                    <li class="list-group" style="padding: 2%;">Combat: ${data.powerstats.combat}</li>
                                </ul>
                            </div>
                            
                            <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus
                            et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        </div>
                    </div>`;
                document.getElementById("divContenedor").innerHTML = html;

                cont.createProfile(data); 
                
        }
    )
    
  
    // contex.readApi("",idHero)
    // .then(
    //     function(data){
    //         //createDiv(data); 
            //this.createProfile(her);           
    //         //createList(data);
    //     }
    // )
    
}

        createProfile(hero){
            let row = (rowCont % 3 === 0)?"row":"";
            let divContainer = document.getElementById("divContenedor");
                let div = document.createElement("div");
                div.classList.add("row");
                    let divImage = document.createElement("div");
                        let img = document.createElement("img");
                        img.setAttribute("src", hero.image.url);
                        img.setAttribute("height","200px");
                    divImage.appendChild(img);
                div.appendChild(divImage);

                let div2 = document.createElement("div");
                div.classList.add("col-sm-4","col-md-4");
                let list = createList(hero);
                div2.innerHTML=list;
            
            divContainer.appendChild(div);
            divContainer.appendChild(div2);
        } 

   
    

}


export default View;