var rowCont=1;
let hero;
const URL2 = "https://www.superheroapi.com/api.php/3421198451228918/";

async function readApi(first,second){
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
    
}
    

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
            document.getElementById("divContenedor").innerHTML = " ";
            results = data.results
            results.forEach(heroe => {
                //console.log(heroe);
                
                createDiv(heroe);
            });
            
           
    });
   
    evento.target.reset()
}

 document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener("submit",buscarPorNombre);
}); 

    