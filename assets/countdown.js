let tpsRestant = 0;
let timer;
let pause = false;

function initTimer() {
    // pour qu'une valeur nulle soit équivalente à zéro
    if (document.getElementById("txtHeures").value == "") {
        document.getElementById("txtHeures").value = "00";
    }

    if (document.getElementById("txtMinutes").value == "") {
        document.getElementById("txtMinutes").value = "00";
    }

    if (document.getElementById("txtSecondes").value == "") {
        document.getElementById("txtSecondes").value = "00";
    }

    // on va chercher les valeurs entrées dans les inputs
    var heures = parseInt(document.getElementById("txtHeures").value);
    var minutes = parseInt(document.getElementById("txtMinutes").value);
    var secondes = parseInt(document.getElementById("txtSecondes").value);

    // on calcule le temps restant en secondes
    tpsRestant = (heures * 3600) + (minutes * 60) + secondes;

    updateDisplay();
}

function startTimer() {
    //on lance le compte à rebours
    timer = setInterval("countDown()", 1000);
    document.getElementById('go').style.display = 'none';
    document.getElementById('stop').style.display = 'inline';
    document.getElementById('pause').style.display = 'inline';
}

function stopTimer() {
    clearInterval(timer);
    document.getElementById('go').style.display = 'inline';
    document.getElementById('stop').style.display = 'none';
    document.getElementById('pause').style.display = 'none';
}

function pauseTimer()
{
    if (!pause)
    {
        pause = true;
        clearInterval(timer);
        document.getElementById('stop').style.display = 'none';
        document.getElementById('pause').value = 'Resume';
    }
    else
    {
        pause = false;
        startTimer();
        document.getElementById('pause').value = 'Pause';
    }
}

function updateDisplay() {
    var heuresRestantes = 0;
    var minutesRestantes = 0;
    var secondesRestantes = 0;
    var reste = 0;

    // on divise le temps restant en hours minutes secondes
    heuresRestantes = Math.floor(tpsRestant / 3600);
    reste = tpsRestant % 3600;

    minutesRestantes = Math.floor(reste / 60);
    reste = reste % 60;

    secondesRestantes = reste;
    document.getElementById('heures').innerHTML = addZero(heuresRestantes);
    document.getElementById('minutes').innerHTML = addZero(minutesRestantes);
    document.getElementById('secondes').innerHTML = addZero(secondesRestantes);
}

function countDown() {
    tpsRestant = tpsRestant - 1;
    if (tpsRestant >= 0) {
        updateDisplay();
    } else {
        stopTimer()
    }
}

function addZero(value) {
    if (value < 10) {
        return "0" + value;
    }
    else {
        return value;
    }
}
