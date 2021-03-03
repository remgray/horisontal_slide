let elements = document.querySelectorAll('.menu__item');

window.addEventListener('scroll', function() {
  elements.forEach((elem, index)=> {
    if (elem.getBoundingClientRect().y > 210 && elem.getBoundingClientRect().y < 380) {
      elem.classList.add('active')
      if (elem.nextElementSibling !== null){
        elem.nextElementSibling.classList.add('rel')
      }
      if (elem.previousElementSibling !== null) {
        elem.previousElementSibling.classList.add('rel')
      }
    } else {
      elem.classList.remove('active');
      if (elem.nextElementSibling !== null) {
        elem.nextElementSibling.classList.remove('rel')
      }
      if (elem.previousElementSibling === null) {
        elem.classList.remove('rel')
      }
    }
  });
})