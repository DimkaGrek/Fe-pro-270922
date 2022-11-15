window.onload = () => {
    let modal = document.querySelector('#myModal');
    let btn = document.querySelector('#myBtn');
    let btnClose = document.querySelector('.close');

    btn.onclick = function() {
        modal.style.display = 'block';
    }
    btnClose.onclick = function() {
        modal.style.display = 'none';
    }
    window.onclick = function(e) {
        if(e.target == modal) {
            modal.style.display = 'none';
        }
    }
}