let tpsRestant = 0;
let debut;
let pause = false;

function startTimer() {
    //check for null input hours, minutes, seconds
    if (document.getElementById("txtHeures").value == "") {
        document.getElementById("txtHeures").value = "0";
    }

    if (document.getElementById("txtMinutes").value == "") {
        document.getElementById("txtMinutes").value = "0";
    }

    if (document.getElementById("txtSecondes").value == "") {
        document.getElementById("txtSecondes").value = "0";
    }

    //get input hours, minutes, seconds
    var heures = parseInt(document.getElementById("txtHeures").value);
    var minutes = parseInt(document.getElementById("txtMinutes").value);
    var secondes = parseInt(document.getElementById("txtSecondes").value);

    //calculate time left in seconds
    tpsRestant = (heures * 3600) + (minutes * 60) + secondes;

    //start count down timer
    debut = setInterval("countDown()", 1000);
    document.getElementById('go').style.display = 'none';
    document.getElementById('stop').style.display = 'inline';
    document.getElementById('pause').style.display = 'inline';
}

function countDown() {
    var heuresRestantes = 0;
    var minutesRestantes = 0;
    var secondesRestantes = 0;
    var reste = 0;

    tpsRestant = tpsRestant - 1;

    if (tpsRestant >= 0) {
        heuresRestantes = Math.floor(tpsRestant / 3600);
        reste = tpsRestant % 3600;

        minutesRestantes = Math.floor(reste / 60);
        reste = reste % 60;

        secondesRestantes = reste;
        document.getElementById('heures').innerHTML = heuresRestantes;
        document.getElementById('minutes').innerHTML = minutesRestantes;
        document.getElementById('secondes').innerHTML = secondesRestantes;
    } else {
        clearInterval(debut);
        document.getElementById('go').style.display = 'inline';
        document.getElementById('stop').style.display = 'none';
        document.getElementById('pause').style.display = 'none';
    }
}

function PauseChrono()
{
    if (!pause)
    {
        pause = true;
        clearInterval(debut);
        document.getElementById('stop').style.display = 'none';
        document.getElementById('pause').value = 'Pause';
    }
    else
    {
        pause = false;
        startTimer();
        document.getElementById('pause').value = 'Pause';
    }
}