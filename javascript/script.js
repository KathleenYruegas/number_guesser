let randomNumber = Math.floor((Math.random() * 100) + 1);
const guessSubmit = document.querySelector('.guessSubmit');
const mostRecentGuess = document.querySelector('.mostRecentGuess');
const correctGuess = document.querySelector('.correctGuess');
const guessField = document.querySelector('.userGuess');
const highLow = document.querySelector('.highLow');
const min = 1;
const max = 100;

guessField.focus();

guessSubmit.addEventListener('click', guessCheck);

function guessCheck(event) {
  event.preventDefault();
  let userGuess = Number(guessField.value);

  if (validateGuess(userGuess)) {
    mostRecentGuess.textContent = 'Your Most Recent Guess: ' + userGuess;

    if (userGuess === randomNumber) {
      highLow.textContent = '';
      correctGuess.textContent = "BOOM!";
      guessSubmit.disabled = true;
      guessField.disabled = true;
      resetGame();
    } else if (userGuess > randomNumber) {
      highLow.textContent = "That is too high!";
    } else if (userGuess < randomNumber) {
      highLow.textContent = "That is too low!";
    }

    guessField.value = '';
    guessField.focus();
  };
};

const guessError = document.querySelector('.error');

function validateGuess(guess) {
  guessError.textContent = '';
  if (isNaN(guess)) {
    guessError.textContent = "You need to guess a numberical number.";
    return false;
  } else if (guess < min || guess > max) {
    guessError.textContent = 'Your guess should be between ' + min + ' and ' + max;
    return false;
  } else {
    return true;
  }
}
