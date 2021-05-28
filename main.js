var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Don’t let yesterday take up too much of today.',
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

var currentQuote = "";
var savedQuotes = [];

// query selectors
var selectAffirmation = document.getElementById('affirmation');
var selectMantra = document.getElementById('mantra');
var receiveMessageBtn = document.getElementById('receive-message');
var message = document.getElementById('message');
var welcomeIcon = document.getElementById('welcome');
var quoteToDisplay = document.getElementById('quote');

// EVENT LISTENERS
receiveMessageBtn.addEventListener('click', displayQuote);

//FUNCTIONS
function displayQuote() {
  getQuote();
  message.innerText = currentQuote;
  quoteToDisplay.hidden = false;
  welcomeIcon.hidden = true;
}

function getQuote() {
  if (selectAffirmation.checked) {
    var randomIndex = getRandomNumber(affirmations);
    currentQuote = affirmations[randomIndex];
  } else if (selectMantra.checked) {
    var randomIndex = getRandomNumber(mantras);
    currentQuote = mantras[randomIndex];
  } else {
    currentQuote = "[Please make a selection]";
  }
}

function getRandomNumber(array) {
  var random = Math.floor(Math.random() * array.length);
  return random;
}
