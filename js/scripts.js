$(document).ready(function () {

  //slider
  $('.slider__list').slick();

  // mobile menu
  $('.mobile__menu-btn').on('click', function (e) {
    e.preventDefault();
    $('.nav__mobile').addClass('nav__mobile_active');
  });

  $('.nav__mobile-close').on('click', function (e) {
    e.preventDefault();
    $('.nav__mobile').removeClass('nav__mobile_active');
  });

  //team accordion
  
  $('.team-acco__item').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('team-acco__trigger');
  });

  // yandex map
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