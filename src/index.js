import {generateHP} from './homepage.js';
import "./style.css";
import gitpic from './images/git.png'
const gitimg = document.getElementById("gitlink");
gitimg.src = gitpic;
const content = document.getElementById("contents");

content.appendChild(generateHP());