const myText = document.getElementById("myText");
const mysubmit = document.getElementById("mysubmit");
const RE = document.getElementById("RE"); 
let age = 0;

mysubmit.onclick = function(){

    age = myText.value;
    age = Number(age);

    if(age >= 100){
        RE.textContent = `You are too old to enter this site.`;
    }
    else if(age == 0){
        RE.textContent = `You can't enter. you were just born.`;
    }
    else if(age >= 18){
        RE.textContent = `You are old enough to enter.`;
    }
    else if(age < 0){
        RE.textContent = `Your age can't be below 0`;
    }
    else{
        RE.textContent = `You must be 18+ to enter this site.`;
    }
}