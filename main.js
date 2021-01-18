const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('cleicker');
    title.classList.toggle('clamp');
});