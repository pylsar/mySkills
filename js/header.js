// АНИМАЦИЯ ХЭДЕРА
let tlOverlay = new TimelineMax();
tlOverlay
.fromTo('.header__overlay-top', 4, {x: 0}, {x: -3000})
.fromTo('.header__overlay-middle', 4, {x: 0}, {x: -3000}, '-=3.5')
.fromTo('.header__overlay-bottom', 4, {x: 0}, {x: -3000}, '-=3.5')


let tlTitle = new TimelineMax();
tlTitle
.staggerFromTo('.header__profession', 2, {y: -400, opacity: 0}, {y: 0, opacity: 1}, 0.05)
.staggerFromTo('.header__title', 1, {opacity: 0}, {opacity: 1}, 0.05)
.staggerFromTo('.header__quote', 1, {opacity: 0}, {opacity: 1}, 0.05)


