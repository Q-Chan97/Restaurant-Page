import "./styles/styles.css";
import "./styles/home.css";

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

    //////

    const bodyDiv = document.createElement("div");
    bodyDiv.id = "body-div";

    const bodyCard = document.createElement("div");
    bodyCard.classList.add("body-card");

    const discBox = document.createElement("div");
    discBox.id = "main-description-box";

    const disc1 = document.createElement("p");
    disc1.textContent = "Great burgers, greater times";
    discBox.appendChild(disc1);

    const disc2 = document.createElement("p");
    disc2.textContent = "Your neighborhood burger joint, serving you with a smile since 1959. Wether it's freshly made Spudsy burgers or crispy crinkle fries, we work hard to ensure you leave happy."
    discBox.appendChild(disc2);

    const burgImgHolder = document.createElement("img");
    burgImgHolder.src = burgerImage;
    burgImgHolder.id = "burger-pic";


    bodyCard.appendChild(discBox);
    bodyCard.appendChild(burgImgHolder);
    bodyDiv.appendChild(bodyCard);
    content.appendChild(bodyDiv);

    //////

    const timesDiv = document.createElement("div");
    timesDiv.id = "times-div";

    const timesHead = document.createElement("p");
    timesHead.classList.add("times-head");
    timesHead.textContent = "Operating Hours:";

    const timesInfo = document.createElement("p");
    timesInfo.classList.add("times-info");
    timesInfo.textContent = "Monday to Saturday: 10am thru 10pm";

    timesDiv.appendChild(timesHead);
    timesDiv.appendChild(timesInfo);
    content.appendChild(timesDiv);
}