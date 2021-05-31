import {generateHP} from './homepage.js';
import {generateCP} from './contacts.js';
import {generateM} from './menu.js'
import "./style.css";
import gitpic from './images/git.png'

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");

const gitimg = document.getElementById("gitlink");
gitimg.src = gitpic;
const content = document.getElementById("contents");

content.appendChild(generateHP());

home.addEventListener("click",()=>{
    content.innerHTML="";
    content.appendChild(generateHP());
})

contact.addEventListener("click",()=>{
    content.innerHTML="";
    content.appendChild(generateCP());
})

menu.addEventListener("click",()=>{
    content.innerHTML="";
    content.appendChild(generateM());
})