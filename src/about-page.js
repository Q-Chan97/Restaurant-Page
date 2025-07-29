import "./styles/styles.css";
import "./styles/about.css";

import bannerImg from "./about-img/about-banner.jpeg";
import jaxImg from "./about-img/about-jax.jpg";
import pomniImg from "./about-img/about-pomni.jpg";
import ragsImg from "./about-img/about-rags.jpg";
import gangleImg from "./about-img/about-gangle.jpg";
import zoobleImg from "./about-img/about-zooble.png";

export function loadAbout() {
    const content = document.querySelector("#content");

    const aboutHead = document.createElement("h1")
    aboutHead.id = "about-head";
    aboutHead.textContent = "About Spudsy's";
    content.appendChild(aboutHead);

    //////

    const bannerDiv = document.createElement("div");
    bannerDiv.classList.add("page-div")

    const bannerImage = document.createElement("img");
    bannerImage.src = bannerImg;
    bannerDiv.appendChild(bannerImage);

    const bannerTextDiv = document.createElement("div");
    bannerTextDiv.id = "banner-text-div";
    bannerDiv.appendChild(bannerTextDiv);

    const bannerHead = document.createElement("h2");
    bannerHead.textContent = "OUR STORY";
    bannerHead.classList.add("banner-head");
    bannerTextDiv.appendChild(bannerHead);

    const bannerText = document.createElement("p");
    bannerText.classList.add("about-body-text");
    bannerText.textContent = "It all started in Grandpa's kitchen, with the smell of sizzling onions and the sound of laughter filling the air. Long before we opened our doors, Sunday afternoons were reserved for burger night—a family tradition that brought everyone together, no matter how busy the week had been.";
    bannerTextDiv.appendChild(bannerText);

    const bannerText2 = document.createElement("p");
    bannerText2.classList.add("about-body-text");
    bannerText2.textContent = "Armed with a secret recipe, a trusty grill, and a whole lot of heart, we opened our doors—and our family table—to the community. From day one, it wasn’t just about food. It was about connection, comfort, and creating a space where everyone felt at home.";
    bannerTextDiv.appendChild(bannerText2);

    const bannerText3 = document.createElement("p");
    bannerText3.classList.add("about-body-text");
    bannerText3.textContent = "More than six decades later, we’re still grilling up the same classic flavors, serving generations of families who now call this place part of their own story.";
    bannerTextDiv.appendChild(bannerText3);

    content.appendChild(bannerDiv);

    //////

    const teamDiv = document.createElement("div");
    teamDiv.classList.add("page-div")
    
    const teamDivHead = document.createElement("h2");
    teamDivHead.textContent = "MEET THE STAFF";
    teamDivHead.classList.add("banner-head")
    teamDiv.appendChild(teamDivHead);

    //////

    const staffDiv = document.createElement("div");
    staffDiv.id = "staff-div";
    teamDiv.appendChild(staffDiv);

    const gangleDiv = document.createElement("div");
    gangleDiv.classList.add("staff-container");

    const ganglePic = document.createElement("img");
    ganglePic.src = gangleImg;
    ganglePic.classList.add("staff-img");
    gangleDiv.appendChild(ganglePic);

    const gangleName = document.createElement("p");
    gangleName.classList.add("staff-name");
    gangleName.textContent = "Gangle";
    gangleDiv.appendChild(gangleName);

    staffDiv.appendChild(gangleDiv);

    //////

    const ragathaDiv = document.createElement("div");
    ragathaDiv.classList.add("staff-container");

    const ragathaPic = document.createElement("img");
    ragathaPic.src = ragsImg;
    ragathaPic.classList.add("staff-img");
    ragathaDiv.appendChild(ragathaPic);

    const ragathaName = document.createElement("p");
    ragathaName.classList.add("staff-name");
    ragathaName.textContent = "Ragatha";
    ragathaDiv.appendChild(ragathaName);

    staffDiv.appendChild(ragathaDiv);



    content.appendChild(teamDiv);
}