var words = require('an-array-of-english-words')

const app = document.querySelector('.app')

window.addEventListener('DOMContentLoaded', () => {
  grow()
  setInterval(grow, 100)
  setTimeout(() => {
    setInterval(convert, 100)
  }, 2000)
});

function grow() {
  const word = document.createTextNode(words[Math.floor(Math.random() * words.length)])
  const anchor = document.createElement('a')
  anchor.appendChild(word)
  app.appendChild(anchor)

  setTimeout(() => {
    anchor.classList.add('fade')
  }, 100)
}

function convert() {
  const anchors = document.querySelectorAll('a');
  const random = Math.floor(Math.random() * anchors.length);

  if (anchors[random].innerText.split('\n').length > 1) {
    console.log('ERROR')
  } else {
    anchors[random].href = `https://wikipedia.org/wiki/${anchors[random].innerText}`;
    anchors[random].rel = "noreferrer";
    anchors[random].classList.add('linked');
  }
}
