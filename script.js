// Завдання 1
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var bottom = document.getElementById('bottom');

b1.addEventListener('mouseover', function () {
    bottom.style.background = '#4cdd1f';
});
b2.addEventListener('mouseover', function () {
    bottom.style.background = '#f5d020';
});
b3.addEventListener('mouseover', function () {
    bottom.style.background = '#e8522a';
});

b1.addEventListener('mouseout', function () { bottom.style.background = 'gray'; });
b2.addEventListener('mouseout', function () { bottom.style.background = 'gray'; });
b3.addEventListener('mouseout', function () { bottom.style.background = 'gray'; });


// Завдання 2
var box = document.getElementById('box');

document.addEventListener('mousemove', function (e) {
    box.style.left = e.pageX - box.offsetWidth / 2 + 'px';
    box.style.top  = e.pageY - box.offsetHeight / 2 + 'px';
});
