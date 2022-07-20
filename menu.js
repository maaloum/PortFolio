const icon = document.querySelector('#icon');
icon.addEventListener('click', () => {
  const container = document.querySelector('.container');
  const nav = document.querySelector('nav');
  const span = document.createElement('span');
  span.innerHTML += '<span>&times;</span>';
  span.classList.add('close');
  nav.appendChild(span);
  if (nav.style.display === 'inline-block') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
    nav.classList.add('nav-style');
    span.addEventListener('click', () => {
      container.removeChild(nav);
    });
  }
});
