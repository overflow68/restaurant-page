import img from './images/hpimage.jpg';

function generateHP(){

 const hpContent = document.createElement("div");
hpContent.classList.add("hpContent");
const p = document.createElement("p");
p.textContent="Isto definitivamente não é uma página genérica para um restaurante fictício! \n Aqui temos todos os tipos de culinária que possas imaginar, desde: \nGelados, Pizzas, Hamburgueres, Kebabs, entre muitos outros!";
const image = document.createElement("img");
image.setAttribute("id","mainimg");
image.src = img
image.setAttribute("height", "500");
image.setAttribute("width", "700");
hpContent.appendChild(image);
hpContent.appendChild(p);

return hpContent;
}

export {generateHP}