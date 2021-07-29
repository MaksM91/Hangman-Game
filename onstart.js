let string = "Kto i co"
let string1 = ""
let button
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


for(i=0; i < 26; i++){
    button = document.createElement('button');
    button.classList = 'boxes';
    button.innerHTML = alphabet[i];
    document.getElementById('letters').appendChild(button);
}

function loadPassword(){
    for(i=0; i < string.length; i++){
        if (string[i] === " "){
        string1 = string1 + " "
        } else{
        string1 = string1 + "_"
        }
    }
    return string1    
};

loadPassword();


document.getElementById('password').innerHTML = string1;






