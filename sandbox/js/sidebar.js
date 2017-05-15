const panel = document.querySelector('#sidebar');
const btnMenu = document.querySelector('#open-menu');
const btnShare = document.querySelector('#share-data');
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

btnShare.addEventListener('click', function() {
	popup.style.display ='block';
});
btnClosePopup.addEventListener('click', function() {
	popup.style.display ='none';
});
