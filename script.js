/* ── Task 1: Drag & Drop ── */
const list       = document.getElementById('sortable-list');
const rightCount = document.getElementById('right-count');
const winMsg     = document.getElementById('win-msg');
const CORRECT    = ['1','2','3'];
let dragged = null;

list.addEventListener('dragstart', e => {
    dragged = e.target;
    setTimeout(() => dragged.classList.add('dragging'), 0);
});
list.addEventListener('dragend', () => {
    dragged.classList.remove('dragging');
    dragged = null;
    check();
});
list.addEventListener('dragover', e => {
    e.preventDefault();
    const target = e.target.closest('li');
    if (!target || target === dragged) return;
    const mid = target.getBoundingClientRect().top + target.offsetHeight / 2;
    list.insertBefore(dragged, e.clientY < mid ? target : target.nextSibling);
});

function check() {
    const items = [...list.querySelectorAll('li')];
    let n = 0;
    items.forEach((li, i) => {
        const ok = li.dataset.value === CORRECT[i];
        li.classList.toggle('correct', ok);
        if (ok) n++;
    });
    rightCount.textContent = n;
    winMsg.classList.toggle('hidden', n !== CORRECT.length);
}

check();

/* ── Task 2: Palindrome ── */
const input  = document.getElementById('palindrome-input');
const btn    = document.getElementById('check-btn');
const result = document.getElementById('palindrome-result');

btn.addEventListener('click', () => {
    const clean = input.value.toLowerCase().replace(/[^a-zа-яёіїєґ0-9]/gi, '');
    if (!clean) { result.textContent = ''; result.classList.add('hidden'); return; }
    const yes = clean === clean.split('').reverse().join('');
    result.textContent = yes ? 'yes' : 'no';
    result.classList.remove('hidden');
});

input.addEventListener('keydown', e => { if (e.key === 'Enter') btn.click(); });
