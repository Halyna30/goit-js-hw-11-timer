const refs = {
  timerRef: document.querySelector("#timer-1"),
  days: document.querySelector("[data-value='days']"),
  hours: document.querySelector("[data-value='hours']"),
  mins: document.querySelector("[data-value='mins']"),
  secs: document.querySelector("[data-value='secs']"),
};

const timer = {
  timerActive: false,
  intervalId: null,
  start() {
    const targetDate = new Date("Jan 17, 2021");
    this.timerActive = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - targetDate;

      updateClockFace(-deltaTime);
    }, 1000);
  },
  stop() {
    clearInterval(intervalId);
  },
};

function updateClockFace(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  console.log(`${days}:${hours}:${mins}:${secs}`);

  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, "0");
}

timer.start();
