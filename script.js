let string = "Kto i co"
let string1 = "" 

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







document.addEventListener('DOMContentLoaded', () => {
    for(i=0; i < 26; i++){
        var div = document.createElement('div');
        div.innerHTML = 'Hi'
        div.className = 'boxes'
        console.log(div)
        document.getElementById('letters').appendChild(div);
    }
})

document.addEventListener('DOMContentLoaded', loadPassword())

