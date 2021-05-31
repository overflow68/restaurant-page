import donut from './images/donut.jpg';
import frango from './images/frango.jpg';
import gelado from './images/gelado.jpg';
import hamburger from './images/hamburger.jpg';
import hotdog from './images/hotdog.jpg';
import limao from './images/limao.jpg';
import malagueta from './images/malagueta.jpg';
import pizza from './images/pizza.jpg';
import taco from './images/taco.jpg';


function generateM(){
let photos =      [donut,frango,gelado,hamburger,hotdog,pizza];
let description = ["Donut de morango","Menu frango assado","Gelado de baunilha","SmallMac (vitela)","Cachorro quente","Pizza vegetariana"]

const mContent = document.createElement("div");
    mContent.classList.add("mContent");

for (let i=0;i<photos.length;i++){
    let foodiv = document.createElement("div");
    foodiv.classList.add("menuItem");
    foodiv.setAttribute("id","item" + i);
    let desc = document.createElement("p");
    desc.textContent = description[i];
    mContent.appendChild(foodiv);

    let foodpic = document.createElement("img");
    foodpic.classList.add("itemPic");
    foodpic.setAttribute("src",photos[i]);
    foodiv.appendChild(desc);
    foodiv.appendChild(foodpic);

}
return mContent;
}

export {generateM}