const counterValue = document.getElementById('counter-value');
const increaseButton = document.getElementById('increase-btn');
const decreaseButton = document.getElementById('decrease-btn');
const resetButton = document.getElementById('reset-btn');

let count = 0;

function updateCounter(){
    counterValue.textContent = count;
}

increaseButton.addEventListener('click', function(){
    count++;
    updateCounter(count);
});

decreaseButton.addEventListener('click', function(){
    count--;
    updateCounter(count);
});

resetButton.addEventListener('click', function(){
    count=0;
    updateCounter(count);
});
