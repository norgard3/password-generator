// Assignment Code create a database of possible characters
let generateBtn = document.querySelector("#generate");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = " !'#$%&()*+,-./;:<=>?@[\]^_`{\}~";

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

}
function generatePassword(){
  let passcode = [];
  let buckets = [];
  // Determine length of password, check to make sure it is between 8 and 128
  let numChar = window.prompt("How long do you want your password.");
  if(numChar<8 || numChar>128 || isNaN(numChar)){
    window.alert("Please pick a number between 8 and 128");
    generatePassword();
  }
  // Confirms what type of characters the user requires
  let wantUppers = window.confirm("Do you need uppercase letters?");
  let wantLowers = window.confirm("Do you need lowercase letters?");
  let wantNumbers = window.confirm("Do you need numbers?");
  let wantSymbols = window.confirm("Do you need special characters?");
  // Assigns one character from each required category to the password and adds categories to the buckets array that were selected by the user.
  if(wantUppers){
    passcode.push(upperCase.charAt(Math.floor(Math.random()*upperCase.length)));
    buckets.push(upperCase);
  }
  if(wantLowers){
    passcode.push(lowerCase.charAt(Math.floor(Math.random()*lowerCase.length)));
    buckets.push(lowerCase); 
  }
  if(wantNumbers){
    passcode.push(numbers.charAt(Math.floor(Math.random()*numbers.length)));
    buckets.push(numbers); 
  }
  if(wantSymbols){
    passcode.push(symbols.charAt(Math.floor(Math.random()*symbols.length)));
    buckets.push(symbols);   
  }
  // determines how many characters still need to be assigned to the password.
  let remainder=numChar-passcode.length;
  // Randomly select characters from the selected categories to complete the password
  for (let i=0; i<remainder; i++){
    let list = buckets[Math.floor(Math.random()*buckets.length)];
    passcode.push(list.charAt(Math.floor(Math.random()*list.length)));
  }
  // Rearrange the selected characters to make randomized password
  passcode.sort(function(a,b){return 0.5 - Math.random()});
  // join all of the characters in the array to make a string
  return passcode.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
