export function loadMenu() {
    const content = document.querySelector("#content");

    const testP = document.createElement("p")
    testP.textContent = "Am I here?";
    content.appendChild(testP);
}