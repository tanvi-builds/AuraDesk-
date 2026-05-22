// THEME TOGGLE
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  if(document.body.classList.contains("dark")){
    toggleBtn.innerText = "☀️";
  } else {
    toggleBtn.innerText = "🌙";
  }
});

// DEFAULT THEME
document.body.classList.add("dark");


// TIMER LOGIC
let time = 1500;
let timer;

function updateTimer(){
  let min = Math.floor(time / 60);
  let sec = time % 60;
  sec = sec < 10 ? "0"+sec : sec;
  document.getElementById("timer").innerText = `${min}:${sec}`;
}

function startTimer(){
  timer = setInterval(() => {
    if(time > 0){
      time--;
      updateTimer();
    }
  },1000);
}

function pauseTimer(){
  clearInterval(timer);
}

function resetTimer(){
  clearInterval(timer);
  time = 1500;
  updateTimer();
}

// CUSTOM TIMER
function setTimer(){
  let input = document.getElementById("minutesInput").value;
  if(input === "" || input <= 0) return;

  time = input * 60;
  updateTimer();
}


// TASKS
function addTask(){
  let input = document.getElementById("taskInput");
  if(input.value === "") return;

  let li = document.createElement("li");
  li.innerHTML = `${input.value} <button onclick="this.parentElement.remove()">X</button>`;

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}

updateTimer();
