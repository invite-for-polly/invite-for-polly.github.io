let hoverCount = 0;
const maxHovers = 2;
const noButton = document.getElementById('no-button');
const phrases = [
  "Нет(",
  "Ты уверена?",
  "Последний шанс передумать))",
];

function moveNoButton() {
  hoverCount++;
  
  if (hoverCount <= maxHovers) {
    noButton.textContent = phrases[hoverCount] || "Нет(";
    
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    const x = Math.random() * Math.max(0, maxX);
    const y = Math.random() * Math.max(0, maxY);
    
    noButton.style.position = 'fixed';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
  } else {
    location.href = 'have-good-day.html';
  }
}

noButton.addEventListener('mouseenter', moveNoButton);

noButton.addEventListener('touchstart', function(e) {
  e.preventDefault();
  moveNoButton();
});

noButton.addEventListener('touchend', function(e) {
  e.preventDefault();
});

document.getElementById('yes-button1')
  .addEventListener('click', () => location = 'dinner.html');
document.getElementById('yes-button1')
  .addEventListener('touchstart', function(e) {
    e.preventDefault();
    location = 'dinner.html';
  });
