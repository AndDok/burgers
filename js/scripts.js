$(document).ready(function () {

  //page scroll
  $('#fullpage').fullpage({
    menu: '#menu',
  });

  //slider
  $('.slider__list').slick();

  //mobile menu
  $('.mobile__menu-btn').on('click', function (e) {
    e.preventDefault();
    $('.nav__mobile').addClass('nav__mobile_active');
  });

  $('.nav__mobile-close').on('click', function (e) {
    e.preventDefault();
    $('.nav__mobile').removeClass('nav__mobile_active');
  });

  //team accordion
  var teamName = document.querySelectorAll(".team__btn");
  var teamItem = document.querySelectorAll(".team__elem");
  for (let i = 0; i < teamName.length; i++) {
      teamName[i].addEventListener("click", function(e) {

          e.preventDefault();

          for (let j = 0; j < teamItem.length; j++) {
              if (j !== i) {
                  teamItem[j].classList.remove("team__elem_active");
              };
          };

          this.closest('.team__elem').classList.toggle("team__elem_active");
      });
  }; 
   
// menu accordion
var accordionLink = document.querySelectorAll(".accordion-menu__link");
var accordionElem = document.querySelectorAll(".accordion-menu__elem");
var accordionList = document.querySelector(".accordion-menu__list");
var accordionListClose = document.querySelectorAll(".accordion-menu__drop-close");


for (let i = 0; i < accordionLink.length; i++) {
    accordionLink[i].addEventListener("click", function(e) {

        e.preventDefault();

        for (let j = 0; j < accordionElem.length; j++) {
            if (j !== i) {
                accordionElem[j].classList.remove("accordion-menu__elem_active");

            };
        };

        this.closest('.accordion-menu__elem').classList.toggle("accordion-menu__elem_active");
        this.closest('.accordion-menu__list').classList.toggle("accordion-menu__list_active");
    });
}; 

for (let i = 0; i < accordionListClose.length; i++) {
    accordionListClose[i].addEventListener("click", function(e) {
        e.preventDefault();

        for (let j = 0; j < accordionElem.length; j++) {
            accordionElem[j].classList.remove("accordion-menu__elem_active");
        };
        
        this.closest('.accordion-menu__list').classList.remove("accordion-menu__list_active");
    });
};

//popup
$('.review__button-wrap').on('click', function (e) {
  e.preventDefault();
  $('.popup').addClass('popup_active');
});

$('.popup-close').on('click', function (e) {
  e.preventDefault();
  $('.popup').removeClass('popup_active');
});

  //yandex map
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [59.939095, 30.315868],
        zoom: 12
      }, {
        searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark1 = new ymaps.Placemark([59.982111, 30.310631], {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: './img/icons/map-marker.svg',
        // Размеры метки.
        iconImageSize: [56, 57],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      }),

      myPlacemark2 = new ymaps.Placemark([59.889766, 30.321960], {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: './img/icons/map-marker.svg',
        // Размеры метки.
        iconImageSize: [56, 57],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      }),

      myPlacemark3 = new ymaps.Placemark([59.950439, 30.382728], {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: './img/icons/map-marker.svg',
        // Размеры метки.
        iconImageSize: [56, 57],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      }),

      myPlacemark4 = new ymaps.Placemark([59.909945, 30.498428], {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: './img/icons/map-marker.svg',
        // Размеры метки.
        iconImageSize: [56, 57],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      });


      myMap.geoObjects
      .add(myPlacemark1)
      .add(myPlacemark2)
      .add(myPlacemark3)
      .add(myPlacemark4)
      myMap.behaviors.disable('scrollZoom');

  });

});