// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
let passwordLength = 0;
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specChars = ["@","(","~","!","@","#","$","%","^","&","*","_","-","+","=","`","|","(",",",")","{","}","[","]","",":",";","<",">",",","","?","/"];

const charTypes = {
  lowerCase: lowerCase,
  upperCase: upperCase,
  numbers: numbers,
  specChars: specChars
};

const selectedCharTypes = {
};

// Create string for html that'll accept user input for passwordLength
// Create function to save user input to variable
// look up how to handle an input element on change event in w3shools and stack overflow

const passwordLengthCardHTML = `
<header>
  <h1>Password Generator</h1>
</header>
<div class="card">
<div class="card-header">
  <h2>Set Password Length</h2>
</div>
<div class="card-body">
<input id="password-length-input" oninput="inputLengthFunction()"  />
  <div class="card-footer">
    <button id="generate" class="btn" onclick="nextButtonStepTwo()">Next -></button>
  </div>
</div>
`;

function cardChangePasswordLengthStep () 
{
const cardWrappers = document.getElementsByClassName('wrapper');
cardWrappers[0].innerHTML = passwordLengthCardHTML;
};

function inputLengthFunction (event) {
const input = document.getElementById('password-length-input');
if (!isNaN(input.value)) {
passwordLength = Number(input.value);
console.log(passwordLength);
}
}

function nextButtonStepTwo() {
  if (passwordLength < 8 || passwordLength > 128) {
 alert("Password length must be between 8 through 128."); 
} else {
  const passwordCharTypesHTML = `
  <header>
    <h1>Password Generator</h1>
  </header>
  <div class="card">
  <div class="card-header">
    <h2>Select Password Character Types</h2>
  </div>
  <div class="card-body">
  <input type="checkbox" id="lowercase" name="test" selected=false value="lowerCase" onchange="toggleCharTypes(lowercase)" />
<label for="lowercase"> Include lowercase letters </label><br>
  <input type="checkbox" id="uppercase" value="upperCase" onchange="toggleCharTypes(uppercase)" />
<label for="uppercase"> Include uppercase letters </label><br>
  <input type="checkbox" id="number" value="numbers" onchange="toggleCharTypes(number)" />
<label for="number"> Include numbers </label><br>
  <input type="checkbox" id="specialchars" value="specChars" onchange="toggleCharTypes(specialchars)" />
<label for="specialchars"> Include special characters </label><br>
    <div class="card-footer">
      <button id="generate" class="btn" onclick="passwordCalc()"> Finalize </button>
    </div>
  </div>
  `; 

  const cardWrappers = document.getElementsByClassName('wrapper');
  cardWrappers[0].innerHTML = passwordCharTypesHTML;
};
}

function toggleCharTypes(element) {
  const key = element.value;
if (!selectedCharTypes[key]) {
  selectedCharTypes[key] = charTypes[key];
} else {
  delete selectedCharTypes[key];
}
console.log(selectedCharTypes);
}

function passwordCalc() {
  let finalPass = "";
  const arrayOfTypes = Object.entries(selectedCharTypes);
  console.log(arrayOfTypes);
  for( i = 0; i < passwordLength; i++) {
  const outerIndex = Math.floor(Math.random() * arrayOfTypes.length);
  const innerArray = arrayOfTypes[outerIndex][1];
  const innerIndex = Math.floor(Math.random() * innerArray.length);
  const randomChar = innerArray[innerIndex];
  finalPass += randomChar; 
  console.log(finalPass);
  }

const finalPage = `
<header>
  <h1>Password Generator</h1>
</header>
<div class="card">
  <div class="card-header">
    <h2>Here's your Password!</h2>
  </div>
  <div class="card-body">
    <textarea
      readonly
      id="password"
      aria-label="Generated Password"
    >${finalPass}</textarea>
  </div>
</div>
`

const cardWrappers = document.getElementsByClassName('wrapper');
cardWrappers[0].innerHTML = finalPage;

}