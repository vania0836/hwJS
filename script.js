// Завдання 1
let newWindow = null;
 
document.getElementById('btnOpen').onclick = function() {
    newWindow = window.open('https://itstep.org', '_blank', 'width=640,height=480');
};
 
document.getElementById('btnClose').onclick = function() {
    if (newWindow != null) {
        newWindow.close();
        newWindow = null;
    }
};
 
// Завдання 2
let languages = navigator.languages;
let mainLang = navigator.language;
let list = document.getElementById('languageList');
 
for (let i = 0; i < languages.length; i++) {
    let item = document.createElement('li');
    item.textContent = languages[i];
 
    if (languages[i] === mainLang) {
        item.className = 'mainLang';
    }
 
    list.appendChild(item);
}
 
