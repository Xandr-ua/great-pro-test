const btnYear = document.querySelector('.rates__header-btn-year');
const btnMonth = document.querySelector('.rates__header-btn-right');
const priceMonth = document.querySelectorAll('.rates__price-month');
const priceYear = document.querySelectorAll('.rates__price-year');

btnMonth.addEventListener('click', () => {
  priceMonth.forEach((month) => {
    month.style.display = 'block';
  });

  btnMonth.classList.add('rates__header-btn-month');
  btnYear.classList.remove('rates__header-btn-year');
  priceYear.forEach((year) => {
    year.style.display = 'none';
  });
});

btnYear.addEventListener('click', () => {
  priceYear.forEach((year) => {
    year.style.display = 'block';
  });

  btnYear.classList.add('rates__header-btn-year');
  btnMonth.classList.remove('rates__header-btn-month');
  priceMonth.forEach((month) => {
    month.style.display = 'none';
  });
});
