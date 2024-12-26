let confirmation = document.querySelector('.confirmation')
let btnConfirmation = document.querySelector('#btn-confirmation');
let error = document.querySelectorAll('.text-danger');
let input = document.querySelector('#prix');
let form = document.querySelector('#formulaire');
let btnReplay = document.querySelector('#btn-replay');
let btnSubmit = document.querySelector('#btn-submit')

error[0].style.display = "none";
error[1].style.display = "none";
form.style.display = "none";
btnReplay.style.display = "none";

btnConfirmation.addEventListener("click", () => {
    confirmation.style.display = "none";
    form.style.display = "block";
})

let aleatoirNumber = Math.floor(Math.random() * 2001);
let hits = 0;
let choiceNumber;

function verify(number) { 
    let instruction = document.createElement('div');

    if (number < aleatoirNumber) {
        instruction.textContent = "#" + hits + " attempt ( " + number + " ) it's more !";
        instruction.className = "response plus";

    } else if (number > aleatoirNumber) {
        instruction.textContent = "#" + hits + " attempt ( " + number + " ) it's less !";
        instruction.className = "response moins";

    } else {
        instruction.textContent = "#" + hits + " attempt ( " + number + " ) Congratulations, you found the right price !";
        instruction.className = "response fini";
        btnSubmit.disabled = true;
        input.disabled = true;
        btnReplay.style.display = "block";
    }

    document.querySelector('.responses').prepend(instruction);
}

input.addEventListener('keyup', () => {
    if (isNaN(input.value)) {
        error[0].style.display = "block";
        error[1].style.display = "none";
        input.style.borderColor = "red";
    } else if (input.value > 2000) {
        error[0].style.display = "none";
        error[1].style.display = "block";
        input.style.borderColor = "red";
    }
    else {
        error[0].style.display = "none";
        error[1].style.display = "none";
        input.style.borderColor = "#6e6e6e";
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isNaN(input.value) || input.value == "" || input.value > 2000) {
        input.style.borderColor = "red";
    } else {
        hits++
        input.style.borderColor = "#6e6e6e";
        choiceNumber = input.value;
        input.value = '';
        verify(choiceNumber);
    }
});

btnReplay.addEventListener('click', () => {
    document.querySelector('.responses').innerHTML = '';
    input.disabled = false;
    btnSubmit.disabled = false;
    btnReplay.style.display = "none";
    aleatoirNumber = Math.floor(Math.random() * 2001);
    hits = 0;
})