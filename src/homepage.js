function generateHP(){

 const hpContent = document.createElement("div");
hpContent.classList.add("hpContent");
const p = document.createElement("p");
p.textContent="Isto definitivamente não é uma página genérica para um restaurante fictício! \n Aqui temos todos os tipos de culinária que possas imaginar, desde: \nGelados, Pizzas, Hamburgueres, Kebabs, entre muitos outros!";
const img = document.createElement("img");
img.src = "/images/hpimage.jpg"
img.setAttribute("height", "768");
img.setAttribute("width", "1024");
hpContent.appendChild(img);
hpContent.appendChild(p);

return hpContent;
}

export {generateHP}