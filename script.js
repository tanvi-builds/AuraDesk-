// TIMER

let time = 1500;
let timer;

function updateTimer() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("timer").innerText =
    `${minutes}:${seconds}`;
}

function startTimer() {
  timer = setInterval(() => {
    if (time > 0) {
      time--;
      updateTimer();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  time = 1500;
  updateTimer();
}

updateTimer();


// TASKS

function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;

  if (taskText === "") return;

  let li = document.createElement("li");

  li.innerHTML = `
    ${taskText}
    <button onclick="this.parentElement.remove()">X</button>
  `;

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
