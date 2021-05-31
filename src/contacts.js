import morada from './images/morada.png'


const local = document.createElement("div");
local.innerHTML = '<center><div class="mapouter"><div class="gmap_canvas"><iframe width="716" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Alverca%20do%20Ribatejo%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-a.com"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:716px;}</style><a href="https://www.embedgooglemap.net"></a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:716px;}</style></div></div></center>'

function generateCP(){
    const cpContent = document.createElement("div");
    cpContent.classList.add("content");
    const telefone = document.createElement("p");
    telefone.textContent = "Telefone: 202-555-0144"
    const email = document.createElement("p");
    email.textContent = "E-mail: neon@foods.pt"

cpContent.appendChild(local);
cpContent.appendChild(telefone);
cpContent.appendChild(email);
return cpContent;
}

export {generateCP}