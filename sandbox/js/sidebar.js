const panel = document.querySelector('#sidebar');
const btnMenu = document.querySelector('#open-menu');
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
