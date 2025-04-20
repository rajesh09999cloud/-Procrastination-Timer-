let minutes = 25;
let seconds = 0;
let timerInterval;
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const messageBox = document.getElementById('message');
const topSand = document.getElementById('top-sand');
const bottomSand = document.getElementById('bottom-sand');

const quotes = [
  "“You don’t have to be great to start, but you have to start to be great.”",
  "“Success is the sum of small efforts, repeated day in and day out.”",
  "“The secret of getting ahead is getting started.”",
  "“Push yourself, because no one else is going to do it for you.”",
  "“Your future is created by what you do today, not tomorrow.”"
];

const memes = [
  "https://i.imgur.com/YOwVt2L.jpg",
  "https://i.imgur.com/AItCxSs.jpg",
  "https://i.imgur.com/yzKj0wR.jpg",
  "https://i.imgur.com/EW4UdFD.jpg",
  "https://i.imgur.com/QsFJr4B.jpg"
];

function updateTimerDisplay() {
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const total = 25 * 60;
  const elapsed = total - (minutes * 60 + seconds);
  const percentage = (elapsed / total) * 100;

  topSand.style.height = `${100 - percentage}%`;
  bottomSand.style.height = `${percentage}%`;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;

  timerInterval = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timerInterval);
        isRunning = false;
        showMotivation();
        return;
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }
    updateTimerDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  minutes = 25;
  seconds = 0;
  updateTimerDisplay();
  messageBox.innerHTML = '';
}

function showMotivation() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const randomMeme = memes[Math.floor(Math.random() * memes.length)];
  messageBox.innerHTML = `
    <p><strong>Motivation:</strong> ${randomQuote}</p>
    <img src="${randomMeme}" alt="meme" style="width:100%;margin-top:10px;border-radius:10px;" />
  `;
}

updateTimerDisplay();
