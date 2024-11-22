
function generaterRecipe(event) {
    event.preventDefault();

    new typewriter("#recipe", {
        strings:"step 1 Bring a pan of water to the boil "
          autoStart: true,
          delay: 50,
          cursor: "",
    })
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generaterRecipe);

