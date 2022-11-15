window.onload = () => {
    let offset = 0;
    const sliderLine = document.querySelector('.slider-line');

    function moveLeft() {
        offset += 200;
        if (offset > 600) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    }

    document.querySelector('.slider-next').addEventListener('click', function() {
       moveLeft();
    });
    document.querySelector('.slider-prev').addEventListener('click', function() {
        offset -= 200;
        if (offset < 0) {
            offset = 600;
        }
        sliderLine.style.left = -offset + 'px';
    });
    
    setInterval(moveLeft, 2000);

}