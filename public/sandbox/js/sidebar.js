const panel = document.querySelector('#sidebar');
const btnMenu = document.querySelector('#open-menu');
const btnShare = document.querySelector('#share-data');
const btnShareTwitter = document.querySelector('#share-twitter');
const btnShareFacebook = document.querySelector('#share-facebook');
const btnShareGoogle = document.querySelector('#share-google');
const btnClosePopup = document.querySelector('#popup-close');
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

btnShare.addEventListener('click', showSharePopup);
btnClosePopup.addEventListener('click', hideSharePopup);
window.addEventListener('keydown', function(e) {
  if (e.keyCode === 27) {
    hideSharePopup();
  }
});

function showSharePopup() {
  sharePopup.style.display ='block';

}

function hideSharePopup() {
  sharePopup.style.display ='none';
}
