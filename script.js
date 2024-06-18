const input = document.querySelector('input');
const log = document.getElementById('log');

function updateValue() {
    log.innerText = input.value;
}
input.oninput = updateValue;