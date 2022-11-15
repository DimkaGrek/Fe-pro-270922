window.onload = () => {
    let move = document.querySelector('.movediv');
    let btnUp = document.querySelector('.up');
    let btnDown = document.querySelector('.down');
    let btnLeft = document.querySelector('.left');
    let btnRight = document.querySelector('.right');

    const screenWidth=document.documentElement.clientWidth;   
    const screenHeight=document.documentElement.clientHeight;

    let top;
    let left;

    btnUp.onclick = function() {
        top = move.getBoundingClientRect().top;
        if (top > 30) {
            move.style.top = top - 15 + 'px';
        }
    }
    btnDown.onclick = function() {
        top = move.getBoundingClientRect().top;
        if (top < screenHeight - 50) {
            move.style.top = top + 15 + 'px';
        }
    }
    btnLeft.onclick = function() {
        left = move.getBoundingClientRect().left;
        if (left > 0) {
            move.style.left = left - 15 + 'px';
        }
    }
    btnRight.onclick = function() {
        left = move.getBoundingClientRect().left;
        if (left < screenWidth - 50) {
            move.style.left = left + 15 + 'px';
        }
    }
}