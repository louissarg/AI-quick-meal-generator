function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "baef1db434f00t5c6510a0f45a35996o";
  let prompt = `Generate a quick meal recipe ${instructionsInput.value}`;
  let context =
    "you are a master chief and you are required to write to generate a quick meal recipe with HTML.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#meal-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
