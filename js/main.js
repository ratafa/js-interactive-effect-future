import {handleTextDisplay} from "./textAnimation.js";
import {handleScanHand} from "./scanHand.js";

const p = document.querySelector('.displayText');
const scan = document.querySelector('.scan');
const dummyBox = document.querySelector('.dummyBox');
const startButton = document.querySelector('.startButton');
const buttonDescription = document.querySelector('.buttonDescription');

startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    handleScanHand();
    setTimeout(() => {
      scan.style.display = 'none';
      dummyBox.style.visibility = 'visible';
      handleTextDisplay(p);
    }, 5300)
});
