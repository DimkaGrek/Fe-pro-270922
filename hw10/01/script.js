window.onload = () => {
    let form = document.querySelector('form');
    let submit = document.querySelector('.submit');
    let back = document.querySelector('.back');
    back.hidden = true;
    let [...formElements] = myForm.elements;
    console.log(formElements);
    let passIndex;
    let cpassIndex;
    submit.onclick = function(e) {
        let result = true;
        let pass;
        let cpass;
        e.preventDefault();
        for (let i = 0; i < formElements.length-2; i++) {
            let element = formElements[i];
            console.log(element.value);
            if (element.value == "") {
                element.style.background = '#ff0000';
                result = false;
            }
            if (element.id == 'password') {
                pass = element.value;
                passIndex = i;
            }
            if (element.id == 'cpassword') {
                cpass = element.value;
                cpassIndex = i;
            }
        }
        if (pass != cpass) {
            formElements[passIndex].style.background = '#ff0000';
            formElements[cpassIndex].style.background = '#ff0000';
            result = false;
        }
        if (result) {
            form.hidden = true;
            let h1 = document.querySelector('h1');
            let p = document.createElement('p');
            p.innerHTML = 'Реєсстрація пройшла успішно';
            h1.appendChild(p);
            back.hidden = false;
        }
    }
    for (let i = 0; i < formElements.length-2; i++) {
        let element = formElements[i];
        element.onfocus = function() {
            element.style.background = 'none';
        }
    }
    back.onclick = () => {
        document.location.reload(true);
    }

}   