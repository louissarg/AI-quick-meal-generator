function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "step 1 Bring a pan of water to the boil ",
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#meal-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
