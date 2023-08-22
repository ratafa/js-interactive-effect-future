import {handleTextDisplay} from "./textAnimation.js";
import {handleScanHand} from "./scanHand.js";

const p = document.querySelector('.displayText');
const scan = document.querySelector('.scan');
const mobileWarning = document.querySelector('.mobileWarning');
const dummyBox = document.querySelector('.dummyBox');
const startButton = document.querySelector('.startButton');

const isMobile = () => {
  const user = navigator.userAgent;
  if ( user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1 ) {
    startButton.style.display = 'none';
    mobileWarning.style.display = 'block';
  }
}

window.onload = () => {
  isMobile();
}


startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    handleScanHand();
    setTimeout(() => {
      scan.style.display = 'none';
      dummyBox.style.visibility = 'visible';
      handleTextDisplay(p);
    }, 5300)
});
