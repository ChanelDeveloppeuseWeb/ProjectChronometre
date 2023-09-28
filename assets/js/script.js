
let chrono = document.getElementById("chrono");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let secondes = 0;
let minutes = 0;
let heures = 0;
let time
let secTime = '0'
let minTime = '0'
let heuTime = '0'

// function chronometre
function chronometre() {
  if (secondes < 60) {
    secondes++;
  }
  if (secondes >= 60) {
    secondes = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    heures++;
  }
secTime = show(secondes)
minTime = show(minutes)
heuTime = show(heures)
  chrono.textContent = heures + ":" + minutes + ":" + secondes;

// afficher un 0 quand c est compris entre 0 et 9

  function show(setime) {
    if (setime >= 0 && setime < 10) {
      return '0'+setime
    }else{
      return setime
    }
  }
}
// ecouter les evenements sur chaque boutons
start.addEventListener("click", startChronometre);
stop.addEventListener("click", stopChronometre);
reset.addEventListener("click", resetChronometre);

// function pour demarrer le chronometre

function startChronometre() {
  time = setInterval(chronometre, 1000);
}
// function pour arreter Chronometre
function stopChronometre() {
  clearInterval(time);
}
// function pour initialiser le chronometre
function resetChronometre() {
  secondes = 0;
  minutes = 0;
  heures = 0;
  chrono.textContent = "00:00:00"
}
// chronometre();
