const welcome = document.getElementById('welcome')
welcome.innerHTML = "Hello World of DOM!"

const content = document.getElementById('content')
content.innerHTML = "Did you know? Javascript cannot make web pages interactive. Learning the DOM is your second step to web magic!!!"

const fact = document.getElementById('fact')
fact.innerHTML = "not interesting fact: DOM stands for Document objekt Model."

let userName = prompt("Enter your Name...")
const isName = document.getElementById('isName')
isName.innerHTML = `My name is "${userName}"`