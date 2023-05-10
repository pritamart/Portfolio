const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 0);
});
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};
const sr = ScrollReveal ({
    distance: '45px',
    duration: 2700,
    reset: true
})
const ssr = ScrollReveal ({
    distance: '45px',
    duration: 1500,
    reset: true
})

sr.reveal('.home-text', {delay:350, origin: 'left'})
sr.reveal('.home-img', {delay:350, origin: 'right'})
sr.reveal('.about-text', {delay:350, origin: 'left'})
sr.reveal('.about-img', {delay:350, origin: 'right'})
sr.reveal('#skill-section', {delay:50, origin: 'left'})


sr.reveal('.contact-me,.contacUS', {delay:200, origin: 'bottom'})
sr.reveal('.col:nth-child(1)', {delay:80, origin: 'left'})
sr.reveal('.col:nth-child(2)', {delay:80, origin: 'right'})
sr.reveal('.col:nth-child(3)', {delay:160, origin: 'left'})
sr.reveal('.col:nth-child(4)', {delay:160, origin: 'right'})
sr.reveal('.col:nth-child(5)', {delay:240, origin: 'left'})
sr.reveal('.col:nth-child(6)', {delay:240, origin: 'right'})





const typed = new Typed('.multiple-text', {
    strings: ['Webdevelopder .', 'Gamer .', 'Watercolor artist .'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// skils js 
var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]);
    }
  };
  window.onload = function(){
    var max = -219.99078369140625;
    forEach(document.querySelectorAll('.progress'), function (index, value) {
    percent = value.getAttribute('data-progress');
      value.querySelector('.fill').setAttribute('style', 'stroke-dashoffset: ' + ((100 - percent) / 100) * max);
      value.querySelector('.value').innerHTML = percent + '%';
    });
  }