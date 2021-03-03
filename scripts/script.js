let elements = document.querySelectorAll('.menu__item');

window.addEventListener('scroll', function() {
  elements.forEach((elem, index)=> {
    if (elem.getBoundingClientRect().y > 200 && elem.getBoundingClientRect().y < 400) {
      elem.classList.add('active')
      elem.classList.remove('rel')
      if (elem.nextElementSibling !== null){
        elem.nextElementSibling.classList.add('rel')
      }
      if (elem.previousElementSibling !== null && !elem.previousElementSibling.classList.contains('rel')) {
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