const dataLowerCase = "azertyuiopqsdfghjklmwxcvbn";
const dataUpperCase = dataLowerCase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$^*ùm!:;,&\"'(-è_ç)¨^=+/.?¥€@£";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");
const passwordText = document.getElementById("display-password-length");

console.log(passwordOutput);

function generatePassword() {
    let data = [];
    let password = "";
    if(lowercase.checked) data.push(...dataLowerCase);
    if(uppercase.checked) data.push(...dataUpperCase);
    if(numbers.checked) data.push(...dataNumbers);
    if(symbols.checked) data.push(...dataSymbols);

    if (data.length == 0) {
        alert("Please select some criterias");
    }

    for (i = 0; i < rangeValue.value; i++) {
        password += data[Math.floor(Math.random() * data.length)];
        console.log(passwordText.text);
        console.log(password);
    }

    passwordOutput.value = password
    navigator.clipboard.writeText(password);
    console.log(data[Math.floor(Math.random() * data.length)]);
    console.log(data);
    //Le Math.random sert à afficher un numéro aléatoire entre 0 et la data length.
    // Par déaut le Math.random donne un numéro avec des chiffres après la virgule, on utilise Math.floor pour les enlever

generateButton.textContent = "Copied !";

setTimeout(() => {
    generateButton.textContent = "Generate password";
}, 1000);
}

generateButton.addEventListener('click', generatePassword);


