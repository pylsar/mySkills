// АНИМАЦИЯ ХЭДЕРА
let tl = new TimelineMax();
tl
.fromTo('.header__overlay-top', 4, {x: 0}, {x: -3000})
.fromTo('.header__overlay-middle', 4, {x: 0}, {x: -3000}, '-=3.5')
.fromTo('.header__overlay-bottom', 4, {x: 0}, {x: -3000}, '-=3.5')
// .staggerFromTo('.header__profession', 0.5, {opacity: 0}, {opacity: 1}, 0.05)
.staggerFromTo('.header__title', 0.5, {opacity: 0}, {opacity: 1}, 0.05)
.staggerFromTo('.header__quote', 0.5, {opacity: 0}, {opacity: 1}, 0.05)

