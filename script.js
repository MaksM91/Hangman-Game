let string = "Kto i co"
let string1 = "" 
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Function that hide password behind dashes

function loadPassword(){
    for(i=0; i < string.length; i++){
        if (string[i] === " "){
        string1 = string1 + " "
        } else{
        string1 = string1 + "_"
        }
    }

    document.getElementById('password').innerHTML = string1
};



// Function that creates buttons

document.addEventListener('DOMContentLoaded', () => {
    for(i=0; i < 26; i++){
        var button = document.createElement('button');
        button.innerHTML = 'Hi'
        button.className = 'boxes'
        button.innerHTML = alphabet[i]
        document.getElementById('letters').appendChild(button);
    }
})

document.addEventListener('DOMContentLoaded', loadPassword())



