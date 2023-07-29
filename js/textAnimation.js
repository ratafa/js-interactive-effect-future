const textDescription = document.querySelector('.displayTextDescription');
const displayWrapper = document.querySelector('.displayWrapper');
const dummyBox = document.querySelector('.dummyBox');

const randomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
export const handleTextDisplay = (item) => {
    let isTextAnimationFinished = false;
    displayWrapper.style.display = 'block'
    const textArray = item.innerText.split('');

    const special = ['!','@','#','$','%','^', '&', '*', '?', '₩', '+', '='];
    const exception = ['','\n', '.', ','];
    const numberArray = [];

    textArray.forEach(_ => {
      const randomNumber = randomNumberBetween(20, 35);
      numberArray.push(randomNumber);
    })

    let completeCount;
    let newMessage;

    const timer = setInterval(() => {
      dummyBox.style.visibility = 'hidden';
      completeCount = 0;
      newMessage = '';
      numberArray.forEach((num, i) => {
        if (exception.includes(textArray[i]) || numberArray[i] === 0) {
          completeCount += 1;
          newMessage += textArray[i];
        } else {
          numberArray[i] = --num;
          newMessage += special[numberArray[i] % special.length];
        }
      })

      item.innerText = newMessage;
      if (completeCount === numberArray.length) {
        isTextAnimationFinished = true;
        clearInterval(timer);
      }

      if (isTextAnimationFinished) {
        // textDescription.style.display = 'block';
        setTimeout(() => {
          window.scrollTo({top:1000, behavior: "smooth"})
        }, 1500)
      }
    }, 100)
}
