var backImage = document.getElementById('backimage');
var funImage = document.getElementById('funimage');
var bgtxt = document.getElementByClassName('txt-bg');

backImage.ondblclick = function() {
  var mySrc = backImage.getAttribute('src');
  if (mySrc === 'assets/images/globe.jpg') {
    backImage.setAttribute('src', 'assets/images/iffel.jpg');
  } else {
    backImage.setAttribute('src', 'assets/images/globe.jpg');
  }
}

funImage.onmouseover = function() {
  var mySrc = funImage.getAttribute('src');
  if (mySrc === 'assets/images/mira.jpg') {
    funImage.setAttribute('src', 'assets/images/fruit.jpg');
  } else {
    funImage.setAttribute('src', 'assets/images/mira.jpg');
  }
}

bgtxt.onmouseover = function() {
  if (bgtxt.style.backgroundColor = '#ffffff78') {
    bgtxt.style.backgroundColor = 'teal';
  } else {
    bgtxt.style.backgroundColor = '#ffffff78';
  }
}