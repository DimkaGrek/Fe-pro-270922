window.onload = () => {
    let divContainer = document.createElement('div');
    divContainer.className = 'container';
    divContainer.setAttribute('style', 'display:flex; padding: 10px; flex-wrap: wrap');
    document.body.appendChild(divContainer);
    for (let i = 0; i<100; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'item');
        div.setAttribute('style', 'width: 30px; height:30px; margin: 10px; background-color:green');
        divContainer.appendChild(div);
    }
    document.addEventListener('click', function(e) {
        if (e.target.getAttribute('class') == 'item') {
            e.target.style.backgroundColor = 'red';
        }
    })
}