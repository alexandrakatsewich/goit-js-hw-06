const textInput = document.querySelector("input");
const nameOutput = document.querySelector("span");

textInput.addEventListener("input", (event) => {
    nameOutput.textContent = event.currentTarget.value;
});