import '../scss/style.scss';

const h2 = document.querySelector('h2');

const btn = document.createElement('button');
btn.innerHTML = 'Click';
document.body.appendChild(btn);

btn.addEventListener('click', () => {
  h2.innerHTML = 'Hello Webpack!';
  h2.classList.add('red');
});
