// 프린트(print) 이벤트
function printPage() {
  window.print();
}

// Document Ready Function
$(document).ready(function(){
  var swiper = new Swiper(".main_plan-slider .swiper-container", {
    slidesPerView: 5,
    spaceBetween: 50,
    centeredSlides: true,
    loop: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });
});