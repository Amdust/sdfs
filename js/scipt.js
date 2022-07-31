// const anchors = document.querySelectorAll('a[href^="#"]')

// for(let anchor of anchors){
//   anchor.addEventListener("click", (event)=> {
//     event.preventDefault();
//     const blockID = anchor.getAttribute('href')  
//     document.querySelector('' + blockID).scrollIntoView({
//       behavior: "smooth",
//       block: "start"
//     })
//   })}



  $( function () {
  $( ".stars__button, .hour__button" ).draggable();});


  $(function () {
    $(".stars").rateYo({
      rating: 4.5,
      
    });

  });


  $(".feedback__slider").slick({
    arrows:false,
    slidesToShow:2,
    infinity:false,
    appendArrows: (".container__arrows"),
    waitForAnimate:false,
    dots: true,
    appendDots:$('.feedback__dots'),
  });

  $('.feedback__slider-prev').on('click', (e)=> {
    e.preventDefault()
      $('.feedback__slider').slick('slickPrev')
    });

  $('.feedback__slider-next').on('click', (e)=> {
    e.preventDefault()
      $('.feedback__slider').slick('slickNext')
  });

  // $('.faq__accordeon-link').on('click', function(e) {
  //     e.preventDefault()
  //     $(this).toggleClass('faq__accordeon-link--active')
  //     $(this).children('.faq__accordeon-text').slideToggle()
  //   })


  $('.program__acc-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('program__acc-link--active')) {
            $(this).removeClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideUp()
        }
        else {
            $('.program__acc-link').removeClass('program__acc-link--active')
            $('.program__acc-text').slideUp()
            $(this).addClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideDown()
        }
    });

    $(document).ready(function(){
      $("body").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
    
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
    
        //узнаем высоту от начала страницы до блока на который ссылается якорь
          top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1200);
      });
    })

    setInterval(()=> {
      if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false){
      $('.burger').addClass('burger--follow')} else {
        $('.burger').removeClass('burger--follow')
      }
    }, 0); 


    $('.burger, .overlay, .header__top a').on('click', function(e) {
      e.preventDefault()
      $('.header__top').toggleClass('header__top--open')
      $('.overlay').toggleClass('overlay--show')
      $('.burger').toggleClass('active')
    })
  