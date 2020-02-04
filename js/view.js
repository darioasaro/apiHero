class View{
     constructor(controlador){
        this.controlador = controlador;
        this.init();
        this.rowCont=1;
        this.hero;
    } 
    
    init(){
        let cualquiera = this.controlador.obtenerHeros().then(
            function (hero) {
               // console.log(hero);
                
            }
        )
        console.log(cualquiera);
        
    }
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
                        button.setAttribute("onClick", "seeMore("+hero.id+")");
                        button.setAttribute("data-target","#"+(hero.name).replace(/ /g, ""));
                        button.innerHTML="See More";
                    divFooter.appendChild(button);
                div.appendChild(divFooter);

                

        divContainer.appendChild(div);
        rowCont++;  
    }
}

export default View;