import burgerImage from "./burger.jpg";
import logoImg from "./Spudsy's_Logo.png";

export function loadHome() {
    const content = document.querySelector("#content");
    
    const logoDiv = document.createElement("div");
    logoDiv.id = "main-logo-div";

    const mainImage = document.createElement("img");
    mainImage.src = logoImg;
    mainImage.id = "logo-img";
    mainImage.setAttribute("alt", "Spudsy's Logo");
    logoDiv.appendChild(mainImage);

    const title = document.createElement("h1");
    title.textContent = "Welcome to Spudsy's!";
    logoDiv.appendChild(title);

    content.appendChild(logoDiv);
}