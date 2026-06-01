// Завдання 1
var text = 'To be, or not to be, that is the question...';
var i = 0;
var el = document.getElementById('hamlet-out');
var author = document.getElementById('hamlet-author');

var interval = setInterval(function () {
    el.innerText += text[i];
    i++;
    if (i >= text.length) {
        clearInterval(interval);
        setTimeout(function () {
            author.innerText = 'William Shakespeare, from «Hamlet»';
        }, 500);
    }
}, 250);


// Завдання 2
function pad(n) {
    return n < 10 ? '0' + n : '' + n;
}

function updateCountdown() {
    var now = new Date();
    var nextYear = new Date(now.getFullYear() + 1, 0, 1);
    var diff = nextYear - now;

    document.getElementById('cd-days').innerText  = pad(Math.floor(diff / 86400000));
    document.getElementById('cd-hours').innerText = pad(Math.floor((diff % 86400000) / 3600000));
    document.getElementById('cd-min').innerText   = pad(Math.floor((diff % 3600000) / 60000));
    document.getElementById('cd-sec').innerText   = pad(Math.floor((diff % 60000) / 1000));
}

updateCountdown();
setInterval(updateCountdown, 1000);
