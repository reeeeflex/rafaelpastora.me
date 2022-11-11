const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav__links');

// sets active class to css allowing for animations
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav__link').forEach(e =>
  e.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  })
);

window.addEventListener('scroll', () => {
  hamburger.classList.remove('active');
  navLinks.classList.remove('active');
});

function updateClock() {
  let now = new Date(), // current date
    months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  (time =
    now.getHours() - 12 + ':' + now.getMinutes() + ':' + now.getSeconds()),
    // a cleaner way than string concatenation
    (date = [now.getDate(), months[now.getMonth()], now.getFullYear()].join(
      ' '
    ));

  // set the content of the element with the ID time to the formatted string
  document.getElementById('time').innerHTML = [date, time].join(' - ');

  // call this function again in 1000ms (every second) recurssion
  setTimeout(updateClock, 1000);
}
updateClock(); // initial call
