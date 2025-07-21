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

    const divider = document.createElement("div");
    divider.classList.add("menu-divider");

    mainDiv.appendChild(header);
    mainDiv.appendChild(divider);

    //////
}