


  function incrementValue() {
    var value = parseInt(document.getElementById('quantity').value, 10);
    value = isNaN(value) ? 1 : value;
    value++;
    document.getElementById('quantity').value = value;
  }

  function decrementValue() {
    var value = parseInt(document.getElementById('quantity').value, 10);
    value = isNaN(value) ? 1 : value;
    value = value <= 1 ? 1 : value - 1;
    document.getElementById('quantity').value = value;
  }

  function validateInput() {
    var value = parseInt(document.getElementById('quantity').value, 10);
    if (isNaN(value) || value < 1) {
      document.getElementById('quantity').value = 1;
    }
  }


  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    direction: "vertical", // Thumbnail sliderın dikey olarak hizalanması
  });
  
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  

  $(document).ready(function(){
    $('.card-number').inputmask('9999 9999 9999 9999'); // Kredi kartı formatı
});