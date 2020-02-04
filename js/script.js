import Service from "./service.js";
import View from "./view.js";
import Controller from "./controller.js"

let url = "https://www.superheroapi.com/api.php/3421198451228918/";
const service = new Service(url);
const controller = new Controller(service);
const view = new View(controller);
view.init();

/* var rowCont=1;
let hero;
const URL2 = "https://www.superheroapi.com/api.php/3421198451228918/"; */

/* async function readApi(first,second){
    var response = await fetch(URL+first+"/"+second)
    var data = await response.json()
    return data
}

for (let i = 1; i <= 12; i++) {
    var chap = readApi("",i)
    .then(
        function(data){
            createDiv(data);
            
        }
    )
    
} */
    
/* 
function createDiv(hero){
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
                    button.setAttribute("onClick", "seeMore("+hero.id+")");
					button.setAttribute("data-target","#"+(hero.name).replace(/ /g, ""));
					button.innerHTML="See More";
				divFooter.appendChild(button);
			div.appendChild(divFooter);

            

    divContainer.appendChild(div);
    rowCont++;
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
function buscarPorNombre(evento) {
    evento.preventDefault();
    console.log(evento);
    
    nameHeroe= document.getElementById("nombreHero").value;
    readApi("search",nameHeroe)
    .then(
        function(data){
            
            if(data.response=="success"){
                document.getElementById("divContenedor").innerHTML = " ";
                results = data.results
                results.forEach(heroe => {
                    createDiv(heroe);
                });
            }else{
                alert("No existe el personaje "+ nameHeroe);
            }
            
           
    });
   
    evento.target.reset()
}

 document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener("submit",buscarPorNombre);
}); 

function seeMore(idHero) {

    
    document.getElementById("divContenedor").innerHTML = " ";
   
    
    let her = readApi("",idHero)
    .then(
        
        
        function(data){
            console.log(data);

            htmll= `
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
                document.getElementById("divContenedor").innerHTML = htmll;
                
        }
    )
    
    /*
    let her = readApi("",idHero)
    .then(
        function(data){
            //createDiv(data); 
            createProfile(data);           
            //createList(data);
        }
    )
    
}

function createProfile(hero){
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
 */
         
                    
                  
                    