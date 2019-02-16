var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/github-logo.png') {
      myImage.setAttribute ('src','images/splunk-logo.svg');
    } else {
      myImage.setAttribute ('src','images/github-logo.png');
    }
}
// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'This is your name: ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'This is your name: ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
