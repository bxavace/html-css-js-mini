const clipboard = document.getElementById("clipboard");
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const generatebtn = document.getElementById("generate");

const checkUpper = document.getElementById("uppercase");
const checkLower = document.getElementById("lowercase");
const checkNumber = document.getElementById("numbers");
const checkSymbol = document.getElementById("symbols");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(lower, upper, number, symbol, le) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < le; i += typesCount) {
    typesArray.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, le);
  return finalPassword;
}

generatebtn.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = checkLower.checked;
  const hasUpper = checkUpper.checked;
  const hasNumber = checkNumber.checked;
  const hasSymbol = checkSymbol.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

clipboard.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;

  if (!password) return;
  textarea.value = password;
  //   document.body.appendChild(textarea);
  //   textarea.select();
  //   document.execCommand("copy");
  //   textarea.remove();
  navigator.clipboard.writeText(textarea.value);
  alert("Password copied to clipboard");
});
