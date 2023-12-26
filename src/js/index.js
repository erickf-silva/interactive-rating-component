let rates = document.querySelectorAll('.btn');
let btnSubmit = document.querySelector('.btn-submit');
let mainContainer = document.querySelector('.main-container');
let thankYouContainer = document.querySelector('.thank-you');
let thankYouParagraph = document.querySelector('.paragraph');
let btnRateAgain = document.querySelector('.btn-rate-again');

let chosenNumber;

function handleRatingClick(rate, index) {
    chosenNumber = index;
}

rates.forEach(function (rate, index) {
    rate.addEventListener('click', () => {
        handleRatingClick(rate, index);
    });
});

function handleSubmitClick() {
    if (chosenNumber !== undefined) {
        mainContainer.classList.add('hidden');
        thankYouContainer.classList.remove('hidden');
        thankYouParagraph.textContent = `You selected ${++chosenNumber} out of 5`;
    } else {
        alert("Please select a rating before submitting your review!");
    }
}

btnSubmit.addEventListener('click', handleSubmitClick);

function handleRateAgainClick() {
    mainContainer.classList.remove('hidden');
    thankYouContainer.classList.add('hidden');
    chosenNumber = undefined;
}

btnRateAgain.addEventListener('click', handleRateAgainClick);

module.exports = { handleRatingClick, handleSubmitClick, handleRateAgainClick };