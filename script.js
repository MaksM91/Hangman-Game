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
    element.disabled = true;
    handlePassword(element);
    document.getElementById('password').innerHTML = string1;
    if (string1 === string){
        winMenu();
    }
};

function incorrectButton(element){
    element.style.backgroundColor = "red"
    new Audio('./sound/no.wav').play();
    element.disabled = true
    loss += 1
    handlePicture(loss);
    if (loss >= 9){
        lossMenu();
    }
};

function handlePicture(loss){
    document.getElementById('picture').src = `./img/s${loss}.jpg`;
};

function handlePassword(element){
    for (let i=0; i<string.length; i++){
        if(element.innerHTML === string.toUpperCase()[i]){
            string1 = string1.substr(0,i) + string[i] + string1.substr(i+1);
        };
    };
};

function winMenu(){
    document.getElementById('letters').innerHTML = 'You are a WINNER!'

};

function lossMenu(){
    let lossParagraph = document.getElementById('letters')
    lossParagraph.classList = 'lost'
    lossParagraph.innerHTML = '<section><p>You unfortunately lost LOST! <br /> <br /> Would you like to play again?</p> <br /> <br /> <button>RESTART</button></section>'
    
};


document.querySelectorAll('.boxes').forEach(button => button.addEventListener('click', handleButton));








