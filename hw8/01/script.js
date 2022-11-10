window.onload = () => {
    //let count = 1;
    let todoList = document.querySelector('.list-group');
    let submit = document.querySelector('button');
    let formEl = document.querySelector('form');
    let [...inputs] = formEl.elements;

    submit.onclick = (e) => {
        e.preventDefault();
        console.log('onclick');
        console.log(inputs[0].value);
        if (inputs[0].value != '') {
            let li = document.createElement('li');
            let now = new Date();
            li.setAttribute('class', 'list-group-item');
            li.innerHTML = inputs[0].value + ` : ${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`;
            todoList.appendChild(li);
            //если задач больше 5, то удаляем первую задачу
            let [...liElements] = document.getElementsByClassName('list-group-item');
            if (typeof liElements !== 'undefined' && liElements.length > 5) {
                todoList.removeChild(todoList.firstElementChild);
            }
            inputs[0].value = '';
        }

    }
}