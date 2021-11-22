// Assignment Code

let generateBtn = document.querySelector('#generate');


function generatePassword(){
  let smLttrs = 'abcdefghijklmnopqrstuvwxyz';
  let capLttrs = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';
  let nbrs = '1234567890';
  let spChars = '~!@#$%^&*()_+{}:?><;.,';
  let password = '';
  let avalChars = '';


let pwLength = prompt('Please indicate a password length between 8 and 128.')


if (pwLength >= 8 && pwLength <= 128) {
  console.log(pwLength)
}


else {
  alert('Your password must be at least 8, but no more than 128, characters \nPlease enter a valid number between 8 & 128.')
  return '';
}


let qrySmLttrs = confirm('Do you want to use lower case (a-z) letters in your password?')

let qryCapLttrs = confirm('Do you want to use upper case (A-Z) letters in your password?')


let qryNbrs = confirm('Do you want to use numbers (0-9) in your password?')


let qrySpChars = confirm('Do you want to use special characters (!#$%&\'()*+,-./:;<=>?@[]^_`{|}~) letters in your password?')


if (qrySmLttrs) {
  avalChars += smLttrs
}


if (qryCapLttrs) {
  avalChars += capLttrs
}


if (qryNbrs) {
  avalChars += nbrs
}

if (qrySpChars) {
  avalChars += spChars
}

if (
  !qrySmLttrs && !qryCapLttrs && !qryNbrs && !qrySpChars
) {
  return alert('Please select at least one criteria!');
  
}

for (let i = 0; i < pwLength; i++) {
 
  password +=avalChars[Math.floor(Math.random () * avalChars.length)];
}
return password;
}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
