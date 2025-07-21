import "./styles/styles.css"
import "./styles/menu.css"

export function loadMenu() {
    const content = document.querySelector("#content");

    const mainDiv = document.createElement("div");
    mainDiv.id = "main-menu-div";

    content.appendChild(mainDiv);

    //////

    const header = document.createElement("h1");
    header.id = "menu-head";
    header.textContent = "Our Menu"

    let divider = document.createElement("div");
    divider.classList.add("menu-divider");

    mainDiv.appendChild(header);
    mainDiv.appendChild(divider);

    //////

    const entreeDiv = document.createElement("div");
    entreeDiv.id = "entree-div";

    const entreeHead = document.createElement("p");
    entreeHead.classList.add("menu-category");
    entreeHead.textContent = "Entrées";

    entreeDiv.appendChild(entreeHead);

    //////

    const sideHead = document.createElement("p");
    sideHead.classList.add("menu-category");
    sideHead.textContent = "Sides";

    entreeDiv.appendChild(sideHead);

    //////

    const dessertHead = document.createElement("p");
    dessertHead.classList.add("menu-category");
    dessertHead.textContent = "Dessert";

    entreeDiv.appendChild(dessertHead);

    mainDiv.appendChild(entreeDiv);
}