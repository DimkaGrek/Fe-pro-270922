window.onload = () => {
    let letters = ['','A','B','C','D','E','F','G','H','I','J'];
    let container = document.querySelector('.container');
    let divLetters = document.querySelector('#letters');
    console.log(divLetters.children[0]);
    for (let i = 0; i < letters.length; i++) {
        divLetters.children[i].setAttribute('style', 'width:50px; height:50px; border:2px solid black; border-right: 0; border-bottom: 0; text-align: center; line-height: 50px; font-weight: bold');
        if (i == letters.length - 1) {
            divLetters.children[i].style.borderRight = '2px solid black';
        }
        divLetters.children[i].innerHTML = letters[i];
    }
    for (let i = 1; i <=10; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'row');
        container.appendChild(div);
        for (let j = 0; j < 11; j++){
            let divItem = document.createElement('div');
            divItem.setAttribute('class', 'col-auto');
            divItem.setAttribute('style', 'width:50px; height:50px; border:2px solid black; border-right: 0; border-bottom: 0; text-align: center; line-height: 50px; font-weight: bold');
            if (j == 10) {
                divItem.style.borderRight = '2px solid black';
            }
            if (i == 10) divItem.style.borderBottom = '2px solid black';
            if (j == 0) divItem.innerHTML = i;
            div.appendChild(divItem);
        }
    }
}