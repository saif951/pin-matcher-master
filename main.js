//4 digit random pin code generator 

const pinCodeDisplay = document.getElementById("pinCodeDisplay");
const pinTrigger = document.querySelector('.generate-btn');
pinTrigger.addEventListener('click', function(){
    let randomPin = '';
    for(var i = 0; i < 4; i++){
        randomPin += Math.round(Math.random() * 4);
    }
    pinCodeDisplay.value = randomPin;
})                                          

//Number Pad Display

const numPadDisplay = document.getElementById("numPadDisplay");
const allNumBtn = document.querySelectorAll('.numbtn');
for(let i = 0; i < allNumBtn.length; i++){
    allNumBtn[i].addEventListener('click', function(){
        let number = allNumBtn[i].innerText;
        numPadDisplay.value += number;
    })
}

//backspace button activation

const backBtn = document.querySelector('.backBtn');
backBtn.addEventListener('click', function(){
    let current = numPadDisplay.value;
    numPadDisplay.value = current.slice(0, -1);
})

//clear button activation

const clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', function(){
    numPadDisplay.value = '';
})

//Pin Number Verification

const actionRemain = document.getElementById('actionRemain');
const matchedPin = document.getElementById('matchedPin');
const notMatchedPin = document.getElementById('notMatchedPin');

const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', function(){
    let count = parseInt(actionRemain.innerText);

    if(numPadDisplay.value == '' && count !=0){
        alert('Please enter generate pin');
    }
    else if(numPadDisplay.value == pinCodeDisplay.value && count > 0){
        matchedPin.style.display = 'block';
        notMatchedPin.style.display = 'none';
    }
    else if(count > 0){
        matchedPin.style.display = 'none';
        notMatchedPin.style.display = 'block';
        actionRemain.innerText = actionRemain.innerText - 1;
        count--;
    }
})