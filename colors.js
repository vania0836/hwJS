let square1 = document.getElementById("square1");
let square2 = document.getElementById("square2");
let square3 = document.getElementById("square3");
let color = document.getElementById("color");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

if (localStorage.getItem("square1")) {
    square1.style.background = localStorage.getItem("square1");
}

if (localStorage.getItem("square2")) {
    square2.style.background = localStorage.getItem("square2");
}

if (localStorage.getItem("square3")) {
    square3.style.background = localStorage.getItem("square3");
}

btn1.onclick = function () {
    square1.style.background = color.value;
    localStorage.setItem("square1", color.value);
};

btn2.onclick = function () {
    square2.style.background = color.value;
    localStorage.setItem("square2", color.value);
};

btn3.onclick = function () {
    square3.style.background = color.value;
    localStorage.setItem("square3", color.value);
};
