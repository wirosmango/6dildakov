const scrollElements = document.querySelectorAll('.scroll-type');

function updateScrollType() {
  scrollElements.forEach(el => {
    const text = el.dataset.text;
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // прогресс от 0 (элемент внизу экрана) до 1 (элемент дошёл до верха/центра)
    let progress = (windowHeight - rect.top) / (windowHeight * 0.6);
    progress = Math.min(Math.max(progress, 0), 1);

    const charsToShow = Math.floor(text.length * progress);
    el.textContent = text.slice(0, charsToShow);
  });
}

window.addEventListener('scroll', updateScrollType);
window.addEventListener('resize', updateScrollType);
updateScrollType(); // на случай, если блок уже виден при загрузке