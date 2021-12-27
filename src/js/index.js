var words = require('an-array-of-english-words')

const app = document.querySelector('.app')

window.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < 350; i++) {
    grow()
  }
  // setInterval(function(){
  //     if(Math.floor(Math.random() * 15) == 1){
  //         document.body.style.opacity = "0.9";
  //         setTimeout(function(){
  //             document.body.style.opacity = "1";
  //         },500)
  //     }
  // },100)
});

function grow() {
  const link = `www.${words[Math.floor(Math.random() * words.length)]}${words[Math.floor(Math.random() * words.length)]}${words[Math.floor(Math.random() * words.length)]}.com`
  const word = document.createTextNode(link)
  const anchor = document.createElement('a')
  anchor.appendChild(word)
  anchor.href = `https://${link}`
  app.appendChild(anchor)

  setTimeout(() => {
    anchor.classList.add('fade')
  }, 100)
}

function foreverLost() {
  let link;
  for (let i = 0; i < 350; i++) {
    link += words[Math.floor(Math.random() * words.length)]
  }
  const word = document.createTextNode(`www.${link}.com`)
  const anchor = document.createElement('a')
  anchor.appendChild(word)
  anchor.href = `https://${link}`
  app.appendChild(anchor)
}

// document.addEventListener('scroll', () => {
//   const links = document.querySelectorAll('a')
//
//   for (let i = 0; i < links.length; i++) {
//     links[i].classList.add('visited')
//     setTimeout(() => {
//       links[i].classList.remove('visited')
//     }, 1)
//   }
//
// })
