let body = document.body;
let toggle = document.getElementById("toggle");

toggle.onclick = () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");

  toggle.innerText = body.classList.contains("dark") ? "🌙" : "☀️";
};

/* TIMER */
let time = 1500;
let timer;

function update(){
  let m = Math.floor(time/60);
  let s = time%60;
  if(s<10) s="0"+s;
  document.getElementById("timer").innerText = `${m}:${s}`;
}

function start(){
  timer = setInterval(()=>{
    if(time>0){
      time--;
      update();
    }
  },1000);
}

function pause(){
  clearInterval(timer);
}

function reset(){
  clearInterval(timer);
  time = 1500;
  update();
}

function setTimer(){
  let val = document.getElementById("minInput").value;
  if(val>0){
    time = val*60;
    update();
  }
}

/* TASKS */
function addTask(){
  let input = document.getElementById("taskInput");
  if(input.value==="") return;

  let li = document.createElement("li");
  li.innerHTML = input.value + " ❌";
  li.onclick = ()=>li.remove();

  document.getElementById("list").appendChild(li);
  input.value="";
}

update();
    
 
