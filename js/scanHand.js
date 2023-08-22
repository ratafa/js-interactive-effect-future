const scan = document.querySelector('.scan');
const hand2 = document.querySelector('.hand2');
const lines = document.querySelector('.lines');
const handScanText = document.querySelector('.handScanText');

let yPoint = 0;
let rafScan;
const render = () => {
  yPoint += 0.5;

  hand2.style.height = `${yPoint}%`;
  lines.style.top = `${yPoint}%`;

  if(yPoint === 80) {
    return cancelAnimationFrame();
  }
  rafScan = requestAnimationFrame(render)
}

export const handleScanHand = () => {
  scan.style.display = 'block';
  requestAnimationFrame(render)
  setTimeout(() => {
    handScanText.innerText = 'Success!'
    handScanText.style.animation = 'none'
  }, 3300)
}
