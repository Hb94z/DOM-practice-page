console.log("helo")
let content = document.getElementById("content");
import { initialRender } from './mainPage';
import { generateAboutPage } from './about';
import { generateMenuPage } from './menu';
initialRender();



let tabs = (() => {

let body = document.getElementsByTagName("BODY")[0];
let header = document.createElement("header");
let nav = document.createElement("div");
let navItemHome = document.createElement("div");
let navItem2 = document.createElement("div");
let navItem3 = document.createElement("div");

nav.className = ("nav");
navItemHome.className = ("nav-item");
navItemHome.id = ("home");
navItemHome.innerHTML = ("Home");
navItem2.className = ("nav-item");
navItem2.id = ("about-button");
navItem2.innerHTML = ("About");
navItem3.className = ("nav-item");
navItem3.id = ("menu-button");
navItem3.innerHTML = ("Menu");

body.prepend(header);
header.appendChild(nav);
nav.append(navItemHome, navItem2, navItem3);
let currentTab = "home";
navItem2.addEventListener("click", () => {
    if (currentTab !== "about") {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
      }
   generateAboutPage();
   currentTab = "about"
    }
    });

navItem3.addEventListener("click", () => {
    if (currentTab !== "Menu") {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
       generateMenuPage();
      currentTab = "Menu"
}
    });

navItemHome.addEventListener("click", () => {
    if (currentTab !== "home") {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    initialRender();
     currentTab = "home"
} 
    });


})();
