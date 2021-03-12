let runningTotal = 0;

const inputEl = document.querySelector('#num');
const ccEl = document.querySelector('#current-count');

document.querySelector('#add').addEventListener('click', handleAdd);
document.querySelector('#subtract').addEventListener('click', handleSub);


function init () {
    inputEl.value = 1; 
}

init();

function handleAdd () {
    runningTotal += parseInt(inputEl.value);
    ccEl.innerHTML = runningTotal;
    render();
}

function handleSub () {
    runningTotal -= parseInt(inputEl.value);
    ccEl.innerHTML = runningTotal;
    render();
}

function render () {
    if (parseInt(ccEl.innerHTML) < 0) {
        ccEl.style.color = 'red';
    } else {
        ccEl.style.color = 'black';
    }
}
