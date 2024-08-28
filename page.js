/*============= SHOW MENU =========*/


/*============= menu show =========*/
// validate if constant existes


/*============= HIDE show  =========*/
// validate if constant existes


/*============= IMAGE GALLERY =========*/

function imgGallery() {
  const maining = document.querySelector('.details__img'),
  smallImg = document.querySelectorAll('.details__small-img');

  smallImg.forEach((img) => {
    img.addEventListener('click', function(){
      maining.src = this.src;
    });
  });
}

imgGallery()


/*================ SWIPER CATEGORIES ============= */
var swiper = new Swiper('.Categories__container', {
    spaceBetween: 24,
    loop: true, 
    navigation: {
        naxtEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
         640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
       1400: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      },

});


/*================ SWIPER PRODUCTS ==============*/
var swiperProducts = new Swiper('.new__container', {
  spaceBetween: 24,
  loop: true, 
  navigation: {
      naxtEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  breakpoints: {
       640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
     1400: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },

});

/*================ PRODUCTS TABS ==============*/
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[Content]');
//console.log(tabs, tabContents)


tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)
    // console.log(target)
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active-tab');
    })
    target.classList.add('active-tab');

    tabs.forEach((tab) => {
      tab.classList.remove('active-tab')
    })

    tab.classList.add('active-tab');
  });
  
});