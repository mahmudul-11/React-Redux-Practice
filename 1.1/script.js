const displayText = document.getElementById('displaytext');
const inrementButton = document.getElementById('incrementbtn');
const decrementButton = document.getElementById('decrementbtn')

let count = 0;
inrementButton.addEventListener('click', ()=>{

    count ++;
    displayText.innerText = count;
})

decrementButton.addEventListener('click', ()=>{
    count --;
    displayText.innerText = count;
})