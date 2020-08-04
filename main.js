// 4 digit random pin code generator 
const pinCodeDisplay = document.getElementById("pinCodeDisplay");
const pinTrigger = document.querySelector('.generate-btn');
pinTrigger.addEventListener('click', function(){
    let randomPin = '';
    for(var i = 0; i < 4; i++){
        randomPin += Math.round(Math.random() * 4);
    }
    pinCodeDisplay.value = randomPin;
})                                                                                                                                                                                                                  