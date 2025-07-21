import "./styles/styles.css";
import "./styles/about.css";

export function loadAbout() {
    const content = document.querySelector("#content");

    const testP = document.createElement("p")
    testP.textContent = "About page working?";
    content.appendChild(testP);
}