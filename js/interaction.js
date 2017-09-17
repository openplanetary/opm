const body = document.querySelector('#landing-page');
const bodyText = document.querySelector('#body-text');
const btnShowHide = document.querySelector('#show-hide-btn');
var textVisible = true;

btnShowHide.addEventListener('click', function() {
    if (textVisible) {
      console.log('Hiding text...');
      body.style.overflowY = 'hidden';
      bodyText.style.transform = 'translateY(200%)';
      btnShowHide.innerHTML = '<i class="fa fa-chevron-circle-up" aria-hidden="true" title="Show"></i>';
      textVisible = false;
    } else {
      console.log('Showing text...');
      body.style.overflowY = 'auto';
      bodyText.style.transform = 'translateY(0%)';
      btnShowHide.innerHTML = '<i class="fa fa-chevron-circle-down" aria-hidden="true" title="Hide"></i>';
      textVisible = true;
    }
    return false;
  });