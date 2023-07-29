const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  lazyLoading:true,
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 300,
    modifier: 2,
    slideShadows:true,
  },
  loop: true,
})
