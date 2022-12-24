let characters = [];

const upperCaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowerCaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

//INPUT RANGE
const bubble = document.querySelector("#bubble");
const inputSlider = document.querySelector("#rangeInput");
let inputValue = inputSlider.value;

inputSlider.oninput = () => {
  inputValue = inputSlider.value;
  bubble.textContent = inputValue;
  // bubble.style.left = ((inputValue - 8) * 100) / (32 - 8) + "%";
  bubble.classList.add("show");
};
// inputSlider.onblur = () => {
//   bubble.classList.remove("show");
// };

let password = document.getElementById("password-output");
let passwordArray = [];
let lowerCaseCheck = document.querySelector("#lowerCaseCharacterCheck");
let upperCaseCheck = document.querySelector("#upperCaseCharacterCheck");
let numberCheck = document.querySelector("#numberCharacterCheck");
let specialCheck = document.querySelector("#specialCharacterCheck");
const generateBtn = document.getElementById("generate-btn");

generateBtn.disabled = true;

// Get a list of all checkbox elements
let checkboxes = document.querySelectorAll("input[type='checkbox']");
// console.log(checkboxes);

// Initialize a flag to track whether all checkboxes are unchecked
let allUnchecked = true;

// If the flag is still true, it means all checkboxes are unchecked, so disable the button
// if (allUnchecked) {
//   generateBtn.disabled = true;
// }

function newPassword() {
  // checkCheckbox();
  clearPassword();
  formCharacters();
  do {
    generatePassword();
  } while (isStrong() == false);
  console.log(generateBtn.disabled);
}

function clearPassword() {
  passwordArray = [];
  password.textContent = "";
  characters = [];
}

function formCharacters() {
  // the .concat() function adds an array onto another array

  if (lowerCaseCheck.checked == true) {
    characters = characters.concat(lowerCaseCharacters);
  }
  if (upperCaseCheck.checked == true) {
    characters = characters.concat(upperCaseCharacters);
  }
  if (numberCheck.checked == true) {
    characters = characters.concat(numberCharacters);
  }
  if (specialCheck.checked == true) {
    characters = characters.concat(specialCharacters);
  }
}

//generate the number of characters the password has
function generatePassword() {
  for (let i = 0; i < inputValue; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    passwordArray[i] = characters[randomNumber];
  }
  // .join() removes the commas that separate array values and
  // replaces them with something instead. Even if that something is a nothing.
  password.textContent = passwordArray.join("");
}

function isStrong() {
  if (
    includeUpperCaseCharacter() == true &&
    includeLowerCaseCharacter() == true &&
    includeNumberCharacter() == true &&
    includeSpecialCharacter() == true
  ) {
    return true;
  } else {
    return false;
  }
}

function includeLowerCaseCharacter() {
  if (lowerCaseCheck.checked == false) {
    for (let i = 0; i < lowerCaseCharacters.length; i++) {
      let checker = password.textContent.includes(lowerCaseCharacters[i]);
      if (checker == true) {
        return false;
      }
    }
    return true;
  } else {
    for (let i = 0; i < lowerCaseCharacters.length; i++) {
      let checker = password.textContent.includes(lowerCaseCharacters[i]);
      if (checker == true) {
        return true;
      }
    }
    return false;
  }
}

function includeUpperCaseCharacter() {
  if (upperCaseCheck.checked == false) {
    for (let i = 0; i < upperCaseCharacters.length; i++) {
      let checker = password.textContent.includes(upperCaseCharacters[i]);
      if (checker == true) {
        return false;
      }
    }
    return true;
  } else {
    for (let i = 0; i < upperCaseCharacters.length; i++) {
      let checker = password.textContent.includes(upperCaseCharacters[i]);
      if (checker == true) {
        return true;
      }
    }
    return false;
  }
}

function includeNumberCharacter() {
  if (numberCheck.checked == false) {
    for (let i = 0; i < numberCharacters.length; i++) {
      let checker = password.textContent.includes(numberCharacters[i]);
      if (checker == true) {
        return false;
      }
    }
    return true;
  } else {
    for (let i = 0; i < numberCharacters.length; i++) {
      let checker = password.textContent.includes(numberCharacters[i]);
      if (checker == true) {
        return true;
      }
    }
    return false;
  }
}

function includeSpecialCharacter() {
  if (specialCheck.checked == false) {
    for (let i = 0; i < specialCharacters.length; i++) {
      let checker = password.textContent.includes(specialCharacters[i]);
      if (checker == true) {
        return false;
      }
    }
    return true;
  } else {
    for (let i = 0; i < specialCharacters.length; i++) {
      let checker = password.textContent.includes(specialCharacters[i]);
      if (checker == true) {
        return true;
      }
    }
    return false;
  }
}

function copyContent() {
  navigator.clipboard.writeText(password.textContent);
  console.log("text copied");
  snackbarEl = document.getElementById("snackbar");
  snackbarEl.className = "show";
  setTimeout(function () {
    snackbarEl.className = snackbarEl.className.replace("show", "");
  }, 3000);
}

lowerCaseCheck.addEventListener("change", function () {
  if (
    lowerCaseCheck.checked ||
    upperCaseCheck.checked ||
    numberCheck.checked ||
    specialCheck.checked
  ) {
    allUnchecked = false;
    generateBtn.disabled = false;
  } else {
    generateBtn.disabled = true;
  }
});

upperCaseCheck.addEventListener("change", function () {
  if (
    lowerCaseCheck.checked ||
    upperCaseCheck.checked ||
    numberCheck.checked ||
    specialCheck.checked
  ) {
    allUnchecked = false;
    generateBtn.disabled = false;
  } else {
    generateBtn.disabled = true;
  }
});

numberCheck.addEventListener("change", function () {
  if (
    lowerCaseCheck.checked ||
    upperCaseCheck.checked ||
    numberCheck.checked ||
    specialCheck.checked
  ) {
    allUnchecked = false;
    generateBtn.disabled = false;
  } else {
    generateBtn.disabled = true;
  }
});

specialCheck.addEventListener("change", function () {
  if (
    lowerCaseCheck.checked ||
    upperCaseCheck.checked ||
    numberCheck.checked ||
    specialCheck.checked
  ) {
    allUnchecked = false;
    generateBtn.disabled = false;
  } else {
    generateBtn.disabled = true;
  }
});

// Set the title attribute of the button to the desired tooltip text
generateBtn.title = "Please check at least one checkbox to enable this button";

// Add an event listener to the button that will be called when the mouse enters the button
generateBtn.addEventListener("mouseenter", function () {
  // If the button is disabled, show the tooltip
  if (generateBtn.disabled) {
    button.setAttribute("data-tooltip", generateBtn.title);
  }
});

// Add an event listener to the button that will be called when the mouse leaves the button
generateBtn.addEventListener("mouseleave", function () {
  // If the button is disabled, hide the tooltip
  if (generateBtn.disabled) {
    generateBtn.removeAttribute("data-tooltip");
  }
});
