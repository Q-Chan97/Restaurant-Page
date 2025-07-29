import "./styles/styles.css"
import "./styles/menu.css"

export function loadMenu() {
    const content = document.querySelector("#content");

    const mainDiv = document.createElement("div");
    mainDiv.id = "main-menu-div";

    content.appendChild(mainDiv);

    //////

    function createCategory(categoryName) {
        let category = document.createElement("div");
        category.classList.add("category-class");
        
        let categoryTitle = document.createElement("div");
        categoryTitle.classList.add("menu-category")
        categoryTitle.textContent = categoryName;
        category.appendChild(categoryTitle);


        function createMenuCard (name, info, price) {
            let card = document.createElement("div");
            card.classList.add("menu-card");
   
           let menuName = document.createElement("div");
           menuName.classList.add("name")
           menuName.textContent = name
           card.appendChild(menuName);
   
           let menuInfo = document.createElement("div");
           menuInfo.classList.add("info")
           menuInfo.textContent = info
           card.appendChild(menuInfo);
   
           let menuPrice = document.createElement("div");
           menuPrice.classList.add("info")
           menuPrice.textContent = price
           card.appendChild(menuPrice);
           
           category.appendChild(card);
        }

        return {category, createMenuCard}
    } 

    //////

    const header = document.createElement("h1");
    header.id = "menu-head";
    header.textContent = "Our Menu"

    let divider = document.createElement("div");
    divider.classList.add("menu-divider");

    mainDiv.appendChild(header);
    mainDiv.appendChild(divider);

    //////

    const foodDiv = document.createElement("div");
    foodDiv.id = "food-div"
    mainDiv.appendChild(foodDiv);

    const entree = createCategory("Entrées");
    entree.createMenuCard("#57 Value Meal", "The classic. Burger, fries, and a drink.", "$5");
    entree.createMenuCard("Spudsy With Cheese", "The OG, with melty American Cheese", "$5");
    entree.createMenuCard("Stupid Burger", "The burger that makes you stupid.", "$7");
    entree.createMenuCard("Spicy Chichen Sand", "Crispy chicken brings the heat", "$5");
    entree.createMenuCard("Crispy Nugs", "Deep-fried and butter-battered fresh chicken nuggies.", "$3");
    entree.createMenuCard("Jumbo Shrimp", "Breaded shrimp with cocktail sauce and lemon.", "$6");
    
    foodDiv.appendChild(entree.category);

    //////

    const sides = createCategory("Sides");
    sides.createMenuCard("Crinkle Fries", "Signature crinkle fries, from only potatoes", "$3");
    sides.createMenuCard("Mashed Potatoes", "Potates- mashed till light and fluffy", "$3");
    sides.createMenuCard("Side Salad", "Mixed greens with tomato and croutons", "$4");

    foodDiv.appendChild(sides.category);

    //////

    const sweets = createCategory("Sweet Treats");
    sweets.createMenuCard("Shake", "Rich and creamy custard shake", "$4");
    sweets.createMenuCard("Cookies", "Warm and tasty chocolate chip cookies", "$3");
    sweets.createMenuCard("Apple Pie", "Baked to crispy perfection", "$2");

    foodDiv.appendChild(sweets.category);
}