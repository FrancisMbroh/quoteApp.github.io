import { data } from "./data.js";

const quoteContainer = document.querySelector('.quote-container');
const quote = document.querySelector('.quote');
const quotee = document.querySelector('.quotee');
const quoteGenerator = document.querySelector('.quote-generator');
const tweetButton = document.querySelector('.tweet-button')



let availableQuotes = [];
let currentQoute = {};

const start = () => {
  availableQuotes = [...data];
  getNewQoute();
}

const getNewQoute = () => {
  let quoteIndex = Math.floor(Math.random() * availableQuotes.length);
  currentQoute = availableQuotes[quoteIndex];
  quote.innerHTML = currentQoute.quote;
quotee.innerHTML = '~ ' + currentQoute.quotee + ' ~';
}

quoteContainer.style.display = 'none'
quoteGenerator.addEventListener('click', () => {
  if(quoteGenerator.innerHTML === 'Generate'){
    quoteGenerator.innerHTML = 'Next';
  }
  quoteContainer.style.display = 'flex'
  start()
})

document.body.addEventListener('keyup', (e) => {
if(e.key === 'n'){
    quoteGenerator.innerHTML = 'Next';
    quoteContainer.style.display = 'flex'
  start()
}else if(e.key === 't'){
  window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML}---${quotee.innerHTML}`, "Tweet Window", "width=600 height=300")
}
})

tweetButton.addEventListener('click', ()=> {
  window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML}---${quotee.innerHTML}`, "Tweet Window", "width=600 height=300");
})

