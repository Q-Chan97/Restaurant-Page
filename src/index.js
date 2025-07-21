import "./styles/styles.css";

console.log("Here I am!");

import {loadHome} from "./home-page.js"
import {loadMenu} from "./menu-page.js"
import {loadAbout} from "./about-page.js"

const content = document.querySelector("#content");

const home = document.querySelector("#home-button");
const menu = document.querySelector("#menu-button");
const about = document.querySelector("#about-button");

function homeClick() {
    content.textContent = "";
    loadHome();
}

function menuClick() {
    content.textContent = "";
    loadMenu();
}

function aboutClick() {
    content.textContent = "";
    loadAbout();
}

home.addEventListener("click", homeClick);
menu.addEventListener("click", menuClick);
about.addEventListener("click", aboutClick);

loadHome();