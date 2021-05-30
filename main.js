//global variables
var affirmations = [
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be.',
  'I am in the process of becoming the best version of myself.',
  'Today, I abandon my old habits and take up new, more positive ones.',
  'I choose to be kind to myself and love myself unconditionally.',
  'My possibilities are endless.',
  'I am worthy of my place in the universe.',
  'I am enough.',
  'I deserve to be healthy and feel good.',
  'I am full of energy and vitality and my mind is calm and peaceful',
  'Every day I am getting stronger and more capable.',
  'I honor my body by trusting the signals that it sends me.',
  'I wake up today with strength in my heart and clarity in my mind.',
  'My nature is Divine; I am a spiritual being.',
  'My fears of tomorrow are simply melting away.',
  'My thoughts are filled with positivity and my life is plentiful with prosperity.',
  'Happiness is a choice. I base my happiness on my own accomplishments and the blessings I\'ve been given.',
  'I am courageous and I stand up for myself.',
  'I forgive those who have harmed me in my past and peacefully detach from them.'
];

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
  'Where there is love, nothing is too much trouble, and there is always time.',
  'I surrender to the flow and have faith in the ultimate good.',
  'While I support others, I also ask for help when needed.'
];

var currentQuote = "";
var savedQuotes = [];

// SELECTORS
// buttons
var receiveMessageBtn = document.getElementById('receive-message');
var returnToMainBtn = document.getElementById('return-to-main');
var saveMessageBtn = document.getElementById('save-message');
var selectAffirmation = document.getElementById('affirmation');
var selectMantra = document.getElementById('mantra');
var viewSavedBtn = document.getElementById('view-saved');

// display elements
var displayedMessages = document.getElementById('displayed-messages');
var favoritesView = document.getElementById('saved-page');
var frontPageView = document.getElementById('front-page');
var message = document.getElementById('message');
var messageDisplay = document.getElementById('quote');
var welcomeIcon = document.getElementById('welcome');


// EVENT LISTENERS
displayedMessages.addEventListener('click', deleteSaved);
receiveMessageBtn.addEventListener('click', displayQuote);
returnToMainBtn.addEventListener('click', function() {
  togglePageView(favoritesView, frontPageView)
});
saveMessageBtn.addEventListener('click', saveQuote);
viewSavedBtn.addEventListener('click', displayFavorites);



//FUNCTIONS
class Message {
  constructor(quote) {
    this.id = Date.now();
    this.message = quote;
  }
}

function deleteSaved() {
  var clickedButton = event.target;
  var clickedQuoteId = clickedButton.parentNode.id;

  for (var i = 0; i < savedQuotes.length; i++) {
    if (Number(clickedQuoteId) === savedQuotes[i].id) {
      savedQuotes.splice(i, 1);
    }
  }

  displayFavorites();
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

function displayQuote() {
  getQuote();
  message.innerText = currentQuote.message;
  messageDisplay.hidden = false;
  welcomeIcon.hidden = true;
  saveMessageBtn.hidden = false;
};

function getRandomNumber(array) {
  var random = Math.floor(Math.random() * array.length);
  return random;
};

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

function saveQuote() {
  for (var i = 0; i < savedQuotes.length; i++) {
    if (savedQuotes[i].message === currentQuote.message) {
      return;
    }
  }
  // prevent error message from being saved
  if (currentQuote.message === "[Please make a selection]") {
    return;
  }

  savedQuotes.push(currentQuote);
  viewSavedBtn.hidden = false;
};

function togglePageView(toHide, toDisplay) {
  toHide.hidden = true;
  toDisplay.hidden = false;
};
