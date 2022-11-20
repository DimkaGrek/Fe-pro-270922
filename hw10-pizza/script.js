window.onload = () => {
    let totalAmount = 0;
    let pizzaName = 'Моя піца';
    let sizes = [
        {
            text: 'Виберіть розмір піци',
            price: 0,
            id: 0
        },
        {
            text: 'Мала',
            price: 200,
            id: 1
        },
        {
            text: 'Середня',
            price: 300,
            id: 2
        },
        {
            text: 'Велика',
            price: 400,
            id: 3
        },
        {
            text: 'Гігантська',
            price: 500,
            id: 4
        }
    ];
    let description = 'Соус томатний, моцарела, гриби печериці, помідор, салямі, перець халапеньо, французькі трави';
    let additives = [
        {
            label: 'Гриби',
            id: 'mushrooms',
            price: 10
        },
        {
            label: 'Сир',
            id: 'cheese',
            price: 10
        },
        {
            label: 'Ковбаски',
            id: 'sausage',
            price: 10
        }
    ];
    let delivery = [
        {
            label: "Доставка кур'єром",
            id: 'courier',
            price: 30
        },
        {
            label: "Самовивіз",
            id: 'pickup',
            price: 0
        }
    ];

    let pName = document.querySelector('.pizzaName');
    pName.innerHTML = pizzaName;

    let formSelect = document.querySelector('.form-select');
    let option = document.createElement('option');
    option.setAttribute('selected', 'selected');
    option.innerHTML = sizes[0].text;
    formSelect.appendChild(option);
    for (let i = 1; i < sizes.length; i++) {
        let option = document.createElement('option');
        option.setAttribute('value', i);
        option.innerText = `${sizes[i].text} - ${sizes[i].price} грн.`;
        formSelect.appendChild(option);
    }
    
    let descrip = document.querySelector('.descrip');
    descrip.innerHTML = description;

    let additiv = document.querySelector('.additiv');
    let insertHtml = '';
    for (let i = 0; i < additives.length; i++) {
        insertHtml += `<div class="row">
            <div class="col">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="${additives[i].id}">
                    <label class="form-check-label" for="${additives[i].id}">
                    ${additives[i].label}
                    </label>
                </div>
            </div>
            <div class="col"> +${additives[i].price} грн.</div>
        </div>`;
    }
    additiv.insertAdjacentHTML('afterend', insertHtml);

    let deliv = document.querySelector('.deliv');
    insertHtml = '';
    for (let i = 0; i < delivery.length; i++) {
        insertHtml += ` <div class="row">
        <div class="col">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="${delivery[i].id}" checked="">
                <label class="form-check-label" for="${delivery[i].id}">${delivery[i].label}
                </label>
            </div>
        </div>
        <div class="col">+${delivery[i].price} грн.</div>
    </div>`
    }
    deliv.insertAdjacentHTML('afterend', insertHtml);

    let amount = document.querySelector('.amount');
    let btn = document.querySelector('.btn');
    btn.setAttribute("disabled", "disabled");

    let [...formElems] = formOrder.elements;
    let form = document.querySelector('form');
    form.onchange = function() {
        let index = document.querySelector('.form-select').selectedIndex;
        // add price of pizza
        totalAmount = sizes[index].price;
        // add price of addivites
        for (i = 1; i <= additives.length; i++) {
            if (formElems[i].checked) {
                totalAmount += additives.find(val => val.id == formElems[i].id).price;
            }
        }
        // add delivery price
        let delivStart = formElems.length - delivery.length - 1;
        let delivEnd = delivStart + delivery.length;
        for (let i = delivStart; i <= delivEnd; i++) {
            if (formElems[i].checked) {
                totalAmount += delivery.find(val => val.id == formElems[i].id).price;
            }
        }
        amount.innerHTML = totalAmount + ' грн.';
        if (index > 0) {
            btn.removeAttribute('disabled');
        }
        else btn.setAttribute('disabled', 'disabled');
    }
    btn.onclick = function() {
        setTimeout(function(){
            document.getElementById('closeBtn').click();
        }, 5000)
    }
}