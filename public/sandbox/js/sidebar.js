const panel = document.querySelector('#sidebar');

// Buttons
const btnMenu = document.querySelector('#open-menu');
const btnNew = document.querySelector('#new-data');
const btnEdit = document.querySelector('#edit-data');
const btnShare = document.querySelector('#share-data');
const btnShareTwitter = document.querySelector('#share-twitter');
const btnShareFacebook = document.querySelector('#share-facebook');
const btnShareGoogle = document.querySelector('#share-google');
const btnClosePopup = document.querySelectorAll('.popup-close');

// Popups
const dataPopup = document.querySelector('#data-popup');
const sharePopup = document.querySelector('#share-popup');
var menuVisible = true;

btnMenu.addEventListener('click', function() {
  if (menuVisible) {
    panel.style.transform = 'translateX(-100%)';
    menuVisible = false;
  } else {
    panel.style.transform = 'translateX(0%)';
    menuVisible = true;
  }
  return false;
});

btnEdit.addEventListener('click', showDataPopup);
btnShare.addEventListener('click', showSharePopup);
for (var i = 0; i < btnClosePopup.length; i++) {
  btnClosePopup[i].addEventListener('click', hidePopup);
}

window.addEventListener('keydown', function(e) {
  if (e.keyCode === 27) {
    hidePopup();
  }
});

function showDataPopup() {
  dataPopup.style.display ='block';
}

function showSharePopup() {
  sharePopup.style.display ='block';
}

function hidePopup() {
  dataPopup.style.display ='none';
  sharePopup.style.display ='none';
}
