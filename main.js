new Swiper('.swiper-container', {
   slidesPerView: 4,
   slidesPerGroup: 1,
   loop: true,
   navigation: {
		nextEl: '.arrow-gallary__left',
		prevEl: '.arrow-gallary__right'
	},
   pagination: {
		el: '.swiper-pagination',
   },
   breakpoints: {
      100: {
         slidesPerView: 1,
      },
      320: {
         slidesPerView: 1,
      },
      800: {
         slidesPerView: 2,
      },
      1000: {
         slidesPerView: 4,
      },
   },
});

new Swiper('.testi__body')