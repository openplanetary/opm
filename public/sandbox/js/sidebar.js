const panel = document.querySelector('#sidebar');
const btnMenu = document.querySelector('#open-menu');
const btnShare = document.querySelector('#share-data');
const btnShareTwitter = document.querySelector('#share-twitter');
const btnShareFacebook = document.querySelector('#share-facebook');
const btnShareGoogle = document.querySelector('#share-google');
const btnClosePopup = document.querySelector('#popup-close');
const popup = document.querySelector('#share-popup');
var menuVisible = false;

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

btnShare.addEventListener('click', showPopup);
btnClosePopup.addEventListener('click', hidePopup);
window.addEventListener('keydown', function(e) {
  if (e.keyCode === 27) {
    hidePopup();
  }
});

function showPopup() {
  popup.style.display ='block';

}

function hidePopup() {
  popup.style.display ='none';
}
