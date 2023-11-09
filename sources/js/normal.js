// 프린트(print) 이벤트
function printPage() {
  window.print();
}

//3자리마다 , 찍기
function numberCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Document Ready Function
$(document).ready(function(){
  // Top Button
	$(function () { $(window).scroll(function () { 
		if ($(this).scrollTop() > 100) { 
			$('#go-top').fadeIn(); 
		} else { 
			$('#go-top').fadeOut(); 
		} 
	}); 
	
	$('#go-top a').click(function () { 
		$('body,html').animate({ scrollTop: 0 }, 400); return false; }); 
	});

  // (메인) 조성현황 버튼 클릭시 지도 이미지 변환
  const cityMap = $(".build-map-viewer img");
  const cityMap_mo =  $(".mo-main_vs-map_dim");
  const buildCategoryBtn = $(".build-btn");
  const cityMap_mo_close = $(".mo-main_vs-map-close");

  buildCategoryBtn.on('click', function(){
    const screenWidth_in = screen.width;
    let _mapImage = $(this).data('map-image');

    $(this).addClass('active').closest('li').siblings().find('.build-btn').removeClass('active');

    cityMap.attr('src', _mapImage);

    if(screenWidth_in < 1023) {
      cityMap_mo.fadeIn(200);
      cityMap_mo.find(".mo-main_vs-map").css({"margin-top":"0"});
    } else {
      cityMap_mo.hide();
    }
  });

  cityMap_mo_close.on('click', function(){
    cityMap_mo.fadeOut(200);
    cityMap_mo.find(".mo-main_vs-map").css({"margin-top":"50px"});
  });

  // (메인) 충남혁신도시 인구현황
  let mainPersonCountSelector = $(".city_person-count .number");
  let mainPersonCount = parseInt(mainPersonCountSelector.data('count'));
  
  $({ val : 0 }).animate({ val : mainPersonCount }, {
    duration: 1000,
    step: function() {
      let num = numberCommas(Math.floor(this.val));
      $(".city_person-count .number").text(num);
    },
    complete: function() {
      let num = numberCommas(Math.floor(this.val));
      $(".city_person-count .number").text(num);
    }
  });

  // (메인) 충남혁신도시 개발특성화 계획 슬라이더
  var swiper = new Swiper(".main_plan-slider .swiper-container", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    spped: 800,
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    breakpoints: {
      1281: {
        slidesPerView: 5
      },
      768: {
        slidesPerView: 3
      }
    }
  });

  // (메인) 공지사항, 개발관련자료 아코디언 및 링크이동
  $(".main_board_ct").on('click', '.subj', function(){
    let _post = $(this).closest('.main_board_post');

    _post.addClass('active').siblings().removeClass('active');
  });

  $(".main_board_ct").on('click', '.main_board_post.active', function(){
    let _link = $(this).find('.subj').data('link');

    location.href = _link;
  });
});