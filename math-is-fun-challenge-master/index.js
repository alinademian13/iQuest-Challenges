// let resultPlace = document.querySelector('ul li:nth-child(5) div span');
// let errorPlace = document.querySelector('article ul:first-child li:nth-child(4) div span');

const spans = document.querySelectorAll('span');
const resultPlace = spans[1];
const errorPlace = spans[0];

function run() {

    let first = document.getElementById('first').value;
    let second = document.getElementById('second').value;
    let third = document.getElementById('third').value;
    let fourth = document.getElementById('fourth').value;

    const numberPattern = new RegExp('^[0-9]+$');

    if (first === '' || second === '' || third === '' || fourth === '') {
        errorPlace.innerHTML = "The input(s) must not be empty!";
    } else if (
        numberPattern.test(first) && 
        numberPattern.test(second) && 
        numberPattern.test(third) && 
        numberPattern.test(fourth)
    ) {
        let result = parseInt(first) + parseInt(second) + parseInt(third) * parseInt(fourth);

        resultPlace.innerHTML = result;
    } else {
        errorPlace.innerHTML = "The inputs must contain only numbers!";
    }   
}

let inputs = document.querySelectorAll('input[type="text"]');

inputs.forEach(function(input) {
    input.addEventListener('change', function() {
        resultPlace.innerHTML = " ";
        errorPlace.innerHTML = " ";
    });
});
