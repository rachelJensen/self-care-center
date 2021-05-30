var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Don\'t let yesterday take up too much of today.',
  'Every day is a second chance.',
  'Tell the truth and love everyone.',
  'I am free from sadness.',
  'I am enough.',
  'I love myself.',
  'I am present now.',
  'Inhale the future, exhale the past.',
  'This too shall pass.',
  'Yesterday is not today.',
  'The only constant is change.',
  'Love is a light that never dwelleth in a heart possessed by fear.',
  'Onward and upward.',
  'I am the sky, the rest is weather.',
  'Where there is love, nothing is too much trouble, and there is always time.'
];

var affirmations = [
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be.',
  'I am in the process of becoming the best version of myself.',
  'I have the freedom & power to create the life I desire.',
  'I choose to be kind to myself and love myself unconditionally.',
  'My possibilities are endless.',
  'I am worthy of my dreams.',
  'I am enough.',
  'I deserve to be healthy and feel good.',
  'I am full of energy and vitality and my mind is calm and peaceful',
  'Every day I am getting healthier and stronger.',
  'I honor my body by trusting the signals that it sends me.',
  'I manifest perfect health by making smart choices.'
];

class Message {
  constructor(quote) {
    this.id = Date.now();
    this.message = quote;
  }
}

var currentQuote = "";
var savedQuotes = [];

// SELECTORS
var selectAffirmation = document.getElementById('affirmation');
var selectMantra = document.getElementById('mantra');
var receiveMessageBtn = document.getElementById('receive-message');
var message = document.getElementById('message');
var welcomeIcon = document.getElementById('welcome');
var messageDisplay = document.getElementById('quote');
var saveMessageBtn = document.getElementById('save-message');
var viewSavedBtn = document.getElementById('view-saved');
var frontPageView = document.getElementById('front-page');
var favoritesView = document.getElementById('saved-page');
var returnToMainBtn = document.getElementById('return-to-main');
var displayedMessages = document.getElementById('displayed-messages');


// EVENT LISTENERS
receiveMessageBtn.addEventListener('click', displayQuote);
saveMessageBtn.addEventListener('click', saveQuote);
viewSavedBtn.addEventListener('click', displayFavorites);
returnToMainBtn.addEventListener('click', function() {
  togglePageView(favoritesView, frontPageView)
});
displayedMessages.addEventListener('click', deleteSaved);



//FUNCTIONS
function displayQuote() {
  getQuote();
  message.innerText = currentQuote.message;
  messageDisplay.hidden = false;
  welcomeIcon.hidden = true;
  saveMessageBtn.hidden = false;
}

function getQuote() {
  if (selectAffirmation.checked) {
    var randomIndex = getRandomNumber(affirmations);
    currentQuote = new Message(affirmations[randomIndex]);
  } else if (selectMantra.checked) {
    var randomIndex = getRandomNumber(mantras);
    currentQuote = new Message(mantras[randomIndex]);
  } else {
    currentQuote = {message: "[Please make a selection]"};
  }
};

function getRandomNumber(array) {
  var random = Math.floor(Math.random() * array.length);
  return random;
};

function saveQuote() {
  //Add edge case to avoid pushing the error message to the savedQuotes
  for (var i = 0; i < savedQuotes.length; i++) {
    if (savedQuotes[i].id === currentQuote.id) {
      return;
    }
  }

  savedQuotes.push(currentQuote);
  viewSavedBtn.hidden = false;
};

function togglePageView(toHide, toDisplay) {
  toHide.hidden = true;
  toDisplay.hidden = false;
};

function displayFavorites() {
  displayedMessages.innerHTML = '';

  for (var i = 0; i < savedQuotes.length; i++) {
    displayedMessages.innerHTML += `
      <div id="${savedQuotes[i].id}" class="container saved-window">
        <p>${savedQuotes[i].message}</p>
        <button class="button mini" type="button">delete</button>
      </div>
    `;
  }
  togglePageView(frontPageView, favoritesView);
};

function deleteSaved() {
  var clickedButton = event.target;
  var clickedQuoteId = clickedButton.parentNode.id;

  for (var i = 0; i < savedQuotes.length; i++) {
    if (Number(clickedQuoteId) === savedQuotes[i].id) {
      savedQuotes.splice(i, 1);
    }
  }

  displayFavorites();
}
