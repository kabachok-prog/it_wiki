const squares = document.querySelector('.squares');
const text1 = document.querySelector('.hidden-text1');
const text2 = document.querySelector('.hidden-text2');


const observer = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
      // если элемент появился
      if (entry.isIntersecting) {
        // добавить ему CSS-класс
        squares.classList.add('squares__animation');
        text1.classList.add('hidden-text1__animation');
        text2.classList.add('hidden-text2__animation');

      }
    });
  });
  observer.observe(document.querySelector('.squares__text1'));
