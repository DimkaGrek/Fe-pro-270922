window.onload = () => {
    let container = document.querySelector('.container');
    function centerContainer() {
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        container.style.left = (windowWidth/2 - parseInt(window.getComputedStyle(container).width)/2) + 'px';
        container.style.top = (windowHeight/2 - parseInt(window.getComputedStyle(container).height)/2) + 'px';
    }
    centerContainer();
    window.onresize = function(e) {
        centerContainer();
    }
    
    let btn = document.querySelector('.submit');
    btn.disabled = true;
    let [...formElems] = myForm.elements;
    let form = document.querySelector('form');
    form.onchange = function() {
        console.log('form change');
        if (formElems[0].value != "" && formElems[1].value != "") {
            btn.disabled = false;
            btn.style.background = '#262EFF';
            btn.onmouseover = function() {
                this.style.background = 'green';
            }
            btn.onmouseout = function() {
                this.style.background = '#262EFF';
            }
        }
        else {
            btn.disabled = true;
            btn.style.background = '#269FFF';
        }
    }
}