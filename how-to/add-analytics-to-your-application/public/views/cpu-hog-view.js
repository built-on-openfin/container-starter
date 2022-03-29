
function isPrime(num) {
  for (var i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
}

async function init() {
  // Add onclick handles for starting and stopping cpu
  const calculateButton = document.getElementById("prime-number-submit-button");
  const primeNumberInput = document.getElementById("prime-number-input");
  const result = document.getElementById("result");
  calculateButton.addEventListener("click", () => {
    const userInput = primeNumberInput.value;
    result.innerText = "";
    result.innerText = isPrime(Number.parseInt(userInput));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  init();
});