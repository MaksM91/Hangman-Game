let loss = 0;

function handleButton(){
    if (string.toUpperCase().includes(this.innerHTML)){
        correctButton(this);
    } else {
        incorrectButton(this);
    }
};

function correctButton(element){
    element.style.backgroundColor = "green";
    new Audio('./sound/yes.wav').play();
    element.disabled = true
    handlePassword()
};

function incorrectButton(element){
    element.style.backgroundColor = "red"
    new Audio('./sound/no.wav').play();
    element.disabled = true
    loss += 1
    if (loss > 9){
        restartMenu();
    }
    handlePicture(loss);
};

function handlePicture(loss){
    document.getElementById('picture').src = `./img/s${loss}.jpg`;
};

function handlePassword(){
    
};

function restartMenu(){

};


document.querySelectorAll('.boxes').forEach(button => button.addEventListener('click', handleButton));








