const scan = document.querySelector('.scan');
const handScanText = document.querySelector('.handScanText');

export const handleScanHand = () => {
  scan.style.display = 'block';

  setTimeout(() => {
    handScanText.innerText = 'Success!'
    handScanText.style.animation = 'none'
  }, 3700)
}
