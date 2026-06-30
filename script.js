let line = document.getElementById("line");

window.onscroll = function () {
    let scrollTop = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let result = scrollTop / height * 100;

    line.style.width = result + "%";
};
