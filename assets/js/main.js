var backImage = document.getElementById('backimage');
var funImage = document.getElementById('funimage');
var bgtxt = document.getElementById('txt-bg');

backImage.onmouseover = function() {
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

bgtxt.ondblclick = function() {
  var textbg = bgtxt.style.backgroundColor;
  if (textbg == '#ffffff78') {
    textbg = 'red';
  } else {
    textbg = '#ffffff78';
  }
}