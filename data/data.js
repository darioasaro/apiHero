//----------------------------------------///
let requestURL = 'https://www.superheroapi.com/api.php/10214201650550258/22/biography';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        const planetas = request.response;
        console.log(planetas);
        
      }



//----------------------------------------///






//----------------------------------------///






//----------------------------------------///






//----------------------------------------///






//----------------------------------------///