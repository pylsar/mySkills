//горизонтальный скролл
$( document ).ready(function() {    
    var controller = new ScrollMagic.Controller();
  
    var horizontalSlide = new TimelineMax()
    // задаем анимацию для скорлла горизонтального
    .to(".skill", 1,   {x: "-100%"})	
    .to(".skill", 1,   {x: "-200%"})
    .to(".skill", 1,   {x: "-300%"})
  
    new ScrollMagic.Scene({
      triggerElement: ".skills",
      triggerHook: "onLeave",
      duration: "400%"
    })
      .setPin(".skills")
      .setTween(horizontalSlide)
    //   .addIndicators() 
      .addTo(controller);


    // анимация стрелок в разделе skills по скролу
    let skillSceneList = new ScrollMagic.Scene({
      triggerElement: '.skill__arrow',
    })
      .setClassToggle('.skill__arrow', 'skill__arrow--in')
      // .addIndicators()
      .addTo(controller);

      
    // анимация картинки в разделе skills по скролу
    let skillSceneImg = new ScrollMagic.Scene({
      triggerElement: '.skill__img',
    })
      .setClassToggle('.skill__img', 'skill__img--in')
      // .addIndicators()
      .addTo(controller);  

  });