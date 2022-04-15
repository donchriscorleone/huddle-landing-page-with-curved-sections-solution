const input = document.querySelector('input.input');
const message = document.querySelector('span.input-message');
const btn = document.querySelector('.btn-subscribe');

btn.addEventListener('click', (e) => {
    let value = input.value;
    if (!value) {
        input.className = "input input-error";
        message.className = "input-message show-message";
    } else {
        input.value = "";
        input.className = "input";
        message.className = "input-message";
    }
})

input.addEventListener('change', (e) => {
    if (input.value == '') {
        input.className = "input";
        message.className = "input-message";
    }
})