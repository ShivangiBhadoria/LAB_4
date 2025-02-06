const inputField = document.getElementById("numberInput");
const button = document.getElementById("calculateBtn");
const resultParagraph = document.getElementById("result");

button.addEventListener("click", function () {
  
  const num = parseFloat(inputField.value);

  const square = num * num;

  resultParagraph.innerHTML = `<strong>Square of ${num} is ${square}</strong>`;
});